## 角色茶话会模式 v1.3.0

- 8 位大模型娘围桌语c（和标准 / 极简 / 创造并列的 Agent 预设）
- **每条台词单独成段、行首带角色头像**：提示词要求模型输出 Markdown 头像图片，宿主用 `/tea-party/avatar/<id>.png` 提供图片，客户端把图缩成 26px 圆头像
- 兜底：每条助手消息的动作行还会显示一排出场角色小头像
- 语c：OOC 出戏 / 导演命令（旁白、换场、继续、重写、跳过、收场）/ @点名 / 反模板 / 8 轮人人露脸
- 零工具纯聊天 + 自动 compaction
- 聊天头像行与行首头像均不替换原生 UI，解析失败时安静降级

安装方式：

1. 下载本 Release 的 `dsh-tea-party-mode-1.3.0.tgz`，用 `plugin_manager install_bundle` 指向它；
2. 或 `dsh plugin --profile desktop add github:ShokouP/dsh-tea-party-mode`；
3. 或 clone 后把目录路径作为 `install_bundle` 的 target。

使用：新会话 → 模式选择器 → 自定义组「角色茶话会」。已有会话保留启动时的预设版本。
