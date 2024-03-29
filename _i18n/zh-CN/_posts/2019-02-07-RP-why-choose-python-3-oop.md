﻿---
layout:  post
title:   .py | 转载：为什么俺推荐 Python[3]·作为面向对象语言的 Python
keywords: [html,py]
excerpt: 前一个帖子介绍了作为动态语言的 Python，今天来聊一聊 Python 在面向对象编程（OOP）方面的特色。
---

### 文章目录

* [抽象（Abstraction）](#abstract)
* [封装（Encapsulation）](#encap)
* [继承（Inheritance）](#inherit)
* [多态（Polymorphism）](#poly)
* [结尾](#summary)

本系列已经中断了很长时间 :( 直到最近一个读者来信问俺，为啥不继续写，俺才突然想起这个被遗忘的系列，实在是抱歉！前一个帖子介绍了作为动态语言的 Python，今天来聊一聊 Python 在面向对象编程（OOP）方面的特色。

本文主要针对那些熟悉 OOP，但还不熟悉 Python 的同学。为了让大伙儿有一个直观的认识，俺会拿 C++/Java 来进行语法上的对比。（这俩语言的名气够大，且号称支持 OO，也算有些可比性）

强调一下：本文虽然拿了某些语言来作对比，但丝毫没有贬低这些语言的意思，请这些语言的粉丝们，不要对号入座 :)

# 抽象（Abstraction）<a name="abstract"></a>

但凡介绍 OOP，自然会提到抽象。因为抽象，是 OO 的第一要素，也是其它要素的基础。而提到抽象，又不免提到对象（Object）。所以，俺首先来聊一下，Python 语言是如何体现“对象”这个思想的。

## Python的对象

如果要问俺，什么是 Python 中的对象，还真不好下一个严密又通俗易懂的定义。为了敷衍大伙儿，俺只好用一句话来概括，那就是 Python 语言中，【一切皆对象】。这句话该如何理解捏？简单来说，就是你在 Python 语言中涉及到的各种东东，都是“对象”。比如，函数是对象、各种数值（比如整数值、浮点数值、布尔值）是对象、模块（类似于 Java 的 package）是对象、None（类似于 Java 的空引用 null、C++ 的空指针 NULL）也是对象、甚至连类（class）也是对象......

对比一下 C++ 和 Java 的语法：只有【类的实例】才能算得上是对象。这2个语言的基本类型（比如“int、char、float”等）不是对象，至于函数，就更算不上了。

既然是一切皆对象，俺有必要稍微总结一下，Python 对象的共性，否则初学 Python 的同学还是会一头雾水。

## 对象的属性

首先，所有的 Python 的对象，都具有若干个属性。你可以通过内置的 dir() 函数进行反射，从而了解到某个对象分别都包含哪些属性。熟悉 Java 的同学，应该明白啥是“反射”。光懂 C/C++ 的同学，如果理解上有困难，可以先参考“维基百科的解释”。

另外，Python 还提供了若干内置的函数，用于在【运行时】操作指定对象的属性。具体如下：

```python

hasattr(obj, name)  #判断obj对象是否具有名为name的属性
setattr(obj, name, value)  #设置obj对象的名为name的属性值为value
getattr(obj, name)  #获取obj对象的名为name的属性值
delattr(obj, name)  #删除obj对象的名为name的属性

```

## 对象的类型

所有的 Python 对象，都可以通过内置的 type() 函数获取该对象的类型。这实际上就是 Python 的 RTTI 机制的体现。懂 C++ 的同学，可以回忆一下 C++ 的 typeid 关键字；懂 Java 的同学，可以想一想 Java 的 instanceof 关键字。

## 对象的标示

所有的 Python 对象，都可以通过内置的 id() 函数获取该对象的【唯一】标示。而且当一个对象创建之后，这个唯一标示就会始终保持不变。对于学过 C/C++ 的同学，不妨把这个“唯一标示”想象成该对象在内存的地址。这或许有助于你的理解 :)

Python 对象还有其它一些共性，考虑到本文的扫盲性质，就不再费口水了。有兴趣的同学，可以自己找些入门书研读一番。

## 【一切皆对象】的好处？

可能有同学会问，“一切皆对象”有啥好处捏？俺窃以为：当一切皆为对象，就可以把很多概念、操作、惯用手法统一起来，在语法层面体现出美感。

下面俺举几个例子，并拿 Java 来对比一下。

在 Java 里面，由于基本类型不是继承自 Object 类，引出不少麻烦。当初 Java 它爹刚开始设计容器类（比如 Vector、ArrayList ...）的时候，颇费了一番功夫。因为容器里面放置的东东必须是 Object，为了让容器能适应基本类型，只好给每一种基本类型分别对应一个派生自 Object 的包装类（Integer 类对应 int、Float 类对应 float ...）；后来又平添了自动装箱/拆箱的概念；搞来稿去，产生了 N 多复杂性。

而 Python 就没有这方面的困扰。

再拿刚才提及的“反射”来说事儿。虽然 Java 语言支持对象的反射，但是 Java 的 package 不是 Object，所以也就无法对 package 进行反射。反观 Python，任何一个 module（相当于 Java 的 package）import 之后，都可以直接通过前面提到的 dir() 函数进行反射，得知该 module 包含了哪些东东。仅仅需要2行代码：

```python

import xxx
dir(xxx)

```

# 封装（Encapsulation）<a name="encap"></a>

为了避免歧义，首先要明确一下：什么是“封装”？为了叙述方便，俺把【OOP 的封装】，分为“狭义”和“广义”两种。（关于“封装”的深入讨论，可以参见“另一篇博文”）

## 广义封装

OOP 很强调以数据为中心。所以 OOP 的广义封装，就是把数据和操作数据的行为，打包到一起。比如 C++/Java 里的 class，可以同时包含数据成员和函数成员，就算是满足“广义的封装”了。对于 Python 而言，其 class 关键字类似于 C++ 和 Java，也已经具有“广义的封装性”了。

## 狭义封装

而 OOP 的狭义封装，则更进一步，增加了信息隐藏（Information Hiding）。比如 C++ 和 Java 的“public、protected、private”等关键字，就是通过访问控制来达到信息隐藏的效果。Python 虽然没有针对访问控制的关键字来修饰类成员，但是 Python 采用了另外一套机制——根据命名来约定。在 Python 的对象中，如果某个属性以双下划线开头来命名（比如 __name），就能起到类似于 C++/Java 的 private 关键字的效果。

## 对访问控制的偏见

俺曾经在某技术论坛看到有人质疑 Python 的访问控制机制，说 Python 的私有属性，可以通过反射机制绕过，因此形同虚设。在此，俺想举 C++ 和 Java 来进行反驳。

在 Java 中，同样可以通过反射机制，来访问类的私有成员。至于 C++，得益于指针的强大，只要能访问某个对象（的 this 指针），通过计算该对象成员变量在内存中的偏移，一样可轻易对私有成员变量进行读写。虽然这么干挺变态滴，但技术上是可行滴。

# 继承（Inheritance）<a name="inherit"></a>

紧接着，咱再来说一下继承的话题。

## Python 的继承

Python 没有像 Java 那样，区分出“类继承”（OO 的术语中也叫“实现继承”）和“接口继承”；也没有像 C++ 那样，区分出“公有继承、私有继承、保护继承”这么花哨的玩意儿。Python 就只有一种继承方式。

## 继承的语法

Python 的继承语法，相比 C++/Java 而言，更加简洁。比如子类 Child 需要继承父类 Parent，代码只需如下：

```python

class Child(Parent) :
    # xxxx

```

如果是多继承，代码大同小异：

```python

class Child(Parent1, Parent2, Parent3) :
    # xxxx

```

假如你想知道某个类有哪些父类（基类），只需要通过 Child.__bases__ 便可知晓。

## 继承的动态性

其实上一个帖子已经介绍了动态改变继承关系的例子。但是考虑到上一个帖子年代久远（距本文将近1年），想必很多同学没看过或者看过又忘了。俺不妨再啰嗦一下：作为一种动态语言，Python 可以在【运行时】修改类的继承关系。这个特性比较酷，是 C++/Java 所望尘莫及滴。请看下面的例子：

```python

class Parent1 :
    def dump(self) :
        print("parent1")

class Parent2 :
    def dump(self) :
        print("parent2")

class Child :
    def dump(self) :
        print("child")

print(Child.__bases__)
Child.__bases__ += (Parent1, Parent2)  # 动态追加了2个父类
print(Child.__bases__)  # 此处打印出的父类信息中，已经包含 Parent1、Parent2

```

# 多态（Polymorphism）<a name="poly"></a>

至于 Python 的多态，和传统的 OO 语言差不多，似乎没有太多值得说道的地方。俺简单举个代码作例子。为了省打字，直接复用上述的3个类，并增加一个 test() 函数如下：

```python

def test(obj) :
    obj.dump()

```

然后对 test() 函数分别传入不同的类型的对象，输出结果俺就无需多说了吧？

```python

c = Child()
test(c)  # 打印出 child
p1 = Parent1()
test(p1)  # 打印出 parent1

```

# 结尾<a name="summary"></a>

今天的话题，主要是让不熟悉 Python 的网友，对 Python 在面向对象方面的特性，有一个粗浅、感性的认识。聊完了 OOP，下一个帖子会聊一下关于 FP（函数式编程）的话题。

[回到本系列的目录]({% post_url 2019-02-07-RP-why-choose-python-0-overview %})

> **版权声明** <br>
> 本博客（编程随想的博客）所有的原创文章，原作者皆保留版权。转载必须包含本声明，保持本文完整，并以超链接形式注明作者编程随想和本文原始地址: <br>
> [https://program-think.blogspot.com/2010/08/why-choose-python-3-oop.html](https://program-think.blogspot.com/2010/08/why-choose-python-3-oop.html)
