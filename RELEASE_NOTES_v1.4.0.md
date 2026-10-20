## 角色茶话会模式 v1.4.0 — 可选真实模型后端（OpenAI 兼容）

- **新增可选工具 `tea_party_reply`**：给插件行配置 `backends` 后，会话模型可以按角色向对应厂商的 OpenAI 兼容端点要一句真实台词；一个都没配时这个工具**根本不会注册**（默认仍是零工具纯聊天）。
- **未配置的角色回退本模型自演**：提示词要求口吻 / 口癖 / 动作 / 角色关系都保持角色卡，不能退化成 AI 助手腔；工具返回 not configured / backend error 时静默自演，不提工具/API/后端。
- **只支持 OpenAI 兼容协议**（`baseUrl` + `/chat/completions`）：OpenAI、DeepSeek、通义 compatible-mode、Kimi、豆包、智谱等可直接填；Claude / Gemini 需先有 OpenAI 兼容网关。
- **密钥只从环境变量读**：默认 `TP_<角色大写>_KEY`，可用 `apiKeyEnv` 自定义；不进日志、不进结果、不进仓库。
- 每角色可配 `baseUrl` / `model` / `apiKeyEnv` / `temperature` / `maxTokens` / `timeoutMs`；`baseUrl` 必须 https（本机回环 http 允许）。
- 配置方式见 README「真实模型后端（可选，OpenAI 兼容）」：在 profile 的 `cordis.patch.yml` 覆盖 `tea-party-mode` 行的 `config.backends`，重启 DSH 让环境变量生效。

其余不变：8 人桌社区/官方形象、每句台词单独成段、行首头像（`/tea-party/avatar/<id>.png` + `tea_party_avatar_base` 变量 + 客户端 26px 圆形裁切）、OOC / 导演命令 / @点名 / 8 轮人人露脸。

安装：下载 `dsh-tea-party-mode-1.4.0.tgz` 用 `plugin_manager install_bundle` 指向它；或
`dsh plugin --profile desktop add github:ShokouP/dsh-tea-party-mode`。
