---
layout: post
title: .md | 博客外观现代化升级
keywords: [md]
excerpt: "<s>本期博文点赞过 5 亿，下篇文章写用 jekyll 在 GitHub Pages 上搭建静态博客的教程。</s>"
---

今年感恩节三天假期加上周末，一共五天的时间，别的啥也没干，憋在家里给博客换了个主题模板。现在新版本已经上线，基本上已经能用，明显的 bug 都已经解决了。主要的工作内容如下：

- 从 Tufte 风格转换到 material 风格
- 评论区迁移到现成的 ~~[utterance](https://utteranc.es/)~~  [giscus](https://giscus.app/)。
- 将旧模版中的侧边栏注记功能移植到新的模板。
- 调整了 CSS，包括字体、代码模块、博客标题限制高度、博客博客实现类似纸张的卡片效果。
- 重写了 index.html, /History.html, /Links.html 等页面，尤其是 /Topics.html，实现了一个响应式的两列结构。
- 重写了博文前面的元信息。
- 将之前的 repo 重命名并且归档，新建一个同名的 repo，推送上线。

下面挨个来说。

## 风格转换

![]({{site.baseurl}}/assets/photos/2021-12-06-blog-old.png)

之前的风格名字叫做 Tufte，好像是根据一个美国教授的设计，主要设计元素包括一套自己加载的衬线字体（很漂亮，但是对中文没用），还有博文占据页面宽度的大约 60%，右侧剩下的空间可以做边注，有一个设计很精美的横向分割线 `<hr class="slender">`。

这个模板很漂亮，但是衬线字体搭配背景色，就跟人一种上个世纪古董网站的感觉（没有对卢昌海老师不敬的意思）。

Material Design 是 Google 推出的一个组件库，提供类似纸张和卡片的视觉效果，就给人一种很现代的感觉，内心觊觎已久。[GitHub 的这个 repository](https://github.com/naveenshaji/material) 就用了这套设计风格，虽然已经不再更新维护了，但是已有的功能，比如点击链接之后的加载页面，页面顶端的阅读进度条，我觉得让我自己来的话，十年之内都不一定能学到做出这些效果的技术，于是就直接拿来用了。

## 评论区

### 旧版：jQuery 搭配 GitHub Milestones

之前的评论区是根据 [farseerfc](https://farseerfc.me/zhs/pages/about.html) 大佬的[博文](https://farseerfc.me/zhs/github-issues-as-comments.html)自己仿写的 JavaScript 函数。原文是把 issue 作为一个博文的评论区，issue 下面的 comment 作为评论，这样每一条评论都是平级的，没办法实现对某一条评论的回复，只能在评论内容中指明回复的对象。

除了像博文里一样自己手搓代码，也有现成的第三方工具 [utterance](https://utteranc.es) 来完成这一工作，但是我还是不喜欢这种单层评论系统，于是决定自己仿写一个类似的系统，但是让一个 milestone 对应一篇文章，一个 issue 对应一条评论，一个 comment 对应一条回复。

这就需要我在博文的 Markdown 页面注明对应的 milestone 的编号，然后在网页加载完成之后向 GitHub 对应的 milestone 发送一个 GET 请求，询问是否存在 issues。 得到肯定的回答之后，再依次发送请求 GET 每一条 issue 的内容，显示在博文下方。代码位于 `[/_includes/comments.html` 页面](https://github.com/MountAye/blog-tufte/blob/source/_includes/comments.html)，当年从异步编程开始学起，颇费了我几个周末。

问题出在 GitHub 的用户权限上，只有作者和管理员才有权给某条 issue 指定一个 milestone，所以读者建立 issue 进行评论之后并不会直接显示在博文下面，还需要我回到 repo 把那条 issue 手动挪到对应的文章，几乎不可用。

### 新版：giscus 搭配 GitHub Discussions

这次改版的时候觉得用户体验比“老子可以手搓评论区代码”的自我满足更重要，直接换用了 utterance。评论区在博客页面就提供了编辑区，新版本第一次上线不久就有朋友留言，说明这个评论区还是很好用的。

后来GitHub推出了 Discussion 功能，每一条 discussion 下方可以有不同评论，评论下面可以有针对的回复，这就和一般的评论区和BBS 的“楼层-单元”同构了。

然后又在阮一峰老师的博客看到了 [giscus，](https://giscus.app/)就是在 Discussions 架构下和 [utterance](https://utteranc.es/) 类似的一个工具，只需要在官网按照流程配置，然后把生成的几行代码嵌入到自己的页面里就好了，比原来方便太多了：

```html
<script src="https://giscus.app/client.js"
        data-repo="[ENTER REPO HERE]"
        data-repo-id="[ENTER REPO ID HERE]"
        data-category="[ENTER CATEGORY NAME HERE]"
        data-category-id="[ENTER CATEGORY ID HERE]"
        data-mapping="pathname"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-theme="light"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
```

之前 utterance 创建的评论也可以直接从 Issue 移动到 Discussion 板块，所以刚刚那条评论可以正常显示。但是因为换了新的 repo，旧版本的两条评论就移植不过来了，请萌狼和 HK 兄弟包涵。 

## 旧版特有功能：侧边栏注记、正文图片

早就想给博客改版了，一直拖着不办的原因主要是直接把博文复制粘贴到新模板的 `/_posts` 文件夹之后会报错，不知道排错需要多长时间，于是压根就不动手了。因为旧版通过 jekyll 实现了一些正常 markdown 文档没有的功能，我用到的主要就是侧边栏的边注 `sidenote`，以及在正文内部插入图片的 `maincolumn`。

jekyll 是建立在 ruby on rail 上的一个软件，所以这些功能也是用 ruby 语言写成的。本以为会很难，结果认真一看，其实根本没什么工作量，就直接把旧模板的 `/_plugins`文件夹复制到新模板就不再报错了，当然显示效果需要调整 CSS，下一节会讲到。`{% raw %}{% sidenote %}{% endraw %}` 就可以继续用了。

 至于正文图片，这个功能和 markdown 已有的图片功能重复了，我觉得不值得为了一点点显示效果牺牲可移植性，于是直接把相关组件删除了，然后把博客文章中用到的地方换成了 markdown 插入图片的语法，重复性体力劳动，不提了。

## 调整 CSS

### 新建 `.paper` 取代 `.cover`

![]({{site.baseurl}}/assets/photos/2021-12-06-material-card-cover.png)

这个模板主打的一个内容卡片如图所示，很漂亮，但是整个元素的宽度是由封面图片 `.cover` 决定的：

```css
@media (min-width: 1600px) {
    .scroll-1 {
        width: 1200px;
        margin-left: -600px;
    }
    .scroll-1 .card .cover {
        width: 1200px;
    }
}
```

而我的很多博文都是纯文字的，直接不添加图片会有大半个卡片没什么内容，去掉图片区域之后整个卡片的宽度会缩水到文字的最大宽度，丑。解决方法是新建了一个新的类 `.paper`，把 `.cover` 中和宽度相关的设置移动到新的类，然后把新类应用在整个卡片的 `<div />` 上。

```css
@media (min-width: 1600px) {
    .scroll-1 {
        width: 1200px;
        margin-left: -600px;
    }
    .paper {width: 1065px;}
    /* .sidenote {width: 300px;} */
}
```

### 考虑侧边栏的页面宽度响应式布局

响应式布局指的是同一个网页，在不同的终端设备上都又能够有适合的视觉效果，主要方法就是根据不同的屏幕宽度设定某些元素的不同取值：

```css
@media (min-width: 1600px) { /* ... */ }
@media (max-width: 1600px) { /* ... */ }
@media (max-width: 1200px) { /* ... */ }
@media (min-width: 768px) and (max-width: 979px) { /* ... */ }
```

具体到这个博客：

- 屏宽大于一个很大的值之后，博客正文和侧边栏的宽度固定，不再增加；
- 屏幕小于这个值，但是大于能够正常显示侧边栏的宽度时，博客正文和侧边栏都占据给定的百分比；
- 屏幕小于能够正常显示侧边栏的宽度时，侧边栏不再显示，正文宽度固定在之前最小的像素值；
- 正文像素数占据屏幕全部宽度之后，宽度设定为 100%。

## 复习 Liquid，重写非博文页面

非博文页面和之前的布局基本上相同，除了 `/Topics` 从一个无序号列表变成了响应式的两个竖栏。这是得益于模板引用的 `materialize.css`采用了 [flexible grid](https://materializecss.com/grid.html)。

具体来说，一个`container` 可以动态调整内部元素的占宽，以适应不同大小的设备，包含两级子元素，两级子元素顾名思义，分别显示为行和列的元素：

```html
<div class="container">
	<div class="row">
		<div class="col s12 m6 l4"></div>
		<div class="col s12 m6 l4"></div>
	</div>
</div>
```

然后将父元素的宽度分成 12 个基本单位，方便指定某一个元素所占的宽度和高度。比如 `class = "col s12 m6 l4"` 表示该元素在小设备 (small) 上占据 12/12=100% 屏宽，在中设备 (medium) 上占据 6/12 = 50% 屏宽，在大设备 (large) 上占据 4/12=1/3 屏宽。 

### Liquid

Jekyll 本身的编程语言是 Ruby，但是被 Jekyll 编译之前的网页文档中的特殊标记，是一种叫做 Liquid 的领域专用语言。

一般的命令和控制流结构用 `{% raw %}{% %}{% endraw %}` 括起来 

```html
 for i in (1..len1) %}
	 assign idx = i | times: 2 | minus:2 %}
   assign cate = category[idx] %}
 endfor %}
```

直接在网页中显示内容和变量使用 `{% raw %}{{  }}{% endraw %}`

```html
post.title }}
```

函数调用的语法最奇葩，是 `input | function` 或者 `input | function: parameter`：

```html
assign category = site.data.category %}
assign length = category | size %}
assign   len1 = length | plus: 1 | divided_by: 2 %}
assign   len2 = length | divided_by: 2 %}
```

## 调整博文元信息

每篇博文的开头两道分割线之间的 YAML 是绑定在页面上的变量，可以被 Liquid 引用 `{% raw %}{{ post.VAR_NAME }}{% endraw %}`。

```yaml
---
layout:  post
title:   .html | 翻译：为什么说物理不是一门学科
keywords: html
excerpt: 一篇稍微硬核的科普文章，讨论物理在生物学当中的可用性。
date:    2019-06-19
categories: post
milestoneID: 5
---
```

新版本简化了很多，删掉了没有用的 `date`, `categories`, `milestoneID` 字段，同时把 `keywords` 变成了一个数组，也就是说同一篇文章可能出现在多个 `/Topics` 页面的卡片中。

```yaml
---
layout:  post
title:   .en | 翻译：为什么说物理不是一门学科
keywords: [html,inter]
excerpt: 一篇稍微硬核的科普文章，讨论物理在生物学当中的可用性。
---
```

## 下一步计划

- 进一步优化排版:
    - 给博文的标题添加视觉效果，现在的一二级标题之间很难区分。
    - 超链接的样式不够明显，一眼看不出哪里有链接。
    - 侧边注距离正文的距离不合适，CSS 相关参数的效果很奇怪。
    - 现在的 /Links 页面在宽度缩小之后用户头像会和介绍卡片挤到一起去。
    - 网站整体字号在笔记本上比较合适，在台式机上看起来太大了，移动端更大。
- 加入 google analytics
- 欢迎大家提建议。
- 欢迎有独立博客的朋友互相链接。
- ~~本期博文点赞过 5 亿，下篇文章写用 jekyll 在 GitHub Pages 上搭建静态博客的教程。~~

