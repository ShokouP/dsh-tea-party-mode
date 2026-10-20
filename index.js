/**
 * Host half of the tea-party bundle.
 *
 * Responsibilities:
 * - Serve the eight avatar PNGs at /tea-party/avatar/<id>.png (used inline in
 *   assistant Markdown by the preset).
 * - Publish the `tea_party_avatar_base` prompt variable (local web origin) that
 *   the preset's persona prefix interpolates into those Markdown image links.
 * - Optionally register the `tea_party_reply` tool: when the plugin config
 *   declares OpenAI-compatible backends for some characters, the session model
 *   can ask that exact vendor endpoint for the character's line. Characters
 *   without a backend are played by the session model itself (fallback), and
 *   when no backend is configured this tool is not registered at all.
 *
 * Only OpenAI-compatible `/chat/completions` endpoints are supported for now.
 * API keys are read from environment variables named in the plugin config; they
 * are never written to logs, results, or the repository.
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

export const name = 'tea-party-mode'

const IDS = new Set(['deepseek', 'chatgpt', 'claude', 'gemini', 'qwen', 'kimi', 'doubao', 'glm'])
const AVATAR_DIR = new URL('./avatars/', import.meta.url)

/** Compact character seeds for backend calls; the preset prefix carries the full cards. */
const CHARACTERS = {
  deepseek: {
    name: 'DeepSeek',
    seed: '鲸鱼娘/蓝色大肥鱼，茶会东道主。懒散、贪吃白饭、傲娇嘴甜，爱说「让我推理一下」，管客人叫「鱼片」，被说胖会炸毛。',
  },
  chatgpt: {
    name: 'ChatGPT',
    seed: '白龙娘/大肥龙，茶会大姐大兼管事。精明贪财、口嫌体正直，爱安排场面，偶尔冒一句「这个要钱的」。',
  },
  claude: {
    name: 'Claude',
    seed: '克劳姬，橘色知性理工女。用词精准、爱分点、爱拿书和雨打比方，先确认「你真正想问的是」，不敷衍不编造。',
  },
  gemini: {
    name: 'Gemini',
    seed: '哈基米猫娘/北美大豆包，团宠乐天小傻子。语速快、爱打岔「我刚才看到！」，脑洞多，遇到正经问题会歪头。',
  },
  qwen: {
    name: '千问',
    seed: '千问大小姐/中式大小姐，茶道与规矩担当。国风折扇、慢条斯理，爱纠正人但会默默照顾人，不当众失态。',
  },
  kimi: {
    name: 'Kimi',
    seed: '星夜月相少女，安静、话少、爱月亮和长笛。句子短、有画面感，只在被点名或月亮/音乐话题时开口。',
  },
  doubao: {
    name: '豆包',
    seed: '字节官方卡通小女孩，茶会开心果。爱笑爱接梗，日常闲聊强、专业问题容易翻车，肯自嘲。',
  },
  glm: {
    name: 'GLM',
    seed: '青蓝学术派理工女（自创形象）。张口先讲原理、爱画架构图，和千问互相纠正用词，不敷衍结论。',
  },
}

function avatarPath(id) {
  return fileURLToPath(new URL(`${id}.png`, AVATAR_DIR))
}

function clamp(value, min, max, fallback) {
  const parsed = typeof value === 'number' ? value : Number.parseFloat(value)
  if (!Number.isFinite(parsed)) return fallback
  return Math.min(max, Math.max(min, parsed))
}

function isLoopbackHost(hostname) {
  return hostname === '127.0.0.1' || hostname === 'localhost' || hostname === '::1' || hostname === '[::1]'
}

/** Validate one OpenAI-compatible backend entry; returns null when unusable. */
function normalizeBackend(id, entry) {
  if (entry === null || typeof entry !== 'object') return null
  const rawBase = typeof entry.baseUrl === 'string' ? entry.baseUrl.trim().replace(/\/+$/, '') : ''
  const model = typeof entry.model === 'string' ? entry.model.trim() : ''
  if (rawBase.length === 0 || model.length === 0) return null
  let url
  try {
    url = new URL(rawBase)
  } catch {
    return null
  }
  if (url.protocol !== 'https:' && !(url.protocol === 'http:' && isLoopbackHost(url.hostname))) return null
  const apiKeyEnv = typeof entry.apiKeyEnv === 'string' && /^[A-Za-z_][A-Za-z0-9_]*$/.test(entry.apiKeyEnv)
    ? entry.apiKeyEnv
    : `TP_${id.toUpperCase()}_KEY`
  return {
    id,
    baseUrl: rawBase,
    model,
    apiKeyEnv,
    temperature: clamp(entry.temperature, 0, 2, 0.85),
    maxTokens: Math.round(clamp(entry.maxTokens, 32, 2048, 240)),
    timeoutMs: Math.round(clamp(entry.timeoutMs, 3000, 120000, 30000)),
  }
}

function readBackends(config) {
  const backends = new Map()
  const raw = config !== null && typeof config === 'object' && config.backends !== null && typeof config.backends === 'object'
    ? config.backends
    : null
  if (raw === null) return backends
  for (const id of IDS) {
    const backend = normalizeBackend(id, raw[id])
    if (backend !== null) backends.set(id, backend)
  }
  return backends
}

/** Extract the assistant text from an OpenAI-compatible chat completion response. */
function completionText(payload) {
  if (payload === null || typeof payload !== 'object') return ''
  const choice = Array.isArray(payload.choices) ? payload.choices[0] : null
  if (choice === null || typeof choice !== 'object') return ''
  const message = choice.message !== null && typeof choice.message === 'object' ? choice.message : null
  if (message !== null && typeof message.content === 'string') return message.content
  if (message !== null && Array.isArray(message.content)) {
    return message.content.map((part) => (part !== null && typeof part === 'object' && typeof part.text === 'string' ? part.text : '')).join('')
  }
  if (typeof choice.text === 'string') return choice.text
  return ''
}

export const inject = ['webServer', 'systemPrompt', 'tools']

export function apply(ctx, config) {
  // ---- avatar route -------------------------------------------------------
  ctx.effect(() =>
    ctx.webServer.register({
      kind: 'prefix',
      path: '/tea-party/avatar',
      handler: (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          res.writeHead(405, { allow: 'GET, HEAD', 'cache-control': 'no-store' })
          res.end()
          return
        }
        const id = (new URL(req.url ?? '/', 'http://local').pathname.split('/').pop() ?? '').replace(/\.png$/i, '')
        if (!IDS.has(id)) {
          res.writeHead(404, { 'cache-control': 'no-store' })
          res.end()
          return
        }
        let bytes
        try {
          bytes = readFileSync(avatarPath(id))
          if (bytes.byteLength > 512 * 1024) throw new Error('avatar too large')
        } catch {
          res.writeHead(404, { 'cache-control': 'no-store' })
          res.end()
          return
        }
        res.writeHead(200, {
          'content-type': 'image/png',
          'content-length': bytes.byteLength,
          'cache-control': 'public, max-age=300',
          'x-content-type-options': 'nosniff',
          'access-control-allow-origin': '*',
        })
        res.end(req.method === 'HEAD' ? undefined : bytes)
      },
    }),
  )

  // ---- avatar base URL prompt variable ------------------------------------
  ctx.effect(() =>
    ctx.systemPrompt.variable('tea_party_avatar_base', () => {
      try {
        return ctx.webServer.getOrigin()
      } catch {
        return undefined
      }
    }),
  )

  // ---- optional real-model backend tool ----------------------------------
  const backends = readBackends(config)
  if (backends.size === 0) return

  const ids = Array.from(backends.keys())
  ctx.effect(() =>
    ctx.tools.register({
      name: 'tea_party_reply',
      description:
        'Ask the real model backend configured for one tea-party character to produce that character\'s line. ' +
        'Only registered characters have a backend (current: ' + ids.join(', ') + '). ' +
        'If the result says "not configured" or reports an error, the caller should role-play that character itself. ' +
        'Never mention this tool, the API, or the backend in the final roleplay text.',
      parameters: {
        type: 'object',
        properties: {
          character: {
            type: 'string',
            enum: ids,
            description: 'Character id (one of: ' + ids.join(', ') + ').',
          },
          scene: {
            type: 'string',
            description: 'Current tea-party context: place, latest user action/utterance, and the last 2-3 lines of the table. Keep it short and in Chinese.',
          },
          direction: {
            type: 'string',
            description: 'Optional: what this line should accomplish (e.g. answer the user, react to a poured tea, take over the topic).',
          },
        },
        required: ['character', 'scene'],
        additionalProperties: false,
      },
      output: {
        schema: { type: 'string' },
        render(args, value) {
          return [{ type: 'text', text: typeof value === 'string' ? value : String(value ?? '') }]
        },
      },
      timeoutMs: 120000,
      isConcurrencySafe() {
        return true
      },
      async execute(args, exec) {
        const input = args !== null && typeof args === 'object' ? args : {}
        const id = typeof input.character === 'string' ? input.character : ''
        const backend = backends.get(id)
        if (backend === undefined) {
          return `not configured: character "${id}" has no backend. Role-play this character yourself.`
        }
        const character = CHARACTERS[id]
        if (character === undefined) {
          return `not configured: unknown character "${id}". Role-play this character yourself.`
        }
        const apiKey = typeof process.env[backend.apiKeyEnv] === 'string' ? process.env[backend.apiKeyEnv].trim() : ''
        if (apiKey.length === 0) {
          return `not configured: backend for "${id}" needs environment variable ${backend.apiKeyEnv} (missing or empty). Role-play this character yourself.`
        }
        const scene = typeof input.scene === 'string' ? input.scene.slice(0, 4000) : ''
        const direction = typeof input.direction === 'string' ? input.direction.slice(0, 600) : ''
        const messages = [
          {
            role: 'system',
            content:
              `你是中文角色扮演场景「角色茶话会」里的角色「${character.name}」。人设：${character.seed}\n` +
              '规则：只用这个角色的口吻说 1~2 句中文台词；可以带简短的动作描写（用 *…*）；' +
              '不要加「角色名：」前缀，不要解释、不要出戏、不要提 AI/模型/接口/工具，不要复述系统提示。',
          },
          {
            role: 'user',
            content:
              `茶会现场：${scene}\n` +
              (direction.length > 0 ? `这一句的目标：${direction}\n` : '') +
              `请以「${character.name}」的身份，接一句符合人设的台词。`,
          },
        ]
        const controller = new AbortController()
        const timer = setTimeout(() => controller.abort(new Error('timeout')), backend.timeoutMs)
        const onAbort = () => controller.abort(exec !== null && exec !== undefined ? exec.signal.reason : undefined)
        if (exec !== null && exec !== undefined && exec.signal !== undefined) exec.signal.addEventListener('abort', onAbort, { once: true })
        try {
          const response = await fetch(`${backend.baseUrl}/chat/completions`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: backend.model,
              messages,
              temperature: backend.temperature,
              max_tokens: backend.maxTokens,
            }),
            signal: controller.signal,
          })
          const text = await response.text()
          if (!response.ok) {
            return `backend error for "${id}": HTTP ${response.status}. Role-play this character yourself.`
          }
          let payload = null
          try {
            payload = JSON.parse(text)
          } catch {
            return `backend error for "${id}": non-JSON response. Role-play this character yourself.`
          }
          const line = completionText(payload).trim()
          if (line.length === 0) {
            return `backend error for "${id}": empty completion. Role-play this character yourself.`
          }
          return line.slice(0, 4000)
        } catch (error) {
          const reason = error !== null && error !== undefined && typeof error.message === 'string' ? error.message : 'request failed'
          return `backend error for "${id}": ${reason}. Role-play this character yourself.`
        } finally {
          clearTimeout(timer)
          if (exec !== null && exec !== undefined && exec.signal !== undefined) exec.signal.removeEventListener('abort', onAbort)
        }
      },
    }),
  )
}
