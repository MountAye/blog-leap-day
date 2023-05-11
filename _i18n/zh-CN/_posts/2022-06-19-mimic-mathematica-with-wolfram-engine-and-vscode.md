---
layout: post
title: .nb | Mathematica 入门：免费正版、vscode、近似原生体验
keywords: [md,nb]
excerpt: 不用算号器，完全合法的免费手段搭建一个免费的 Wolfram Languange 运行环境，效果尽可能贴近 Mathematica。
---

## Mathematica 的原生体验暨山寨目标

本科的时候老师总是跟我们念叨，让我们学点科学计算软件，可学的不多，不过 MatLab, Mathematica, Maple, Origin 和 Labview.  ~~作为编程语言的 MatLab 是世界上语法最垃圾的（没有之一）~~ ，Maple 实在是太小众了，Origin 和 Labview 不仅应用场景有限而且繁琐还有版权问题，于是 MMA 就成了我主要的折腾对象。不敢说拿手，起码是略懂。

Wolfram 和 python 一样也是[动态语言和解释型语言]({% post_url 2021-06-29-python-interpreter-editor-virtualenv %})，而且默认的新建文件类型就是 `.nb` 笔记本文件，命令按块执行，输出结果直接显示在代码块下方，强烈怀疑 Jupyter Notebook 就是山寨了 Mathematica。当然另有一种 `.m` 文件，用于执行文件内的所有命令，适用于比较大型的独立应用。

![]({{ site.baseurl }}/assets/photos/2022-06-19-mathematica-notebook.gif)

虽然现在的学校给学生买了正版许可证，但是只能用在一台电脑上，所以笔记本上就安装不了。虽然百度贴吧的精华帖里有传统艺能算号器教程，但是现在 Wolfram 开放了免费的 Wolfram Engine，所以我们还是来点正大光明的，用完全合法的免费手段搭建一个免费的 Wolfram Languange 运行环境，效果尽可能贴近 Mathematica。

需要用到的工具有：

- Wolfram Engine
- Wolfram Script
- Wolfram Engine For Jupyter
- jupyter
- vscode

## Wolfram Engine 和 Wolfram Script 下载和安装

《How do I install Mathematica on Linux?》：[https://support.wolfram.com/12453](https://support.wolfram.com/12453)

在 Google 上搜索“Wolfram Engine”后可以找到官网的下载地址：[https://www.wolfram.com/engine/](https://www.wolfram.com/engine/)

根据自己的操作系统点击下载之后会弹出获取许可证的页面 ([https://account.wolfram.com/access/wolfram-engine/free](https://account.wolfram.com/access/wolfram-engine/free))，没有 Wolfram 账号的需要注册一个账号。

完成之后在下载文件夹打开 terminal, 输入以下命令，其中 xyz 是下载文件名中的版本号：

```python
sudo bash WolframEngine_xxx.yy.zz_LINUX
```

强烈建议按照默认设置完成安装，不做要任何个性化的调整，理由见下方引用块。

> 我把第二个选项，也就是 Wolfram Engine 可执行文件的路径设置成了自己 home 下安放一般独立软件的文件夹，结果激活过程出现了问题：输入 `wolframscript` 之后说找不到 WoflramEngine，填入自己的路径之后提示 Wolfram Engine 尚未激活，手动启动 `WolframEngine` 之后提示输入激活密钥 activation key，但是各处遍寻不得。
解决方法来自以下 StackOverflow 回答：[https://mathematica.stackexchange.com/questions/198822/the-wolfram-kernel-must-be-activated-for-wolframscript-to-use-it](https://mathematica.stackexchange.com/questions/198822/the-wolfram-kernel-must-be-activated-for-wolframscript-to-use-it)
在wolfram官网登陆自己的账号之后，在一个新的标签页输入以下网址 [https://www.wolframcloud.com/users/user-current/activationkeys](https://www.wolframcloud.com/users/user-current/activationkeys)，即可看到自己的 activation key，在 terminal 中打开 Wolfram Engine，根据提示把 activation key 复制粘贴到指定位置，即可完成激活。
但是第二天配置好 vscode 和 Jupyter 之后，再次在命令行打开 WolframScript 的时候提示激活失败，重新按照上述方法操作后，显示 activation key 已被使用。即便是删除后按照默认设置重装，也依然会提示超过许可证限制。
后来在官网给出的联系方式给客服发了消息，客服回信给了新的激活码。
> 

再下载 [WolframScript](https://account.wolfram.com/products/downloads/wolframscript)，这是 Wolfram 的前端。然后按照各个操作系统自己的规矩安装 WolframScript，我的 fedora 就是双击 rpm 文件然后根据提示操作。完成后在命令行输入 `wolframscript`, 根据提示输入 Wolfram 账号和密码，Wolfram Engine 就会联网激活自己。

激活成功之后，在 terminal 输入 `wolframscript`, 显示的结果如下，即说明 Wolfram Engine 和 Wolfram Script 配置成功。

```bash
Wolfram Language 13.0.1 Engine for Linux x86 (64-bit)
Copyright 1988-2022 Wolfram Research, Inc.

In[1]:=
```

在 `In[1]:=` 处输入 `Exit[]` 并按回车，即可退出 Wolfram 回到命令行。

## 将 Wolfram Engine 设为 Jupyter 的后端

[https://github.com/WolframResearch/WolframLanguageForJupyter](https://github.com/WolframResearch/WolframLanguageForJupyter)

根据上面网址的指示，将官方 repo 克隆到本地，因为我们的 python 分隔成了多个[虚拟环境](https://virtual.env)，所以比官网教程多一步 `workon base`:

```bash
[me@my_computer dev]$ git clone https://github.com/WolframResearch/WolframLanguageForJupyter.git
# Cloning into 'WolframLanguageForJupyter'...
# remote: Enumerating objects: 649, done.
# remote: Counting objects: 100% (140/140), done.
# remote: Compressing objects: 100% (52/52), done.
# remote: Total 649 (delta 93), reused 126 (delta 88), pack-reused 509
# Receiving objects: 100% (649/649), 321.55 KiB | 2.23 MiB/s, done.
# Resolving deltas: 100% (411/411), done.
[me@my_computer dev]$ cd WolframLanguageForJupyter
[me@my_computer WolframLanguageForJupyter]$ workon base
(base) [me@my_computer WolframLanguageForJupyter]$ ./configure-jupyter.wls add
(base) [me@my_computer WolframLanguageForJupyter]$
```

## 用法和效果

打开 vscode，按 `Ctrl+Shift+P` 呼出命令搜索框，找到 "Jupyter: Create Interactive Window":

![]({{ site.baseurl }}/assets/photos/2022-06-19-jupyter-start.png)

单击 Jupyter 后端内核的图表（下图中右上角的"base(Python 3.9.12)"字样），把内核切换为 "Wolfram Language ##"

![]({{ site.baseurl }}/assets/photos/2022-06-19-switch-kernel.png)

等待后端内核切换完成，就可以输入 Mathematica 命令查看效果了：

![]({{ site.baseurl }}/assets/photos/2022-06-19-final-result.png)

完成！
