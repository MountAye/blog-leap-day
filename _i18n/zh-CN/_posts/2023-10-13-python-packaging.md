---
layout: post
title: .py | 让自己的代码可以被别人使用
keywords: [md,py]
excerpt: 这里所说的“别人”，也包括6个月之后，已经不记得当初如何写出这段代码的自己。
---

> 这里所说的“别人”，也包括6个月之后，已经不记得当初如何写出这段代码的自己。
> 

很久以前写过一篇《**[import 引用现成的代码](https://mountaye.github.io/blog/articles/python-import-script-module-package)**》讲如何使用别人的代码，最后讲到一个模块的 `setup.py` 文件就没再往下写，这次继续。

- [https://packaging.python.org/en/latest/tutorials/packaging-projects/](https://packaging.python.org/en/latest/tutorials/packaging-projects/)
- [https://setuptools.pypa.io/en/latest/userguide/quickstart.html](https://setuptools.pypa.io/en/latest/userguide/quickstart.html)

## 基本流程

- 写代码，且让代码项目文件的结构符合一定的要求（见下一节）
- 根据项目的文件结构，填写 `pyproject.toml`、`setup.cfg` **或** `setup.py` **文件**
- 安装 build 这个库，然后运行 `python -m build`，产生 `dist/` 文件夹及下面的文件。（可选）将项目上传到 PyPi 或者 Conda

## 项目文件结构

常用的文件结构有两种：src-layout 和 flat-layout，另外一些小项目只有一个 python 文件。

### src-layout

在 src-layout 里，写有 package 源代码的文件夹上层还套了一个文件夹，这个文件夹习惯上命名为 src，当然也可以是别的。`pyproject.toml` 和 `src/` 文件夹同级。

```
<project_name>
├── LICENSE
├── pyproject.toml
├── README.md
├── src/
│   └── <package_name>/
│       ├── __init__.py
│       └── example.py
└── tests/
```

### flat-layout

flat-layout 指的是写有 package 源代码的文件夹直接作为开发项目的第一级子文件夹，和 `pyproject.toml` 处于同一级。

这种结构比较古老，不太推荐

```
<project_name>
├── pyproject.toml  # and/or setup.cfg/setup.py (depending on the configuration method)
├── <package_name>
|   ├── __init__.py
|   └── ... (other Python files)
├── test
|   └── ... (test files)
├── # README.rst or README.md (a nice description of your package)
└── # LICENCE (properly chosen license information, e.g. MIT, BSD-3, GPL-3, MPL-2, etc...)
```

### 单文件项目

可以看作是 flat-layout 的一种特殊情况

```
<project_name>
├── pyproject.toml  # and/or setup.cfg/setup.py (depending on the configuration method)
├── <my_module>.py
├── # README.rst or README.md (a nice description of your package)
└── # LICENCE (properly chosen license information, e.g. MIT, BSD-3, GPL-3, MPL-2, etc...)
```

## 填写 `pyproject.toml`、`setup.cfg` **或** `setup.py` **文件**

要想让构建程序把我们的代码打包成安装包，标题中的三个文件至少有一个要出现在 project 的根目录。

文件中要按照各自拓展名对应的语法，填写项目的有关信息，绝大多数可以顾名思义。

各参数的取值和代码文件结构相关，参数主要包括 `name`, `packages`, `package_dir`。如果文件结构完全满足上一节的结构，那么 `setuptools.find_packages()` 的[自动发现机制](https://setuptools.pypa.io/en/latest/userguide/package_discovery.html#automatic-discovery)就够用了。

### `name`

这是一个必填项。

注意：上一节的文件结构中，有两个名字 `<project_name>` 和 `<package_name>` ——

`<project_name>` 是整个开发项目的名字，如果用了类似 git 的版本控制的话，这个名字就是你的 repository 的名字。

`<package_name>` 比较复杂，它可以是，但不一定是你在其他代码中 `import __` 的名字，import 的名字由 `pyproject.toml` / `setup.cfg` **/** `setup.py` 里面的 `name` 参数指定。不能有连字符，只能用下划线。

如果你的 `name` 参数和 `<package_name>` 不同，还需要填写 `package_dir` 参数，

此外还有第三个名字，就是 `pip install __` 时候的名字，上传到 PyPI 的时候填写，可以带有连字符，比如 scikit-image。

### `packages`

参数是一个 list，但是一般都使用 `setuptools.find_packages()` 的结果。

该函数常用三个参数，都是可选的：

- `where`: 一个路径，相对于 `setup.py`
- `include`: 一个 list，元素是 glob patterns
- `exclude`: 一个 list，元素是 glob patterns

不指明任何参数 = 使用自动发现机制

### `package_dir`

参数是一个 dict，两种用法：

- 标准的 src-layout，直接写 `{"": "src/"}`, 表示所有的代码都在这个文件夹里。
- 当 python 模块的结构和代码的文件结构不同的时候，用这个 dict 指明 模块-文件夹 之间的关系。

文件的路径相对于 `setup.py` 而言

## 打包和上传

安装 build 工具：`python3 -m pip install --upgrade build`

运行 build：`python3 -m build`

如此会生成一个 `dist/` 文件夹，里面包含打包的结果。

要想让自己的程序可以被别人用 `pip install` 的方式安装，需要将打包成果上传到 PyPI，方法在[这里](https://packaging.python.org/en/latest/tutorials/packaging-projects/#uploading-the-distribution-archives)。

## 安装

### 静态安装

已经上传到 PyPI 的包，可以直接用 `pip install <package>` 安装，这种方法叫做静态安装

### 动态安装

还在开发过程中的包，可以在 `setup.py` 所在的位置，运行 `pip install -e .` 这种安装方法叫做动态安装，因为代码的修改可以实时反映在引用的项目中。

## 思考题

上篇文章提到的一个[数据分析项目](https://gist.github.com/ericmjl/27e50331f24db3e8f957d1fe7bbbe510)，其文件结构是这样的（我稍微改动了一下）：

```
/path/to/project/directory/
|-- notebooks/
    |-- 01-first-logical-notebook.ipynb
    |-- 02-second-logical-notebook.ipynb
    |-- prototype-notebook.ipynb
    |-- archive/
	      |-- no-longer-useful.ipynb
|-- src/
    |-- projectname/
	      |-- __init__.py
	      |-- config.py
	      |-- data.py
	      |-- utils.py
    |-- setup.py
|-- README.md
|-- data/
    |-- raw/
    |-- processed/
    |-- cleaned/
|-- scripts/
    |-- script1.py
    |-- script2.py
    |-- archive/
        |-- no-longer-useful.py
|-- environment.yml
```

问：

1. 这是一个 flat-layout 还是 src-layout？
2. setup.py 应该怎么写？执行动态安装时的 `pwd` 结果是什么？
