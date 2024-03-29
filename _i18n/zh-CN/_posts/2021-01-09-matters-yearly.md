---
layout:      post
title:      "【2020Matters年度问卷】Normality Matters"
keywords:   [doc]
excerpt:    "原文于2020年12月28日首发于 Matters，当时在赶平台奖励的截止日期，所以很多东西没有展开写，大家凑合看吧。"
---

> Matters 是一个博客平台，在前几年区块链和去中心化思想还很热的时候上线，底层所有的博文会上传到 IPFS 区中心化平台，账号可以绑定一种叫做 LikeCoin 的数字货币，用来赞赏作者。2019年11月28日，我在 Matters 上传了自己翻译的 Paul Graham 的《How to Disagree》，算是正式加入了 Matters 社区。在那之前，我虽然建立了自己的博客(https:mountaye.github.io/blog)和公众号，但是一直没有规律性的更新。可以说，过去一年所有的不务正业，都可以以 Matters 为线索串联起来。我一向不擅长赶 deadline，所以压根没做周年纪念的打算。结果发现 Matters 官方有红包，没办法，只能为五斗米折腰了。

## 2020年只剩下最後十天，分享一件在年初想不到今年會發生的一件事？這件事對你的生活帶來什麼樣的改變？

美国股市对新冠大流行的 V 形走势。标普500指数从2月中下旬开始跳水，用了一个月的时间跌去三分之一，然后开始了大牛市一样的攀升，八月底重回疫情前的高点。

2018年1月份，我的开户申请被 Robinhood 批准，从此成为了美国股市里茁壮成长的一棵小韭菜。结果就在开户的那周，美股就开始下跌。

那时候人们开始说，十年一个小周期，到了崩盘的时候了，结果涨涨跌跌地拉锯了几个月，创出新高；十月再次开始大跌，也就是段子里讲的10天4次熔断那次，那时候人们又说，十年一个周期，出来混，到了还的时候了，结果这回更快，只用了四个月就收复之前的高点；如今，已经没有人再说十年啊周期啊什么的了，YouTube 上的雷公视频的标题，也从“市场进入高危期”变成了“急跌就是买点”。

“热闹是他们的，我什么也没有。”不只是没有的问题，我还在这期间花了很多仓位做空，兜兜转转，不断跌破止损线，累积下来，损失了大约一个月的工资。

要说这对我生活的改变，可能是……让我最近两个月没有文章更新？不断的亏损之后痛定思痛，觉得问题主要出现在记账方面。之前和股票相关的账目都是用一个 MS Excel 电子表格记录，虽然自认为还算准确完备，但是一方面只包含了自己的已经发生的交易信息，另一方面数字也不如图形直观，很难给将来的交易决策提供帮助。

因而，我决定把记账这件事转移到 Jupyter Notebook 上，完成 Excel 表的功能之外，还可以把自己的买卖价位和股价走势画在同一张图上，把自己的仓位和市场的交易量画在同一张图上，辅助决策。同时还可以练习 python 数据可视化的能力、`ipywidgets` 组件写 UI 的能力，一举多得。所以最近一段时间的业余都在忙这件事，博客也就暂时停更了。

## 2020年，什麼事情讓你獲得最深的意義感？

定期用无人机空拍校园。这件事刚刚付诸实施，每月选一天，沿着相同的线路拍一段延时摄影。预计明年的这个时候才会有结果，所以严格来讲不算是2020年的事情。

定期是一种获得意义感的很有效的方式。高中的时候，我们学校的几个老师和同学们办了一份报纸，每周三晚自习前免费分发几十份给每个班。高三一年的每一期报纸我都集齐了，每个周三，我都在学校食堂暴风吸入晚饭，然后跑回教室等发报纸的同学。一年下来，攒下来的报纸对折起来，几乎和课桌的抽屉一样厚。人非星辰大海，没办法占据无限的时间，但是周期性的事件序列，具有时间上的平移对称性，周期函数的自变量是可以趋向无穷的，给人一种对于永恒的近似和安慰。

摄影也是。像我这样的人，可能没办法给学校捐个楼，把自己的名字刻在楼基的石碑上，但是在这里学习和工作的经历，还有校园的景色，“耳得之而为声，目遇之而成色，是造物者之无尽藏也，而吾与子之所共适。”

## 全球疫情依然嚴峻，請記錄一件你認為值得銘記的疫情事件。

11月初的年度进展报告。从去年夏天的资格考试通过之后，每年11月初，我们都要向导师委员会汇报自己这一年的工作进展。今年的报告结束之后，第二天和老板单独 Zoom 的时候他表扬了我，说今年的进展依然不错，委员会的成员都印象深刻。

我现在的工作主要包括两部分，一部分是用我们老板做博士后的时候用的成像方法，去观察和他当时的工作稍有不同的细胞，属于“承上”；另一部分是“启下”，因为旧的方法在性能上不足以研究更复杂的系统，所以需要开发新的图像处理技术。

美国的疫情从2月份开始，那时候我刚刚拍了一些用于开发新技术所需要的参考图像，所以封城令最严格的几周有可以在家工作的素材。夏天限制条件放松之后，我又回到学校用旧方法拍了很多照片，这些照片在进行数据分析之前，需要在计算机集群上进行做“去卷积”计算，比较耗时，但同样可以在家做。所以今年的工作节奏，实际上并没受到病毒的太多干扰。

但是我也知道，这种印象深刻的另一面是，在今年以前的我的工作效率，也没有比有疫情的时候有多大的优势。之前工作也有很多时候摸鱼，我也不会加班，业余时间也在折腾自己的爱好，简直约等于不务正业的同时顺便读了个博。疫情把“我们所浪费的时间本质上都是自愿选择的”这一点放大了，

## 2020出行受限，如何改變了你與他人/世界的關係？有沒有什麼人/事，是疫情過去你一定要去見/做的？

恍然发现原来自由出行也可能变成一种奢侈。

疫情之后，我想我会成为一名 B 站的 up 主，像 Youtube 上的 Thomas Heaton 一样，到处走走拍拍，用拍视频这件事来鞭策自己，注视自己可能来之不易的日常，并珍视对这些日常的记忆。

## 說一件你在2020年遭遇的、難以解決的矛盾，這裡的矛盾是指：你感受到自己的信念與行為產生了衝突。

自视清高和渴望吸引眼球的矛盾。

明知道在任何平台写东西，用真名挂各种头衔会多很多流量，但还是用化名，努力避免 ad hominem 谬误；明知道在 Matters 写东西，用简体字没有流量，不谈政治没有流量，不做赞赏公民没有流量，也还是坚持下来了；明知道在微信写东西，膜蛤可能会死，借古讽今可能会死，点了关注的读者可能再也没看过我的更新（微信信息流的锅），但还是在危险的边缘疯狂试探。

## 分享一個你「忽然理解了我所反對的立場」的時刻。

没有，而且我觉得也没办法有，“忽然”、“理解”和“立场”本来就不应该出现在同一个句子里，你要是真的能理解，那早干什么去了？

公共讨论中的绝大多数问题并不是因为拒绝对话，而是急于对话，把根本不成立的对话强行推进下去，结果就是鸡同鸭讲，各自在自己的信息茧房里赢得一片掌声，然后一个共识，各自表述，直到其中一方得意忘形进入了对方的同温层，再开启一轮循环。

## 相比一年前，你與身體的關係發生了什麼變化？你有更喜歡現在自己的身體嗎？

老了，虽然我才 20 多岁。

天冷的时候跑步，膝盖就会疼。刚来学校的时候，参加系里的老教授们每周踢足球的活动，还笑他们冬天休赛期太长，现在只能摸着自己的膝盖感叹自己还是 too young too simple, sometimes naive. 小时候练羽毛球，从场中央来到网前需要两步，退到底线需要三步；现在一步半就到了，但是再也不敢跑折返了。

当然，作为一个减肥成功的胖子，我经历过更难受的肥胖状态，我对今天的身体已经足够满意，不敢再奢求更多。

## 經過2020年，你內心是否有找到一個關於自己，不可停止之事嗎？

认识自己——不断修正对自己的认识，并且证明这种认识。（你现在还认识“认识”这两个字吗XD）

## 請與我們分享你在 2020年最常聽的一首歌、最愛的一本書或者印象最深刻的一部電影

戈德门特《代数学教程》。

## 最後，能否請你用一張照片代表你的 2020 年。

![]({{site.baseurl}}/assets/photos/2021-01-09-matters-rainbow.png)

## 填空：2020，<u>normality</u> matters

好像真的赶不上 deadline 了，后面几个问题越来越敷衍……应该不影响拿红包吧（小声）