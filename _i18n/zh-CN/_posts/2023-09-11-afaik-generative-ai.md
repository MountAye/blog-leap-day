---
layout: post
title: 如是我闻 | 生成式人工智能
keywords: [md,ai,rss]
excerpt: ""
---

## 生成式语言模型

### 模型

- OpenAI/GPT
- Claude
- `bloomchat`, 可以商用 [[GitHub](https://github.com/sambanova/bloomchat)]
- `falcon40B`
    - apache 2.0 许可证，可商用[[huggingface](http://huggingface.co/tiiuae)]
    - gpt3 的性能，更少的运算资源，其中Falcon 7B可以跑在苹果Mac上 [[推特](https://twitter.com/rickawsb/status/1666148546285043714)]
- `TigerBot`: 一款国产自研的多语言任务大模型，70亿参数和1800亿参数两个版本 [[GitHub](https://github.com/TigerResearch/TigerBot)]
- `QLoRA`: 单个GPU，ChatGPT 99%的能力，消费级GPU微调12个小时就可以达到97%的ChatGPT水平，4B就可以保持16B精度的效果 [[论文](https://www.notion.so/Endocytic-trafficking-promotes-vacuolar-enlargements-for-fast-cell-expansion-rates-in-plants-6b8f0a313c184ccba9fb5a035bb04a0e?pvs=21)] [[GitHub](https://www.notion.so/pdf-14a94950d61c42d3b03bb132f7655589?pvs=21)]
- `MBT 30B`: 开源商用模型为数不多的选择里出现了一个比Falcon 40B更好的模型 [[Twitter](https://twitter.com/fi56622380/status/1672137540281974784)]
- `GLM-6B` & `GLM2-6B`: 智谱AI发布，对学术研究完全开放，并且在完成企业登记获得授权后，允许免费商业使用。[[Twitter](https://twitter.com/GanymedeNil/status/1679892021807550465)][[微信公众号@GLM大模型](https://mp.weixin.qq.com/s?__biz=MzkxNjMzMjM3NA==&mid=2247484214&idx=1&sn=e42153f987a74d1ffc7882f7cc09670d)]
- `Llama 2`: Meta开源大语言模型Llama 2，可免费商用. [[微信](https://mp.weixin.qq.com/s/9pcmrCEyp2AQsL3MbPYx-Q?utm_source=pocket_saves)介绍]
    - Jim Fan 评论 [[推特，翻译](https://twitter.com/dotey/status/1681553916373135362?utm_source=pocket_saves)]
    - 很多团队几乎都达成共识， RLHF 不重要，SFT 就够了。现在 Llama2 的论文说 RLHF 非常非常重要。[[推特](https://twitter.com/oran_ge/status/1681793774685659136?utm_source=pocket_saves)]
    - `LLaMA-2-7B-32K`, context为32K的模型 [[推特](https://twitter.com/JefferyTatsuya/status/1685423475979325440)][[Twitter](https://twitter.com/togethercompute/status/1685048832168714240)]

### 基于模型，直接可用的产品

- OpenAI/GPT
    - ChatGPT
        - 2023年6月13日，GPT提供了函数调用，让ChatGPT来自己调用函数。[[Twitter](https://twitter.com/cryptonerdcn/status/1668733300070924288)][[OpenAI](https://openai.com/blog/function-calling-and-other-api-updates)][[用法 Twitter@宝玉](https://twitter.com/dotey/status/1668728109376450566)]
    - ChatGPT - Code Interpreter
        - 介绍 [[推特](https://twitter.com/fuyufjh/status/1684191835210809344)][[YouTube](https://www.youtube.com/watch?v=4wGlRrir_u4)]
        - 《ChatGPT 探索：Code Interpreter 高级指南》[[微信@浮之静](https://mp.weixin.qq.com/s/K_csi1oWDv5tEaeeKSlvwA?utm_source=pocket_saves)]
        - 源码可能被套出。[[Twitter](https://twitter.com/fuergaosi/status/1679457847237820416)]
        - 对 code interpreter 的逆向工程 [[Twitter](https://twitter.com/Yampeleg/status/1678045605527003136)][[Mem](https://mem.ai/p/xyy8ULiAce1BecTxnU0M)]
    - OpenAI API
        - 2023年8月23日，OpenAI 开放了 GPT-3.5 的微调的API [[推特](https://twitter.com/dotey/status/1694207797351616703)]
    - OpenAI on Azure 内置了一个内容过滤器 [[推特1](https://twitter.com/jw1dev/status/1666613728106938368)][[推特2](https://twitter.com/jw1dev/status/1666622878962548740)]
    - `forefront`: 完全免费 GPT-4 的工具 [[登录](https://accounts.forefront.ai/)]，大概基于 `gptfree-ts` [[GitHub](https://github.com/xiangsx/gpt4free-ts)]
    - `BratGPT`: ChatGPT的激进版本。[[官网](https://bratgpt.com/)]
    - `SmartStudy`: 提供文本文档，创建10个问题的小测验。[[官网](https://smartstudy.streamlit.app/)]
    - `XrayGPT`: 通过给定的 X 光片来促进围绕胸部 X 光片的自动化分析的研究。[[GitHub](https://twitter.com/CarsonYangk8s/status/1661588037892198401)]
    - `FinGPT`: 类似BloomBerg的开源方案，RLHF 和 Lora 的低秩技术 [[Twitter](https://twitter.com/JefferyTatsuya/status/1668433680887615488)]
- 微软
    - BingAI
        - 本地部署方案 [[推特](https://twitter.com/geekbb/status/1665692703055552513)][[GitHub](https://github.com/adams549659584/go-proxy-bingai)]
    - VsCode Copilot
    - Office 365 Copilot: 每月每名用户30美元. [[verge](https://www.theverge.com/2023/7/18/23798627/microsoft-365-copilot-price-commercial-enterprise)][[微信](https://mp.weixin.qq.com/s/9pcmrCEyp2AQsL3MbPYx-Q?utm_source=pocket_saves)]
- Claude+
    - 例子：阅读多份行业报告 [[推特](https://twitter.com/iamshaynez/status/1684398211958730753)]
- `Llama`
    - llama2.ai: 一个基于 llama 2 的聊天机器人，非官方。[[网站](https://llama2.ai/)]
    - WizardCoder 34B based on Code Llama 写代码 [[推特](https://twitter.com/dotey/status/1696202647269785875)]
- WebGLM: 清华开源的带网络搜索功能的 GLM 实现 [[GitHub](https://www.notion.so/pdf-14a94950d61c42d3b03bb132f7655589?pvs=21)]
- mendable: 根据开发文档进行问答 [[官网](https://www.mendable.ai/usecases/documentation)]
- 阅读 PDF 文档
    - Humata.ai
    - explainpaper
    - ChatPDF
    - [[对比](https://twitter.com/oran_ge/status/1683432444169711616?utm_source=pocket_saves)] Claude2支持超长上下文，摘要信息量更大，更适合长文提炼。ChatDOC 具有页码溯源、表格解析、原文定位功能，数据找得准，也方便二次验证，能够限制大语言的幻觉问题。
- Obsidian-copliot: 快速获取文字的核心观点
- 视频内容梗概
    - Glarity: 浏览器插件，基于ChatGPT和字幕生成Youtube摘要，20秒看完梗概 [[Twitter](https://twitter.com/starzqeth/status/1640867876109422595)]
    - summarize-tech: 5分钟了解长视频的要点. [[Twitter](https://twitter.com/starzqeth/status/1640867876109422595)]
- webpilot: 可联网可读网页链接的插件 Webpilot 推出的 Chrome 版插件 [[chrome](https://chrome.google.com/webstore/detail/webpilot-copilot-for-all/biaggnjibplcfekllonekbonhfgchopo?utm_source=link)]

### 模型教程、评论、二次开发

- 一般性原理
    - 《Prompt 编写模式》[[phodal](https://prompt-patterns.phodal.com)]
    - 《LLM+Embedding构建问答系统的局限性及优化方案》[[知乎](https://zhuanlan.zhihu.com/p/641132245)]
    - 基于检索的 LM，外挂一个数据库用来检索。[[推特](https://twitter.com/cosmtrek/status/1678077835418955781)][[GitHub.io](https://acl2023-retrieval-lm.github.io/)]
    - 一篇泼冷水的论文 [[ACL Anthology](https://aclanthology.org/2023.findings-acl.426/)]
    - 即刻出的Prompt调试工具。[[Twitter](https://twitter.com/vista8/status/1678784460786135040)][[官网](https://promptknit.com/)]
- GPT
    - GPT best practice [[OpenAI](https://platform.openai.com/docs/guides/gpt-best-practices?utm_source=pocket_saves)]
    - Andrew Ng 吴恩达 & Isa Fulford from OpenAI 《Build system with [#ChatGPT](https://twitter.com/hashtag/ChatGPT?src=hashtag_click) API》[推特@**[金田達也](https://twitter.com/JefferyTatsuya)**]
        - 借助 CoT 的思路，翻译字幕，返回正确的 JSON 格式 [[推特](https://twitter.com/dotey/status/1665476562219573249)]
        - 同样的加入了CoT（Chain of Though）的Prompt，如果让GPT打印出来步骤，效果非常好，但是如果不让GPT打印（省点token，以及更容易解析），那么GPT就会偷懒 [[Twitter](https://twitter.com/dotey/status/1668736426286915590)1][[Twitter2](https://twitter.com/dotey/status/1664335473500626946)]
    - 熊猫吃短信是 Twitter@威力狈 开发的垃圾短信过滤工具。将其与 GPT 结合的一些讨论
        - [Twitter@威力狈](https://twitter.com/waylybaye/status/1664253928970788864)：尝试了下用 ChatGPT 自动标注数据，效果太差了。
        - [Twitter@宝玉](https://twitter.com/dotey/status/1669028955842650139)：通常如果我写的话，会做一些小调整
        - [Twitter@IIInoki](https://twitter.com/IIInoki)：是的，感觉八爷用 API 用得有点糙……就只是很简单的 prompt 达到的效果都还不错
    - 《ChatGPT 越过山丘之后，再来谈谈 LLM 应用方向》[[橘子汽水铺](https://quail.ink/orange/p/chatgpt-cross-over-the-hills-and-discuss-llm-application-directions)]
- `LangChain`:
    - 官方教程 [[推特](https://twitter.com/LangChainAI/status/1665009694627250176)][[streamlit](https://blog.streamlit.io/langchain-tutorial-1-build-an-llm-powered-app-in-18-lines-of-code/)]
    - 一个使用 LangChain 和 GPT Index 的教程 [[leanpub, 收费](https://leanpub.com/langchain)][[Pocket](https://getpocket.com/read/3839490971)]
    - LangChain for LLM Application Development 基于LangChain的大语言模型应用开发 [[YouTube](https://t.co/JXV1SBI2OA)]
        - 基于Embedding的文档问答。stuff, map reduce, refine, map rerank [[Twitter@宝玉](https://twitter.com/dotey/status/1667790801420558342)]
    - Chanin Nantasenamat: LangChain tutorial #1: Build an LLM-powered app in 18 lines of code [[streamlit](https://blog.streamlit.io/langchain-tutorial-1-build-an-llm-powered-app-in-18-lines-of-code/?utm_source=pocket_saves)]
    - 把一篇很长的 PDF 内容喂给 ChatGPT，然后向他提问
        - 纯 JS 开源工具推荐 [[推特](https://twitter.com/Barret_China/status/1638119945749037056)]
        - 用 `LangChain` 六七行代码就可以搞定了 [[LangChain](https://js.langchain.com/docs/get_started/introduction)]
- `AutoChain`
    - 介绍 [[推特](https://twitter.com/zhangjintao9020/status/1683996172980199429)][[GitHub](https://github.com/Forethought-Technologies/AutoChain)]
    - 《我为什么放弃了 LangChain》[[推特](https://twitter.com/Barret_China/status/1683135367862718465)][[微信](https://mp.weixin.qq.com/s/jIbz9JYc8-_ua-QLENX__A)] 推友提出的 AutoChain 替代方案 [[推特](https://twitter.com/Barret_China/status/1684211570186887170?utm_source=pocket_saves)]
- `OpenDAN`: 为各类 AI 模块提供运行环境，并提供它们之间的互操作性协议。可创建诸如律师、医生、教师，甚至男女朋友等角色 [[GitHub](https://twitter.com/Barret_China/status/1666455683758161920)]
- “视频语音↔文字”任务相关
    - 指定视频URL，识别文字，翻译 [[GitHub](https://github.com/lewangdev/autotranslate)]
    - `WhisperX`: 按照单词对齐时间戳，生成的字幕都是完整的句子 [[GitHub](https://github.com/m-bain/whisperX)]。[[Twitter@宝玉](https://twitter.com/dotey/status/1667394662628204546)] 写了一个可以根据 YouTube Url 识别 YouTube 字幕的 [Jupyter Notebook](https://github.com/JimLiu/whisper-subtitles/blob/main/whisperx_youtube_subtitle.ipynb)
    - `audiocraft`: audio processing and generation with deep learning. [[GitHub](https://github.com/facebookresearch/audiocraft)]
    - [[推特]](https://twitter.com/Barret_China/status/1684218981639413760) 小作文
    - `yt-dlp` 一行命令下载视频字幕的工具，不需 puppeteer 无头浏览器 [[推特](https://twitter.com/Barret_China/status/1684228477644570624)][[GitHub](https://github.com/yt-dlp/yt-dlp)]
- ChatGPT + AI agent + ScholarAI + Noteable 写的小综述 [[链接失效](https://t.co/eqVc2LIfSz)]
- `MusicGen`: 将文本和旋律转化为完整乐曲 [[Twitter](https://twitter.com/Fenng/status/1668141100610248705)][[ReadHub](https://www.notion.so/3753e42dc4204a99ab83a725b655a632?pvs=21)]
- `MMS`: 一个声音模型 [[HuggingFace](https://huggingface.co/docs/transformers/main/en/model_doc/mms)]
- `FRVR Forge`: AI-Powered End-to-End Game Creation [[Twitter](https://twitter.com/FRVRGames/status/1669758477789540365)][[官网](https://www.notion.so/ai-University-Cloud-8078b4682e454a5fba982f67e4530498?pvs=21)]

### 开发平台

Runpod: 租用 GPU 跑模型并创建 Serverless API 一站式服务，最低只要0.2刀/hr。[[官网](http://runpod.io)]

### 杂项

- 2023年5月27日、28日，OpenAI 使用 Sentry 审计工具封禁来自中国的用户，解决方案：
    - 路由器 Clash 规则 [[推特](https://twitter.com/wey_gu/status/1663003950214438912?utm_source=pocket_saves)]
    - 改用 Azure OpenAI service [[推特](https://twitter.com/zhangjintao9020/status/1662865819041402880)]
    - Cloudflare WARP [[左耳朵](https://haoel.github.io/)]

## 生成式图像模型

2023年5月31日，Adobe 添加人工智能相关功能 generative fill。[[推特](https://twitter.com/CodeByPoonam/status/1663824055164887040)]

- 配置要求极低，连Win掌机都能跑，但是不能断网。[[推特](https://twitter.com/OfflineHelper/status/1666042746866663424)]
- 填充将横屏的视频转换为竖屏。[[推特](https://twitter.com/Alex_Cerrato/status/1681677307843432449)]

`MidJourney`

- 在提示词中添加相机镜头信息。[[推特](https://twitter.com/4rtofficial/status/1663310457854099458)]
- zoom [[Twitter](https://twitter.com/jesselaunz/status/1674210886695923712)]

`StableDiffusion`

- Eric Fu: 训练指南. [[Coding Husky](https://ericfu.me/stable-diffusion-finetune-guide/?utm_source=pocket_reader)]
- 文字或者符号融合生成图片 [[Twitter](https://twitter.com/op7418/status/1680223090138316800)][[微信](https://mp.weixin.qq.com/s/rvpU4XhToldoec_bABeXJw)]

`StyleDrop`: Google 基于 MUSE 的样式迁移 transformer [[推特](https://twitter.com/recatm/status/1665056017107886080)][[GitHub.io](https://styledrop.github.io/)]

`Redream`: 从视频到二次元动画 [[推特](https://twitter.com/heyBarsee/status/1665034805384290307)][[GitHub](https://github.com/Fictiverse/Redream)]

`Runway` Gen-2: 文本生成视频和图片生成视频, 4 秒钟 [[推特](https://twitter.com/op7418/status/1666461595818504192)][[需注册](https://app.runwayml.com/login)]

一个 AI 视频解决方案，来自南洋理工，代码尚未开源 [[Twitter](https://twitter.com/op7418/status/1669026494885285888)] [[GitHub.io](https://anonymous-31415926.github.io/)][[Twitter2](https://twitter.com/rickawsb/status/1672310994390126593)][[arxiv](https://arxiv.org/abs/2306.07954)]

`AWPortrait1.1`: 图像生成 [[Twitter](https://twitter.com/dynamicwangs/status/1673730591462928385)][[LibLibai](https://www.liblibai.com/modelinfo/721fa2d298b262d7c08f0337ebfe58f8)] 

`Anything AI`: 可以取代照片中的任何物体。免费，不需要注册. [[官网](https://www.anything-ai.com/)]

`PixelLab`: 草图创建2D图像. [[官网](https://www.pixellab.ai/)]
