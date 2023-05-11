---
layout: post
title: .py | import 引用现成的代码
keywords: [md,py]
excerpt: "正常的编程语言教程，教人配置完开发环境之后就应该进入正题，开始讲语法了。但是咱不正常，所以先来谈谈怎么用别人已经写好的代码。"
---

以官网给出的文件结构为例来说明：

```

sound/                          Top-level package
      __init__.py               Initialize the sound package
      formats/                  Subpackage for file format conversions
              __init__.py
              wavread.py
              wavwrite.py
              aiffread.py
              aiffwrite.py
              auread.py
              auwrite.py
              ...
      effects/                  Subpackage for sound effects
              __init__.py
              echo.py
              surround.py
              reverse.py
              ...
      filters/                  Subpackage for filters
              __init__.py
              equalizer.py
              vocoder.py
              karaoke.py
              ...
```

## 使用现成的 python 代码

正常的编程语言教程，教人配置完开发环境之后就应该进入正题，开始讲语法了。但是咱不正常，所以先来谈谈怎么用别人已经写好的代码。其中最简单的，就是可以直接通过包管理程序安装的：

```bash

pip install sound
```

然后想要使用某个文件中的函数，比如假装 `wavwrite.py` 中有个函数叫 `write()`，以下写法都是可以的，注意不同 import 方法对应不同的函数调用写法：

```python

import sound
sound.formats.wavwrite.write()

from sound import formats
formats.wavwrite.write() 

from sound.formats import wavwrite
wavwrite.write()

from sound.formats.wavwrite import write
write()
```

但是，不是所有的 python 代码都可以直接安装，比如一篇论文的研究成果发表之后，处理数据的代码也往往开源，但是这些作者基本上就只是把自己写代码的文件夹公开出来而已，我们把文件夹下载下来，然后直接 `import sound`, 会报错，提示找不到名为 sound 的库。

## python 如何读取代码文件

仔细想想，找不到才是正常的，之前轻轻松松的一句 `import sound`就解决问题，这才不简单——不同的库往往位于文件系统的不同位置，但我们只要写出他们的名字就行了，不需要指定文件路径。电脑硬盘那么大，找到库却几乎是瞬间完成的。

这是因为 python 并没有搜索整个硬盘。有一个变量，一般名为 `PYTHONPATH`，其变量值是一个列表，表中成员是含有 python 库文件夹的路径。当我们在命令行输入命令的时候，电脑会：

- 搜索当前所在的文件夹，也就是在命令行输入 `python` 时终端所在的文件夹。
- 遍历 `PYTHONPATH` 中的文件夹。
- python 包管理程序默认的位置，一般是 `<path to python>/site-package`。

看看有没有我们要引用的库，找到了就引入，找不到就报错。

上一节的错误中，如果我们恰好位于 sound 所在的文件夹，然后运行 python，此时第一条生效， `import sound` 不会报错，但在其他位置就不行了。

## 名词解释：interactive, script, module, package

可执行的 python 命令可以出现在以下四个地方，第一种是接受键盘输入的程序，后三种都是文件：

1. interactive: python **交互式界面**，也叫做 calculator mode，也就是在命令行输入 `python`之后出现的界面。每次输入一句，结果在命令行上显示出来。当 python 退出之后，输入过的命令就消失了。
2. script: python **脚本**文件，也就是在命令行输入 `python somefile.py`里面的那个`somefile.py`。
    1. 毕竟 python 是一种很轻量化的语言，在一定程度上可以起到 shell 的作用，有些命令我们并不想要用完就扔，而是保存起来以便以后重复执行，另外很多命令的组合组合成函数也可以极大地简化工作。在这种语境之下, interactive 和 script 的关系，就好像 Linux 命令行和 bash script 的关系一样。
    2. 但同时 python 又是一种功能很全面的语言，完全可以胜任复杂的面向对象编程。在这种语境之下，script 也可以用来指代 main module，也就是程序执行的主文件和入口，和下面的一般的 module 相区分。
3. module: python **模块**文件，也就是在命令行输入 `python -m another` 里面的那个 `another`（注意这里不写拓展名 `.py`）。按照官方文档的说法，所有 `.py` 文件都是 module。但是实际上这句话很有误导性，上一节的 main module 和一般的 module 非常不同，下一节会详细展开讲。一般提到 module，都是在强调这个文件定义的变量和函数可以被其他的 python 文件引用。
4. package: python **包**，互相关联的 modules 构成的更高一级的可供引用的结构，简单理解就是含有 `__init__.py` 的文件夹，但是 python 并不是根据文件夹和文件之间的从属关系来确定 package 和 module 之间的关系的，下一节会详细展开讲。

## script vs. module

python 同时兼具脚本语言的灵活性，和各种重型语言的功能全面性。因为前者，所以它并不要求程序作者一定要在一个叫做 `main.py` 的文件里写一个名叫 `Main` 的类, 然后在里面实现一个 `main()` 方法。但是因为后者，没写不代表 python 不需要知道一个复杂程序执行的起点。

这个起点就是不带有 `-m` 参数的 `python` 命令后面跟着的 `.py` 文件，这就使得这个文件变得比其他 `.py` 文件特殊。底层表现就是 python 会不管这个文件的名字叫什么，都将它的 `__name__` 属性赋值为 `"__main__"`。这样，即便这个文件可能是一个大型库中间的一个模块，运行的时候 python 连它的真名都不知道，就更找不到它同级和上下级的其他模块了。

各种普通模块被 python 用到的方法就是通过在主模块 main module（或者说 script）中 import。经过“python 如何读取代码文件”一节中的搜索过程之后找到了所需模块或包，模块的名字、模块之间的关系、模块里定义了哪些属性和函数，就被 python 了解了，从而当主模块召唤他们的时候就知道去哪里找相应的代码。除了在被 import 的时候，`python -m` 命令的宾语也可以告诉 python 被运行的模块和包的相对关系：`python -m sound.formats.wavwrite` ，此时 python 执行了 `wavwrite.py` 中的所有可执行的命令，同时知道从 `sound/` 到 `wavwrite.py` 的各个包之间的关系。

## absolute import vs. relative import

开头使用已经安装过的包使用的语法全都是绝对引用 (absolute import)，表现就是 import 语句里面没有以 `.` 作为开头的。

另外一种 import 方法叫相对引用 (relative import)，`.` 表示模块所在的文件夹，`..` 表示模块的上一级文件夹。主要用在各种明确知道自己是工具代码，而且是一个更高层次结构的组成部分，几乎永远不需要被作为主模块运行的代码。

回到开头例子里的文件结构，假如 sound/effects/surround.py 中想要使用 sound/formats/wavwrite.py 和 sound/effects/echo.py 中的函数，可以写成：

```python

# in sound/effects/surround.py
from ..formats import wavwrite
from . import echo
```

## 如何组织代码，以便自己重用

研究终于推进到了准备写论文的阶段了（学渣本质暴露了），写草稿之余，之前几年时间里做过的处理和分析，接下来的一两个月里需要把工作流程规范化之后迅速重做一遍确认。

随手写散落各处的分析代码需要整理到一起，之前试图统一到一个项目之下，结果总是在某个模块引用其他模块的时候遇到报错。于是才有了这篇文章。

以下是 [这篇文章](https://gist.github.com/ericmjl/27e50331f24db3e8f957d1fe7bbbe510) 给出的一个推荐的项目文件结构：

```

|- notebooks/
   |- 01-first-logical-notebook.ipynb
   |- 02-second-logical-notebook.ipynb
   |- prototype-notebook.ipynb
   |- archive/
	  |- no-longer-useful.ipynb
|- projectname/
   |- projectname/
	  |- __init__.py
	  |- config.py
	  |- data.py
	  |- utils.py
   |- setup.py
|- README.md
|- data/
   |- raw/
   |- processed/
   |- cleaned/
|- scripts/
   |- script1.py
   |- script2.py
   |- archive/
      |- no-longer-useful.py
|- environment.yml
```

学过这篇笔记包含的内容，我才理解作者这样的安排。既然主文件 ~~很难~~ 没办法通过相对引用来找到工具代码，索性就把工具代码写成一个完整可安装的库，然后就像 `numpy`, `pandas` 一样在独立的 notebook 和 scripts 中引用。

实际使用的时候，需要安装 `projectname` 下的代码：

```bash
cd projectname
pip install -e .
```

要知道为什么这样做，需要理解 `setup.py` 这个文件。这篇文章已经够长了，所以这个话题还是下次再说吧。

## 参考链接

- [What's the difference between a Python module and a Python package?](https://stackoverflow.com/questions/7948494/whats-the-difference-between-a-python-module-and-a-python-package). all python files re modules, while package is a specific kind of modules. It is a subsection of module in the python documentation.
- Official explanation of python module: [https://docs.python.org/3/tutorial/modules.html](https://docs.python.org/3/tutorial/modules.html)
- [This stackoverflow  answer: "run as module" is different from "run as script".](https://stackoverflow.com/questions/14132789/relative-imports-for-the-billionth-time) run as module sets the "name" to the module's name, while running as script sets it to `__main__` . Here we use "name" instead of `__name__` because it also contains `__path__` in newer versions.
- A tutorial for project organization: [https://realpython.com/python-application-layouts/](https://realpython.com/python-application-layouts/)
- Official about packaging: [https://packaging.python.org/en/latest/tutorials/packaging-projects/](https://packaging.python.org/en/latest/tutorials/packaging-projects/)
- Gist: How to organize data science project: [https://gist.github.com/ericmjl/27e50331f24db3e8f957d1fe7bbbe510](https://gist.github.com/ericmjl/27e50331f24db3e8f957d1fe7bbbe510)
- From the gist there is a link: [http://drivendata.github.io/cookiecutter-data-science](http://drivendata.github.io/cookiecutter-data-science)