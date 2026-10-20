/* Tea Party chat avatars — client half (source template).
 *
 * Registers one extra entry in `conversation.chat.assistant-actions`: for one
 * finalized assistant message it parses the roleplay speakers out of the message
 * text and renders a small row of character avatars. It does not replace any
 * shipped Chat renderer; if it cannot find the message text it renders nothing.
 *
 * The factory is generated into lib/client.js by tools/build_client.py, which
 * inlines 96px round avatars as data URIs under __AVATAR_DATA__.
 */
window.__ModuleLoader__.load({
  id: 'dsh-tea-party-mode',
  factory: (require) => {
    const React = require('react');
    const h = React.createElement;
    const AVATARS = __AVATAR_DATA__;
    const STYLE_ID = 'tea-party-avatar-style';

    const ALIASES = [
      ['deepseek', ['deepseek', '鲸鱼娘', '大肥鱼', '小鲸', '鲸']],
      ['chatgpt', ['chatgpt', 'gpt', '白龙娘', '大肥龙', '白龙']],
      ['claude', ['claude', '克劳姬', '克劳德']],
      ['gemini', ['gemini', '哈基米', '北美大豆包']],
      ['qwen', ['千问', 'qwen', '通义']],
      ['kimi', ['kimi', '月之暗面']],
      ['doubao', ['豆包', 'doubao']],
      ['glm', ['glm', '智谱', '清言']],
    ];

    const STYLE = [
      '.tp-av-row{display:flex;align-items:center;gap:4px;flex-wrap:wrap;padding:2px 0}',
      '.tp-av-chip{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;overflow:hidden;',
      'box-shadow:0 1px 3px rgba(0,0,0,.35);background:var(--dsw-alias-bg-layer-2,rgba(255,255,255,.08));transition:transform .15s ease}',
      '.tp-av-chip:hover{transform:translateY(-2px) scale(1.08)}',
      '.tp-av-chip img{width:100%;height:100%;object-fit:cover;display:block}',
      '.tp-av-more{font-size:10px;color:var(--dsw-alias-label-secondary,rgba(255,255,255,.6));margin-left:2px}',
    ].join('');

    function mountStyle(ctx) {
      try {
        const previous = document.getElementById(STYLE_ID);
        if (previous) previous.remove();
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = STYLE;
        (document.head || document.documentElement).appendChild(style);
        if (typeof ctx.effect === 'function') ctx.effect(() => () => style.remove());
      } catch (error) {
        /* styles are optional */
      }
    }

    /** Map a speaker label to a character id. */
    function toCharacter(label) {
      const text = String(label === null || label === undefined ? '' : label).trim().toLowerCase();
      if (text.length === 0) return '';
      for (let i = 0; i < ALIASES.length; i++) {
        const id = ALIASES[i][0];
        const names = ALIASES[i][1];
        for (let j = 0; j < names.length; j++) {
          if (text.indexOf(names[j]) >= 0) return id;
        }
      }
      return '';
    }

    /** Pull speaker labels out of one assistant message text. */
    function parseSpeakers(text) {
      const found = [];
      const push = (label) => {
        const id = toCharacter(label);
        if (id !== '' && found.indexOf(id) < 0) found.push(id);
      };
      const source = typeof text === 'string' ? text : '';
      // **DeepSeek**：……  (bold speaker format required by the preset)
      const bold = /\*\*\s*([^*\n]{1,16}?)\s*\*\*\s*[:：]/g;
      let match;
      while ((match = bold.exec(source)) !== null) push(match[1]);
      if (found.length > 0) return found;
      // Fallback: lines starting with a bare name + colon (模型名：……).
      const bare = /(?:^|\n)\s*([A-Za-z][A-Za-z0-9 ._-]{0,15}|[\u4e00-\u9fa5]{1,6})\s*[:：]/g;
      while ((match = bare.exec(source)) !== null) push(match[1]);
      return found;
    }

    function stringsIn(value, out, depth) {
      if (depth > 4 || value === null || value === undefined) return;
      if (typeof value === 'string') {
        if (value.length < 4000) out.push(value);
        return;
      }
      if (typeof value !== 'object') return;
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length && i < 80; i++) stringsIn(value[i], out, depth + 1);
        return;
      }
      const keys = Object.keys(value);
      for (let i = 0; i < keys.length && i < 60; i++) {
        const child = value[keys[i]];
        if (typeof child === 'string' || (child !== null && typeof child === 'object')) {
          stringsIn(child, out, depth + 1);
        }
      }
    }

    /** Defensive lookup: find the text of one finalized assistant message. */
    function findMessageText(chat, messageId) {
      if (chat === null || chat === undefined || typeof chat !== 'object') return '';
      const id = String(messageId);
      const seen = new Set();
      const queue = [[chat, 0]];
      while (queue.length > 0) {
        const [value, depth] = queue.shift();
        if (value === null || typeof value !== 'object' || depth > 7 || seen.has(value)) continue;
        seen.add(value);
        const isMessage = value.id === id || value.messageId === id || value.key === id || value.nodeKey === id;
        if (isMessage) {
          const strings = [];
          stringsIn(value, strings, 0);
          const text = strings.join('\n');
          if (text.length > 0) return text;
        }
        const keys = Object.keys(value);
        for (let i = 0; i < keys.length && i < 40; i++) {
          const child = value[keys[i]];
          if (child !== null && typeof child === 'object') queue.push([child, depth + 1]);
        }
      }
      return '';
    }

    function AvatarStrip(props) {
      try {
        if (props.messageId === null || props.messageId === undefined) return null;
        let chat = null;
        if (typeof props.useChat === 'function') {
          try {
            chat = props.useChat();
          } catch (error) {
            chat = null;
          }
          if (chat === null || chat === undefined || typeof chat !== 'object') {
            try {
              chat = props.useChat((state) => state);
            } catch (error) {
              chat = null;
            }
          }
        }
        const text = findMessageText(chat, props.messageId);
        const speakers = parseSpeakers(text);
        if (speakers.length === 0) return null;
        return h(
          'div',
          { className: 'tp-av-row', 'aria-label': 'Roleplay speakers' },
          speakers.map((id) =>
            h(
              'span',
              { key: id, className: 'tp-av-chip', title: id },
              h('img', { src: AVATARS[id], alt: id, draggable: false }),
            ),
          ),
        );
      } catch (error) {
        return null;
      }
    }

    return {
      inject: ['slots'],
      apply(ctx) {
        mountStyle(ctx);
        try {
          ctx.slots.inject('conversation.chat.assistant-actions', () =>
            ctx.slots.register(
              { name: 'conversation.chat.assistant-actions', id: 'tea-party-avatars', order: 30 },
              AvatarStrip,
            ),
          );
        } catch (error) {
          console.warn('[tea-party] avatar slot failed', error);
        }
      },
    };
  },
});
