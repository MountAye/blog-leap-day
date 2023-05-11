---
layout: post
title: .git | 管理 GitHub 不同用户身份的仓库
keywords: [md,git]
excerpt: 多用户多账户，如何告诉 GitHub 某个项目文件夹该由哪个账号来做版本管理。
---

很显然，我不可能把“阿掖山”这个名字写到论文里，与研究相关的项目、组里的代码和数据，都由另一个实名的 GitHub 账号来处理。这就有个问题——如何告诉 GitHub 某个项目文件夹该由哪个账号来做版本管理。

于是 STFW，结果看到了GitHub  官方的回答：[“这边建议您把两个账号合并呢～”](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts)

其实这个问题在建立这个博客站之前就解决了，但是因为很长时间我的研究代码都是自己在用，而且只在台式机上用，一直没有推到 GitHub 上去，实名账号一直没在笔记本上用过。具体细节忘得差不多了，这次复习一下。

作为例子，两个账号的用户名分别是 `USER1` 和 `USER2`，注册邮箱分别是 `USER1@EMAIL.com` 和 `USER2@EMAIL.com`。

## 多个计算机用户

当然了，最简单的方法就是新建一个操作系统用户，每个用户登录一个 GitHub 账号。这种方法好处很多：

- 不需要特殊操作。
- 适用于不同操作系统。
- 切换身份需要专门切换账号，有助于防止操作者忘记自己所处的身份。

但是这篇文章不会涉及这种方法，因为当初买电脑的时候并没有注意到需要做身份隔离，等到发现事情不妙的时候已经混装和两个身份需要的不同软件，积重难返。于是采用了以下两节的解决方案。

## 单个计算机用户@Windows: GitHub Desktop

![]({{ site.baseurl }}/assets/photos/2021-12-26-github-desktop.png)

- 在官网下载、安装、打开 [GitHub Desktop](https://desktop.github.com/) 客户端。
- 在 GitHub 网页版上切换到新的账户。
- 点击左上角 `File > Options`，默认界面就是账户信息。点击 `Sign Out` 退出登录，然后再点击 `Sign In`，根据弹出窗口的提示操作，就来到了新的账户。

## 单个计算机用户@Linux : `.ssh/config`

具体操作看以下两个连接就够了：

- [https://gist.github.com/JoaquimLey/e6049a12c8fd2923611802384cd2fb4a](https://gist.github.com/JoaquimLey/e6049a12c8fd2923611802384cd2fb4a)
- [https://docs.github.com/en/authentication/connecting-to-github-with-ssh](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

~~但是为了水字数，~~ 还是写得详细一点……

### 本地：生成并启用 SSH key

打开命令行，输入以下命令，生成 SSH key：

```bash

ssh-keygen -t rsa -b 4096 -C "USER1" 
ssh-keygen -t rsa -b 4096 -C "USER2"
```

其中 `-t` 指定加密算法，`-b` 指定密钥的位数，`-C` 相当于注释。

然后命令行会弹出几个选项，可以一路按回车使用默认值。

上述命令完成后，在 `~/.ssh` 文件夹应该会有两对四个密钥文件：

- `~/.ssh/USER1`
- `~/.ssh/USER1.pub`
- `~/.ssh/USER2`
- `~/.ssh/USER2.pub`

然后输入以下命令，启用刚刚生成的密钥。

```bash

eval "$(ssh-agent -s)" # 启动 ssh-agent
ssh-add ~/.ssh/USER1   # 添加 USER1 的密钥
ssh-add ~/.ssh/USER2   # 添加 USER2 的密钥
```

### 网页：把密钥添加到对应的账号

在网页端以 `USER1` 身份登录 GitHub 之后，在 "Settings" 页面找到 "SSH and GPG keys" 选项卡，点击绿色的 "New SSH key" 按钮之后，将 `~/.ssh/USER1.pub` 中的内容复制到 "Key" 填空区，然后起一个名字，点击 "Add SSH key" 按钮。

![]({{ site.baseurl }}/assets/photos/2021-12-26-github-key.png)

USER2也照此办理。

**千万要注意**复制的应该是 `.pub` 后缀的文件！

### 本地：编辑 `~/.ssh/config` 文件

在 ~/.ssh/ 找到或者新建一个名为 config 的文本文件。打开之后，将以下内容添加到文件中：

```

Host github.com-user1
	Hostname github.com
	User git
	IdentityFile ~/.ssh/user1
Host github.com-user2
	Hostname github.com
	User git
	IdentityFile ~/.ssh/user2
```

### `git clone` 时 repo 地址的改动

一般的 git clone, 直接把 GitHub 提供的命令复制粘贴到命令行就行了。

![]({{ site.baseurl }}/assets/photos/2021-12-26-git-clone.png)

但是我们这个不同，首先是只能选择 SSH 模式，然后是需要在域名`github.com` 后面加上`-user1`:

```bash

git clone git@github.com-user1:User/Repo.git
```

这里就体现出之前在 `~/.ssh/config` 把 Host 命名为 `github.com-****` 的好处了。

### `git commit` 前填写在 repo 中填写账户信息

 第一次做完改动推送到 GitHub 之前，需要专门在 repo 级别写明自己的身份，也就是在命令行输入：

```bash

git config --local user.name  "USER1"
git config --local user.email "USER1@EMAIL.com"
```

### **注意：**为了防止操作者忘记自己所处的身份

强烈建议去掉用户信息的全局设置：

```bash

git config --global --unset user.name
git config --global --unset user.email
```

这样假如忘记之前的 `git config --local`, 第一次 git commit 的时候会报错，提示信息缺失。

这样操作一次之后，之后的操作几乎感受不到账户的不同。
