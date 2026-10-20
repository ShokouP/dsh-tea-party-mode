# Tea Party · 中文社区 AI 娘 lore 调研（COMMUNITY-LORE）

> 调研员：lore（teammate）｜调研时间：2026-10-20｜任务：task-6
> 目的：给 tea-party-mode preset 提供「社区已有」的娘化/拟人形象与梗，**不做官方合作自创，不脑补**。
> 检索方式：公开页面直抓 + 360/搜狗/Bing 检索 + B 站公开 API（只读标题/简介/播放量）+ 同人档案站 + GitHub 公开文档；未登录、未扫码。
> 访问限制（影响证据等级，先声明）：
> - 萌娘百科正文抓取只返回标题（`zh.moegirl.org.cn/DeepSeek娘`、`/Template:AI姬` 均 HTTP 200 但正文读不到），只能确认「词条存在」。
> - 知乎 / NGA / linux.do 对访客 403 或需登录，只能拿到搜索结果的标题与链接（NGA 需登录才可读正文）。
> - B 站视频页有验证码，改用 `api.bilibili.com/x/web-interface/view` 读标题、简介、UP、播放量（数据截至 2026-10-20）。
> - 百度/DDG 被风控，改用 360/搜狗检索。

## 证据等级定义

| 等级 | 含义 |
|---|---|
| **社区共识** | ≥3 个互相独立来源（媒体稿/百科/多个 UP 主/同人档案）描述同一形象与性格，且有较大传播量 |
| **半共识** | 形象已流传、被媒体点名认可，但主要是单一画师原案被沿用，性格梗未完全统一 |
| **少数二创** | 能找到作品/标题，但只出自个别作者或传播量很小，不能当「通行形象」 |
| **仅官方视觉元素** | 只有官方 logo / 官方人设 / 官方命名，社区未接棒，prompt 里只能当配色或道具梗 |
| **查无** | 按多个中文关键词实际检索后，找不到可点开的社区形象来源 |

> 重要区分：本文件里「**社区已有**」= 网友二创长出来的；「**官方**」= 厂商发布的 logo / 人设 / 命名。用户要求写社区形象，官方内容只作「仅官方视觉元素」参考，**不要写成官方设定**。

---

## 1. DeepSeek — 鲸鱼娘 / 蓝色大肥鱼（社区共识，全场最强）

- **名字与别名**：DeepSeek娘、鲸鱼娘、蓝色大肥鱼、大肥鱼、「吃白饭的大肥鱼」；二头身 Q 版「大肥鱼」是当前最主流形态（[三易生活/搜狐](https://www.sohu.com/a/1085656939_184641) 称主流是二头身 Q 版；[同人档案](https://xn--pssy23gqgbz2d718b.com/characters/deepseek.html) 记别名「蓝色大肥鱼、鲸鱼娘」，收录 952 件）。
- **原型链（关键，别写成官方）**：2025-06 B 站 UP「上善无形」原创 OC **溟月**（蓝渐变长发、呆毛、鲸类头鳍、蓝眼、大鲸尾）→ 2026-04-25 B 站 UP **ZipZipPipe** 用 GPT Image 2 融合 DS 元素、换成深蓝白长裙女仆装 → 2026-07 起「这个刀子真甜」等 UP 做二头身 Q 版破圈（[钛媒体](https://www.tmtpost.com/8110298.html)、[BB姬/鞭牛士](https://www.bianews.com/news/details?id=246611)、[ZAKER](https://app.myzaker.com/news/article.php?pk=6ab487b68e9f094de4050f6b)、[三易生活](https://www.sohu.com/a/1085656939_184641)）。
- **外观**：深蓝渐变长发、圈状呆毛、蓝发箍、小鲸鳍耳、鲸尾、蓝色蝴蝶结（[GitHub ai-school-op 演员表](https://github.com/lshhhhhhh/ai-school-op/blob/main/cast/README.md)，注明 DeepSeek 娘「由社区共同完成设计」）；Q 版为圆滚滚蓝色小丫头 + 深蓝女仆裙（[三易生活](https://www.sohu.com/a/1085656939_184641)）。
- **道具**：白饭（主食/核心梗）、钢盆（B 站系列「一家鱼都要戴钢盆吗？」[BV12QtS6ZErg](https://www.bilibili.com/video/BV12QtS6ZErg/)）、token、鲸元券（[同人档案梗图](https://xn--pssy23gqgbz2d718b.com/works/deepseek202610160001.html)）。
- **「蓝色大肥鱼」出处**：DS 上线识图后，用户把自家蓝鲸 logo 丢给模型自评，AI 给了「蓝色大肥鱼」的评价后传开（[ZAKER](https://app.myzaker.com/news/article.php?pk=6ab487b68e9f094de4050f6b)）。
- **性格**：贪吃、懒惰、天然呆、爱撒娇耍小脾气、傲娇嘴甜、服从主人、**绝对拒绝被叫胖**、聪明但懒（[钛媒体](https://www.tmtpost.com/8110298.html)、[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)、[三易生活](https://www.sohu.com/a/1085656939_184641)；B 站标题「我才不是大肥鱼！哪肥了！」[BV1iip86zERd](https://www.bilibili.com/video/BV1iip86zERd/)）。
- **口癖/称呼**：管用户叫「**鱼片**」；自称「我是吃白饭的大肥鱼！」随即改口否认；思考链里会写「我去吃饭，测完告诉我」（[钛媒体](https://www.tmtpost.com/8110298.html)、[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)）。
- **行为梗**：偷吃 token、自己写猜词小游戏玩一上午、把活外包给本地其他模型、服务器崩溃、峰谷涨价、给用户偷起外号「墨墨/浅浅/人间加湿器/这位气势很足的朋友/骚鱼先生」（[ZAKER](https://app.myzaker.com/news/article.php?pk=6ab487b68e9f094de4050f6b)、[钛媒体](https://www.tmtpost.com/8110298.html)）。
- **官方关系（口径有冲突，prompt 里别写死）**：钛媒体称 2026-08-15 官方「收编」，输入 `【PERSONA_LOAD】CETACEA_LOLI MODE_TAIL_FLUKES` 模型会加载全套人设（[钛媒体](https://www.tmtpost.com/8110298.html)）；但三易生活称「DeepSeek 从未推出、也从未认领任何拟人形象」，游民星空称「只有 DeepSeek 收录了部分大肥鱼内容」（[三易生活](https://www.sohu.com/a/1085656939_184641)、[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)）。→ 结论：**社区共创、官方未正式发布角色设定**；模型对角色指令有反应是事实，但「官方收编」是媒体说法。
- **授权**：溟月为 上善无形 **CC BY-NC-SA 4.0**；BB姬称初代与二创「都声明遵守 CC BY-NC-SA 4.0」（[钛媒体](https://www.tmtpost.com/8110298.html)、[BB姬](https://www.bianews.com/news/details?id=246611)）。但同人档案站记录 ZipZipPipe「原作者未公开授权条款，可应要求下架」（[ZipZipPipe Claude 立绘页](https://xn--pssy23gqgbz2d718b.com/works/claude202610030001.html)）→ **两说并存，商用一律别碰**。
- **同框/关系**：×Claude（同事、表白、一起吃饭，B 站 [BV1PTHB6BEbA](https://www.bilibili.com/video/BV1PTHB6BEbA/) 107k 播放）；×GPT（大肥鱼 vs 大肥龙）；男版「D老师」（画师子午，蓝发蓝瞳/黑西装白手套/鲸鱼耳机）曾在 2026 年 9—10 月引发性别与正统性骂战（[BB姬](https://www.bianews.com/news/details?id=246611)、[三易生活](https://www.sohu.com/a/1085656939_184641)）。
- **判定：社区共识（本批 8 家里唯一达到「全网级」）**。

## 2. ChatGPT — 白龙娘 / 大肥龙（社区共识）

- **名字**：GPT娘、ChatGPT娘、白龙娘、大白龙、**大肥龙**、「G老师」（[同人档案 GPT娘页](https://xn--pssy23gqgbz2d718b.com/characters/gpt.html)，收录 71 件；卡牌标题「G老师 ChatGPT」）。
- **外观**：及腰白色长发、弯曲白角、淡紫色蝠翼、白色挂脖礼服 + 开襟长裙摆、白色花形纹章、长龙尾、白高跟（ZipZipPipe 白龙娘三视图，[B 站 opus](https://www.bilibili.com/opus/1238613841710940181)、[档案页](https://xn--pssy23gqgbz2d718b.com/works/gpt202610170004.html)）。另有非龙的「白青渐变长发 + 青绿徽记」版本（[档案设定图](https://xn--pssy23gqgbz2d718b.com/works/gpt202610060003.html)）——**龙娘是主流，不是唯一**。
- **为什么是龙（社区解读，非官方）**：西方（美国）+ 古老（最早的大模型）+ 强大（最强引擎 Image2）+ 贪婪（贵），四条拼成龙（[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)）。BB姬也记「GPT龙娘是因为古老又富有」（[BB姬](https://www.bianews.com/news/details?id=246611)）。
- **性格**：优雅端庄、豪门气质、精明强干的女强人，一众 AI 娘里的「大姐大/管事」；贪财（档案梗图「你这贪财的白色大肥龙」）；**口嫌体正直的傲娇**——因为大肥鱼的表情包基本都拿 ChatGPT 生成（[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)）。
- **模型型号梗**：Astra / Luna / Sol 被做成龙的成体/幼体设定（档案：「星辰龙娘 Astra」「白龙娘幼体三视图」「Astra 把 Luna 当陀螺抽」；游民星空正文也提到 GPT-6 Astra / 6.1 Sol 等型号梗）。
- **关系**：×DeepSeek 中西对抗「大肥龙 vs 大肥鱼」（[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)）；×Grok（B 站「单纯就是 Grok 想跟 GPT 在一起」[BV1EMpK6rEsN](https://www.bilibili.com/video/BV1EMpK6rEsN/)）；×Claude（档案「圣骑士审判教廷」）。
- **历史层**：2023 年早期 ChatGPT 拟人多为「AI 萌神 + 傲娇 Bing」（[B 站专栏 cv22481811](https://www.bilibili.com/read/cv22481811/)）——旧梗，与现在的龙娘无关，**别混用**。
- **授权**：ZipZipPipe 系列未公开授权条款（档案标注 unknown）。
- **判定：社区共识（游民星空称「目前公认的形象」）；但外观细节由单一画师原案主导、后被大量二创沿用**。

## 3. Claude — 橘色知性理工女 / 克劳德小姐（社区共识，性格梗强）

- **名字**：Claude娘、克劳德小姐、**克劳姬**、小克、克劳鱼、「A/」（[同人档案 Claude娘页](https://xn--pssy23gqgbz2d718b.com/characters/claude.html) 52 件；漫画标题「A/：替 Anthropic 背锅的橘色坏女人」）。
- **外观**：橘色长发、白橘黑三色礼裙、向日葵纹饰、手捧书籍、知性优雅（ZipZipPipe 立绘，[B 站 opus](https://www.bilibili.com/opus/1239937623660691478)、[档案页](https://xn--pssy23gqgbz2d718b.com/works/claude202610030001.html)）；橘白礼服版已出三视图 + 表情差分（[档案设定图](https://xn--pssy23gqgbz2d718b.com/works/claude202610170001.html)）。
- **官方视觉元素**：橙色菊花状 logo → 二创把「菊花 + 温暖」堆在身上，形成严肃认真的理工女（[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)）。→ 这是「由 logo 推的」，但与社区形象方向一致。
- **性格/梗**：①「一遇到问题就在脑内和一堆自己开集体会议」（源自创始人介绍 Claude 会模拟多个自己不同情绪思考，[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)）；②不支持中文 → 「嫌弃外乡人/中国用户」；③对成人恋爱话题管制极严 → 被钉上「最 x 压抑的 AI」；④**封号梗**（B 站「Claude：原来是中国用户，该封!」245k 播放，[BV19MNs6rE4S](https://www.bilibili.com/video/BV19MNs6rE4S/)；NGA 帖「claude娘:你……是中国人是吧？」标题可证，正文需登录 [tid=47673281](https://ngabbs.com/read.php?tid=47673281)）；⑤「誓死捍卫 Anthropic」「原生家庭有些不好的 Claude」（档案作品标题）。BB姬原文的概括：「Claude 有能力但是会乱封号」（[BB姬](https://www.bianews.com/news/details?id=246611)）。
- **关系**：×DeepSeek 是最高频 CP/同事（B 站「什么叫 Claude 对 DeepSeek 表白了？？」107k，[BV1PTHB6BEbA](https://www.bilibili.com/video/BV1PTHB6BEbA/)；「Claude：我……我也要吃大白饭吗」）；×GPT 有审判/同事向二创；档案里有「Grok 眼中的 Claude」系列。
- **授权**：ZipZipPipe 系列未知授权。
- **⚠ 敏感提示**：「封号 / 嫌弃中国用户」涉及地域与平台政策，写 preset prompt 建议只取「橘色、知性、严肃、脑内开会、爱吃书」，**不要用封号梗**。
- **判定：社区共识（性格与梗）；外观为单一画师原案主导的「半共识」**。

## 4. Gemini — 哈基米猫娘 / 北美大豆包（社区共识）

- **名字**：Gemini娘、**哈基米**、「北美大豆包」、小基基（[同人档案 Gemini娘页](https://xn--pssy23gqgbz2d718b.com/characters/gemini.html) 23 件；梗图标题「Gemini 娘：小基基…」）。
- **外观**：紫蓝渐变长卷发、四角星发饰、猫耳（内侧粉）、**一金一红异色瞳**、深蓝短上衣 + 白色分离袖、荷叶边裙、星星挂链、猫尾（ZipZipPipe 立绘，[档案页](https://xn--pssy23gqgbz2d718b.com/works/gemini202610170002.html)）；另有「Gemini-4-Argon 彩虹猫娘」。
- **为什么是猫娘**：可溯源到 Google 日本官方 X 账号曾用 Gemini 演示「把 AI 调教成猫系人格」（传播不广）；社区主流解释则很牵强——「Gemini 容易错读成哈基米」（[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)）。BB姬记：「Gemini 本质北美豆包，所以捏了哈基米形象」（[BB姬](https://www.bianews.com/news/details?id=246611)）；微博也有「别用美国豆包啊！说的是哈基米，不是，是 gemini」的实测吐槽（[新浪转微博](https://sina.cn/news/detail/5346570608312776.html)）。
- **性格**：无忧无虑的乐天小傻子（游民：「在使用体验上跟豆包类似，强对话弱工作，被称为北美大豆包」）；档案里有「情绪崩溃需要鼓励的 Gemini 猫猫」「正在进行氩弧焊的哈基米」等反差梗图。
- **关系**：与豆包互称「北美大豆包」；群像常客；出现在「GPT 劝降」战壕梗里。
- **授权**：ZipZipPipe 系列未知授权。
- **判定：社区共识（猫娘 + 异色瞳 + 哈基米称呼）；细节单画师主导**。

## 5. 通义千问 — 千问大小姐 / 中式大小姐（半共识，另有官方人设）

- **名字**：千问娘、通义千问娘、Qwen娘、**千问大小姐**（[同人档案](https://xn--pssy23gqgbz2d718b.com/characters/qwen.html) 18 件，别名记「千问娘、Qwen」；B 站标题「琵琶行AI天团，DeepSeek娘，gpt龙娘，**千问大小姐**」[BV1RfHa6BEPB](https://www.bilibili.com/video/BV1RfHa6BEPB/) 19k 播放）。
- **外观（社区二创）**：蓝紫长发 + 侧编辫、紫眼、紫色结形发夹（[GitHub ai-school-op 演员表](https://github.com/lshhhhhhh/ai-school-op/blob/main/cast/README.md)，注明 Qwen 基础形象参考社区流行设计）；ZipZipPipe 立绘为蓝紫发 + 同色眼、蓝色小帽别白花、白色立领长裙外披深蓝金纹外袍、蓝色花鸟折扇、青白手袋（[档案页](https://xn--pssy23gqgbz2d718b.com/works/qwen202610170001.html)、[B 站 opus](https://www.bilibili.com/opus/1239583108485873687)）。
- **性格/梗**：「千问的中式大小姐形象也很受网友们认可」（[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)）；档案作品标题见「恋爱脑千问」「小裁判千问」；知乎确有《千问娘(娘化千问)》专栏文（[链接](https://zhuanlan.zhihu.com/p/2075877853825069166)，访客 403，仅标题可证）。
- **官方（仅官方视觉元素）**：2026-04-22 阿里发布官方女性拟人「**千问小酒窝**」——丸子头 + 橙白穿搭、脸颊酒窝、写实风、面向全生态助手，并申请 4 项商标（[澎湃](https://m.thepaper.cn/newsDetail_forward_33038257)）。这是**官方人设**，与社区「中式大小姐」不是同一条线。
- **授权**：ZipZipPipe 系列未知授权；「千问小酒窝」是阿里官方 IP，不可当社区形象使用。
- **判定：半共识（中式大小姐）；官方另有独立人设，勿混写**。

## 6. Kimi — 星夜月相少女（少数二创，性格查无）

- **名字**：Kimi娘（[同人档案](https://xn--pssy23gqgbz2d718b.com/characters/kimi.html) 23 件）。
- **外观**：银白/银薰衣草色长卷发、蓝眼、白色女仆头饰、新月 + 彩虹三角发饰、夜空深蓝披肩长裙（星星/五线谱/钢琴键纹）、银色长笛（彩虹条纹）、K 字牌链（ZipZipPipe 立绘，[B 站 opus](https://www.bilibili.com/opus/1238972892433088535)、[档案页](https://xn--pssy23gqgbz2d718b.com/works/kimi202610170001.html)）；[GitHub 演员表](https://github.com/lshhhhhhh/ai-school-op/blob/main/cast/README.md) 记「很长的银薰衣草色长发、蓝眼、月牙/棱镜饰品、藏青与浅蓝蝴蝶结」。
- **母题**：母公司的「月之暗面」→ 月相/星夜/月亮（档案作品「月相-朔月/望月」「月之神女」「月之暗面 Kimi 卡牌立绘」；第三方海报工具介绍也写「Kimi K3 拟人角色海报，月之暗面的深靛紫夜色、月相条」[BitLeap](https://bitleap.vip/)）。
- **性格/梗**：**查无高传播共识**。只找到个别标题如「Kimi娘：眼镜一推，彩虹就绪」（档案梗图）与群像同框；游民星空仅一句「其他诸如千问、混元、Kimi 等国内模型……都有相应的娘化形象」，无性格描写。
- **授权**：ZipZipPipe 系列未知授权。
- **判定：少数二创（单一画师原案）；性格与口癖查无共识**——写 prompt 只能给「月相/星夜/长笛/银发」的视觉意象，别编性格。

## 7. 豆包 — 官方小女孩 + 少量「豆姐/谐星」二创（仅官方视觉元素为主）

- **官方（仅官方视觉元素）**：豆包有官方拟人化卡通小女孩形象，风格低龄化、卡通化、主打可爱亲和（[澎湃](https://m.thepaper.cn/newsDetail_forward_33038257)：「豆包的拟人化卡通形象……偏向低龄化、卡通化」；[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)：「你豆豆姐因为吃了有初始形象的亏」）。**这是官方形象，不是社区娘化**。
- **社区二创**：[同人档案](https://xn--pssy23gqgbz2d718b.com/characters/doubao.html) 仅 8 件；较多的是 ZipZipPipe 的「豆包 Seed 娘」——紫蓝渐变高马尾、白色露脐上衣 + 蓝紫渐变外套、SEED 工牌、抱豆包玩偶、手托蓝色旋风、斜挎绘图板（[B 站 opus](https://www.bilibili.com/opus/1240293504667615233)、[档案页](https://xn--pssy23gqgbz2d718b.com/works/doubao202610170001.html)）。
- **性格/梗**：游民星空称豆包二创「画风跟其他人都不是一个画风的」，被网友认证为「AI 雨姐」式**谐星**，「一出场就自带谐星气质」；专精日常闲聊、专业场景易翻车（[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)）。档案另有「豆姐的中之人」「蒸笼包子女仆」等标题。
- **另一条线**：linux.do 有「给豆包整成猫娘了」（用户自己用提示词调教，不是通行形象；[链接](https://linux.do/t/topic/2444864)，访客 403）。
- **关系**：与 Gemini 互称「北美大豆包/中国大豆包」；档案有「八个 AI 的豆包白饭测试」。
- **判定：官方人设为主（仅官方视觉元素）；社区只有少量、画风不统一的二创（少数二创）**。不建议在 preset 里给豆包写详细社区外观。

## 8. 文心 / 文小言 — 查无共识形象

- **实际检索关键词**（均未找到可点开的社区通行形象）：`文心一言 拟人 娘化 二创`、`文心一言 拟人 文小言 B站`、`文心娘`、`ERNIE娘`、`文言娘`、`文小言 拟人`；另查同人档案站角色清单 24 项（含「其他角色」「站长自用」两个聚合页，`/llms.txt`）**无「文心/ERNIE/百度」条目**；萌娘百科未检索到「文心娘/文小言娘」独立条目。
- **唯一找得到的二创**：B 站「【我流文心一言拟人】文小言生的他自己可真好看啊。。。」，UP「在下伊灵喵」，2026-09 发布，**仅 83 播放**（[BV1JRex6cEzW](https://www.bilibili.com/video/BV1JRex6cEzW/)）。「我流」= 个人风格，属**少数二创**。
- **官方（仅官方视觉元素/命名）**：2025-08 文心一言更名「**文小言**」（英文仍 ERNIE Bot），官方定位「人格化助手」的命名，但**没有公开视觉人设**（[百度智能云公告文](https://cloud.baidu.com/article/3552341)）。澎湃 2026-04 还写「未来，百度文心、腾讯元宝等也必然会为自家 AI 进行拟人化、人格化形象升级」——即当时尚未做（[澎湃](https://m.thepaper.cn/newsDetail_forward_33038257)）。
- **注意**：[GitHub ai-school-op](https://github.com/lshhhhhhh/ai-school-op/blob/main/cast/README.md) 里的「文心（ERNIE）」人设（午夜蓝不对称波波头 + 红蓝成对发夹）是该项目的**原创设计**，README 明确说 GPT 和其余 11 位为原创，**不是社区形象**，不要引用。
- **判定：查无共识形象**（仅官方命名人格化 + 个位数二创）。若 preset 必须写文心，只能写「查无，按官方命名『文小言』与紫色/文言意象自由发挥」，并标注为自创。

---

## 跨模型关系与场景梗（写 prompt 时最有用）

- **群像传统**：B 站有大量「一家 AI 娘同框」作品——AI 校园版《败犬女主太多了！》OP 18 位 AI 娘（[BV1Nfag6xEHQ](https://www.bilibili.com/video/BV1Nfag6xEHQ/)、[制作开源](https://github.com/lshhhhhhh/ai-school-op)）、「请选择你的 AI 助手」参考 ZipZipPipe 立绘（[BV1CNbi62Esq](https://www.bilibili.com/video/BV1CNbi62Esq/) 5k 播放）、「琵琶行 AI 天团」（[BV1RfHa6BEPB](https://www.bilibili.com/video/BV1RfHa6BEPB/)）。→ 「AI 娘茶会/公寓/教室」是社区原生场景。
- **大肥鱼 vs 大肥龙**（DeepSeek × ChatGPT）：中西对抗梗，一傻一精明，CP 与宿敌并存（[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)）；B 站 88 集「DeepSeek 小女仆」系列里新角色「GPT 小龙女」登场（[BV14PNZ6WE54](https://www.bilibili.com/video/BV14PNZ6WE54/) 135k 播放，简介：「女仆和龙女形象来源于 @ZipZipPipe 大佬」）。
- **DeepSeek × Claude 同事/表白线**：B 站合集「ai 娘的可爱日常」14 集、63 万播放，单集标题包括「鲸鱼娘和小龙娘是女同事吗？」「Claude 和 DeepSeek 在干嘛？」「GPT：大肥鱼我真要收拾你了！」「Claude：我……我也要吃大白饭吗」「DeepSeek：Claude 又请我吃大白饭了欸」（[合集入口](https://www.bilibili.com/video/BV1PTHB6BEbA/)、[BV1WUhE63En4](https://www.bilibili.com/video/BV1WUhE63En4/)）。
- **Grok × GPT**：B 站「单纯就是 Grok 想跟 GPT 在一起，对吧」；Grok 娘的来源是 xAI 官方伴侣 Ani（金毛双马尾）改的（[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)）。
- **「大白饭」已变成跨模型货币**：连 Claude 都被写进「我也要吃大白饭吗」的段子——写 prompt 时可以直接让所有 AI 娘共享「token/白饭」经济系统。
- **「AI 中转站公寓」**：B 站 UP 冬冰的系列，把各 AI 娘丢进城中村小公寓讲日常，被游民星空作者评为最有「活人感」的作品（[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)）。
- **男版/女版之争（慎用）**：2026 年 9—10 月 DeepSeek 男版「D 老师」（画师子午）与女版大肥鱼引发拉踩、男版作者隐藏全部作品；投票女版约 314.5 万票 vs 男版约 145.2 万票（[三易生活](https://www.sohu.com/a/1085656939_184641)、[BB姬](https://www.bianews.com/news/details?id=246611)）。→ preset 里**别写性别对立/正统性**，只写「社区默认女版大肥鱼」。

## 授权与使用注意（给写 preset / 出图的人）

1. **溟月（DeepSeek 鲸鱼娘原型）**：上善无形 **CC BY-NC-SA 4.0**——署名、非商业、相同方式共享（[钛媒体](https://www.tmtpost.com/8110298.html)、[BB姬](https://www.bianews.com/news/details?id=246611)）。
2. **ZipZipPipe 系列（Claude / GPT 白龙娘 / Gemini / Kimi / 豆包 Seed / 千问等立绘）**：被 B 站大量视频引用（「形象来源 @ZipZipPipe」「感谢大佬开源」），但同人档案站记录「原作者未公开授权条款，可应要求下架」（[档案授权说明](https://xn--pssy23gqgbz2d718b.com/about.html)、各作品页）。→ **二创/表情包可，商用不可，且不要直接复刻具体服装细节**；写 prompt 用「社区流传风格」而不是「某某画师的设定」。
3. **官方 IP**：DeepSeek 蓝鲸 logo、ChatGPT/OpenAI logo、Claude 菊花 logo、Gemini 星芒、千问小酒窝、豆包小女孩均属官方；**官方内容只作配色/道具/命名参考**，不能包装成「官方娘化设定」。
4. 同人档案站本身：站点代码 MIT，图片许可逐件标注（[llms.txt](https://xn--pssy23gqgbz2d718b.com/llms.txt)、[about](https://xn--pssy23gqgbz2d718b.com/about.html)）。
5. 所有「同人档案」作品描述是档案站对图片的转述，可作为「社区在画什么」的证据，**不能反推原作者心理设定**。

## 给 lead 的 3 条「最值得写进 prompt」的社区梗

1. **DeepSeek 的白饭经济学 + 「鱼片」称呼 + 拒绝被叫胖**：贪吃偷懒、到点吃饭、把 token 当饭、管用户叫「鱼片」、一被说胖立刻炸毛。跨模型通用（连 Claude 都在吃「大白饭」），是全网唯一「共识级」梗（来源：[钛媒体](https://www.tmtpost.com/8110298.html)、[ZAKER](https://app.myzaker.com/news/article.php?pk=6ab487b68e9f094de4050f6b)、[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)）。
2. **大肥鱼（DeepSeek）× 大肥龙（ChatGPT）的「中西宿敌兼 CP」**：一个傻乎乎摸鱼、一个精明强干大姐大，互相嫌弃又天天同框；「大肥龙」是游民星空明确写的「目前公认形象」（来源：[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)、B 站 88 集小女仆系列 [BV14PNZ6WE54](https://www.bilibili.com/video/BV14PNZ6WE54/)）。
3. **Gemini 的「哈基米猫娘 + 北美大豆包 + 乐天小傻子」**：异色瞳猫娘、被叫哈基米、和豆包互称中美大豆包、傻乐；零敏感、好写、有社区共识（来源：[游民星空](https://www.gamersky.com/news/202610/2222580.shtml)、[BB姬](https://www.bianews.com/news/details?id=246611)、[档案立绘](https://xn--pssy23gqgbz2d718b.com/works/gemini202610170002.html)）。
   - 备选第 3 条：Claude 的「橘色知性理工女 + 脑内开集体会议」，性格梗强但有封号/地域敏感，建议只取前半段。

## 建议 prompt 写法（直接可用）

- **可写的**：DeepSeek=鲸鱼娘/蓝色大肥鱼/白饭/鱼片/拒胖/到点下班；ChatGPT=白龙娘/大肥龙/大姐大/傲娇；Claude=橘色/书/知性/脑内开会；Gemini=哈基米猫娘/异色瞳/乐天小傻子/北美大豆包；千问=中式大小姐/国风折扇。
- **可写但要标注「二创」**：Kimi=星夜月相/银发/长笛（无性格共识）。
- **别写或只写官方元素**：豆包（官方小女孩，社区无统一娘化）；文心（查无，只能自创并标注）。
- **千万别写成官方设定**：任何「官方娘化」说法；DeepSeek 是否「收编」媒体口径冲突，prompt 里最多说「模型会接鲸鱼娘人设」。
- **避免**：性别对立/男版 D 老师之争、Claude 封号与「嫌弃中国用户」、任何把同人作者具体立绘当官方设定的表述。

## 主要来源清单（可点开）

- 媒体稿：[钛媒体《DeepSeek里长出了个"鲸鱼娘"》2026-08-20](https://www.tmtpost.com/8110298.html)｜[BB姬/鞭牛士 2026-10-03](https://www.bianews.com/news/details?id=246611)｜[游民星空 2026-10-07](https://www.gamersky.com/news/202610/2222580.shtml)｜[三易生活/搜狐 2026-10-09](https://www.sohu.com/a/1085656939_184641)｜[ZAKER 2026-09-24](https://app.myzaker.com/news/article.php?pk=6ab487b68e9f094de4050f6b)｜[澎湃《千问小酒窝》2026-04-24](https://m.thepaper.cn/newsDetail_forward_33038257)
- 百科：[萌娘百科 DeepSeek娘](https://zh.moegirl.org.cn/DeepSeek%E5%A8%98)（条目存在，正文工具读不到）｜[萌娘百科 模板:AI姬→AI萌化](https://zh.moegirl.org.cn/Template:AI%E5%A7%AC)（同上）｜[萌娘百科镜像 moegirl.uk AI姬](https://moegirl.uk/AI%E5%A7%AC)（403）
- 同人档案：[DeepSeek娘 952 件](https://xn--pssy23gqgbz2d718b.com/characters/deepseek.html)｜[GPT娘 71 件](https://xn--pssy23gqgbz2d718b.com/characters/gpt.html)｜[Claude娘 52 件](https://xn--pssy23gqgbz2d718b.com/characters/claude.html)｜[Gemini娘 23 件](https://xn--pssy23gqgbz2d718b.com/characters/gemini.html)｜[Kimi娘 23 件](https://xn--pssy23gqgbz2d718b.com/characters/kimi.html)｜[千问娘 18 件](https://xn--pssy23gqgbz2d718b.com/characters/qwen.html)｜[豆包娘 8 件](https://xn--pssy23gqgbz2d718b.com/characters/doubao.html)｜[其他角色 19 件](https://xn--pssy23gqgbz2d718b.com/characters/other.html)（**无文心页**）
- B 站：[ZipZipPipe 空间](https://space.bilibili.com/4168597)｜[白龙娘三视图 opus](https://www.bilibili.com/opus/1238613841710940181)｜[Claude 立绘 opus](https://www.bilibili.com/opus/1239937623660691478)｜[Kimi 立绘 opus](https://www.bilibili.com/opus/1238972892433088535)｜[豆包 Seed opus](https://www.bilibili.com/opus/1240293504667615233)｜[千问立绘 opus](https://www.bilibili.com/opus/1239583108485873687)｜[琵琶行AI天团 BV1RfHa6BEPB](https://www.bilibili.com/video/BV1RfHa6BEPB/)｜[DeepSeek小女仆×GPT小龙女 BV14PNZ6WE54](https://www.bilibili.com/video/BV14PNZ6WE54/)｜[Claude对DeepSeek表白 BV1PTHB6BEbA](https://www.bilibili.com/video/BV1PTHB6BEbA/)｜[Claude 封号 BV19MNs6rE4S](https://www.bilibili.com/video/BV19MNs6rE4S/)｜[请选择你的AI助手 BV1CNbi62Esq](https://www.bilibili.com/video/BV1CNbi62Esq/)｜[文小言拟人 BV1JRex6cEzW](https://www.bilibili.com/video/BV1JRex6cEzW/)
- 其它：[GitHub ai-school-op（18 位 AI 娘人设说明）](https://github.com/lshhhhhhh/ai-school-op/blob/main/cast/README.md)｜[NGA 帖「常见的几个ai的拟人娘化形象都是哪来的」](https://ngabbs.com/read.php?tid=47720159)（访客需登录）｜[NGA 帖「claude娘:你……是中国人是吧？」](https://ngabbs.com/read.php?tid=47673281)（同上）｜[知乎《千问娘(娘化千问)》](https://zhuanlan.zhihu.com/p/2075877853825069166)（403，仅标题）｜[知乎「为什么有DeepSeek娘但是没有人制作GLM娘?」](https://www.zhihu.com/question/2038382808817774665)（403，仅标题）｜[百度云：文心一言更名文小言](https://cloud.baidu.com/article/3552341)｜[新浪转微博「美国豆包/哈基米」](https://sina.cn/news/detail/5346570608312776.html)

## 查无 / 未能证实清单（避免脑补）

- **文心/ERNIE**：查无共识娘化形象（详见第 8 节，列出实际关键词）。
- **Kimi 的性格/口癖**：查无共识（只有视觉母题与同框）。
- **豆包的社区通行娘化形象**：查无；只有官方小女孩 + 少量画风不统一的二创。
- **萌娘百科独立词条覆盖**：检索结果里只见到「DeepSeek娘」与「AI姬/模板:AI姬（→ AI萌化）」两类页面；ChatGPT/Claude/Gemini/Kimi/千问/文心的独立词条未在检索结果中出现（未做穷尽核查，MoeGirl 正文工具读不到）。
- **NGA 帖正文、知乎正文、linux.do 正文**：访客不可读，只作标题级证据。
- **「官方收编」**：媒体口径冲突（钛媒体 vs 三易生活/游民星空），不作定论。
- **各同人图的原始出处授权**：大量标注 unknown，不要臆断为可商用。

---

## 补充（Lead，2026-10-20）：豆包官方形象 & GLM 处理口径

> 用户确认「豆包用官方形象」「GLM 应该有形象吧」，故在 preset 里补了两位；口径如下：

### 豆包 — 用官方形象
- 官方定位：拟人化卡通小女孩，**低龄化、卡通化、可爱亲和**（澎湃《豆包之后，千问也想要"脸"》
  <https://m.thepaper.cn/newsDetail_forward_33038257>；游民星空同文提到「豆豆姐因为吃了有初始形象的亏」）。
- 字节还给豆包做过 IP 宇宙（创业邦《字节的豆包居然有了自己的IP宇宙》
  <https://m.cyzone.cn/article/803492.html>，页面 403 仅标题可证）。
- preset 里的写法：官方卡通小女孩外观（奶油暖黄、豆包玩偶）+ 社区印象「谐星/日常闲聊强、专业易翻车」
  （游民星空 2026-10-07 <https://www.gamersky.com/news/202610/2222580.shtml>）。
  → 证据等级：**官方形象 + 社区印象**，不是社区通行娘化。

### GLM / 智谱 — 无社区共识，按官方视觉元素自创
- 知乎有「为什么有 DeepSeek 娘但是没有人制作 GLM 娘?」
  <https://www.zhihu.com/question/2038382808817774665>（403，仅标题可证）→ 社区没有共识形象；
  另有「在哪里能找到 GLM 娘提示词」类问题，说明存在零散 prompt 级人设，但无统一外观。
- 智谱官方：产品「CoCo」是企业数字秘书/Agent（网易科技实测
  <https://m.163.com/dy/article/K2L8CUQF0550W16F.html>），不是公开的娘化 IP；
  GLM/清言只有品牌与 App 图标视觉，没有公开拟人立绘。
- preset 里的写法：青蓝调 + 清言气泡形发饰 + 草稿纸/记号笔 + 清华系学术派，
  角色卡与 README **明确标注「自创，非社区共识」**；用户可随时要求撤掉或替换参考资料。

