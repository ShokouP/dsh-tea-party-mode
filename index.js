/**
 * Host half of the tea-party bundle.
 *
 * - Serves the eight avatar PNGs at /tea-party/avatar/<id>.png so the model can
 *   reference them inline in Markdown (`![name](<origin>/tea-party/avatar/id.png)`).
 * - Publishes the `tea_party_avatar_base` prompt variable (the local origin), which
 *   the preset's persona prefix interpolates into that Markdown.
 *
 * The client half (lib/client.js) draws the speaker avatar row and sizes the
 * inline avatar images; this file owns no chat rendering.
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

export const name = 'tea-party-mode'

const IDS = new Set(['deepseek', 'chatgpt', 'claude', 'gemini', 'qwen', 'kimi', 'doubao', 'glm'])
const AVATAR_DIR = new URL('./avatars/', import.meta.url)

function avatarPath(id) {
  return fileURLToPath(new URL(`${id}.png`, AVATAR_DIR))
}

export const inject = ['webServer', 'systemPrompt']

export function apply(ctx) {
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

  ctx.effect(() =>
    ctx.systemPrompt.variable('tea_party_avatar_base', () => {
      try {
        return ctx.webServer.getOrigin()
      } catch {
        return undefined
      }
    }),
  )
}
