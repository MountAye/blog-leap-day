---
layout: post
title: .py | python.subprocess执行bash命令
keywords: [md,py]
excerpt: 让 python 读 bash 的命令结果，写 bash 的命令语句。
---

笔记本的触摸屏被我摔了道裂纹，一开始还不影响使用，但是最近几周情况恶化，有时鼠标光标会突然暴走，不听指挥。所以需要禁用触摸屏作为输入设备。

在 xorg 的桌面环境之下，可以用 `xinput list` 显示出所有输入设备，以及对应的 id 号码。然后把找到的 id 填入 `xinput disable ##` 就可以了。一般来说这个 id 的数值是稳定的，所以我就直接把禁用命令写到 `~/.bashrc` 里面去了。

然而，最近把吃灰很久的树莓派拿出来玩了，所以败家买了个60%布局的小机械键盘，小键盘往笔记本一插，诶，您猜怎么着，新买的键盘输完密码登陆之后就不能用了，着实吓了一跳。

所以需要每次检查一遍输入设备的 id，然后把和触摸屏有关的 id（不止一个）从 `xinput list` 的输出里摘出来赋值给一个变量，然后把变量带入 `xinput disable #` 里面。这一套操作已经超出我的 bash 能力了，所以考虑用 python 完成中间步骤，也就是需要让 python 读 bash 的命令结果，写 bash 的命令语句。

Googles搜索给到了这个结果：[https://stackoverflow.com/questions/4256107/running-bash-commands-in-python](https://stackoverflow.com/questions/4256107/running-bash-commands-in-python)，稍微看了一下 subprocess 的官方文档，写了下面的一段，存到 `~/disable_touchscreen.py`, 然后在 `~/.bashrc` 里加一句 `python ~/disable_touchscreen.py`

```python
import subprocess
check = subprcess.run(["xinput","list"],capture_output=True)
for line in check.stdout.decode("utf-8").split("\n"):
    if "touchscreen" in line:
        device = line.partition("id=")[2].partition("\t")[0]
        disable = subprocess.run(["xinput","disable",str(device)])
        if disable.returncode==0:
            print(f"Successfully disabled touchscreen device {device}")
        else:
            print(f"Failed to disable touchscreen device {device}")
```

- 这段代码的核心是 `subprocess.run()` ，第一个参数就是传给 bash 的命令，这是一个list，其中每个元素就是 bash 语句用空格分割开的每一部分。要想得到命令的执行结果，需要添加参数 `capture_output=True`
- 上面函数的返回值是一个特殊的数据结构，命令顺利执行的话，结果会写在 `.stdout` 里，这是一个二进制串 `b'xxx...'`，所以需要 `.decode("utf-8")` 转化成字符串。

如果只用bash的话，

- 我的 bash 水平可以做到 `xinput list | grep "touchscreen"`, 这里的 `|` 是一个管道，也就是将前一条命令的输出传递给后一条作为输入。要想在 python 里使用管道，可以看这个问答：[https://stackoverflow.com/questions/13332268/how-to-use-subprocess-command-with-pipes](https://stackoverflow.com/questions/13332268/how-to-use-subprocess-command-with-pipes)
- 上面管道的结果还需要裁剪出 id 号，也就是 `line.partition("id=")[2].partition("\t")[0]`，估计需要用到 awk, 虽然难，但可以学，至少知道该学什么；
- 但是把 id 号传递给一个变量，然后把这个变量填进 `xinput disable`, 这一步就连该学什么也不知道了。
