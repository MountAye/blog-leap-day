---
layout: post
title: .py | Python decorator 装饰器
keywords: [md,py]
excerpt: 所谓装饰器 (decorator)，就是函数前一行 @ 打头的一串字符，是 python 的一种语法糖。
---

最近参加了一个关于如何在 Python 项目中利用 GPU 提高运算效率的培训，里面提到了 `numba` 这个加速科学计算的库，而 `numba` 发挥作用的主要工具就是各种装饰器。

所谓装饰器，就是读一些网上现成的 python 代码的时候会看到的，函数前一行 `@` 打头的一串字符，一般是一个名字，偶尔会附带有参数：

```python
@decorator
def myfunction():
    # do something...
    return results
```

它的实际作用相当于：

```python
def myfunction():
    # do something...
    return None

myfunction = decorator(myfunction)
```

Python 是一种[函数式编程语言](https://program-think.blogspot.com/2012/02/why-choose-python-4-fp.html)，函数和各种类型的变量一样，在 Python 都是一种对象，所以可以把函数赋值给一个变量，可以在函数里定义另一个函数，可以把函数作为参数传递给另一个函数，可以把函数名作为另一个函数的返回值。

`myfunction = decorator(myfunction)` 就是装饰器的定义，是 Python 的一个[语法糖](https://zh.m.wikipedia.org/zh-hans/%E8%AF%AD%E6%B3%95%E7%B3%96)。也就是说装饰器本身也是一个函数，我们的函数被装饰器装饰之后，函数名称不变，在完整实现函数原有功能的同时，额外执行装饰器中的命令。

### 装饰器是如何做到的

要想自己写一个装饰器的话，需要了解一下装饰器的实现原理。一个最简单的装饰器可以这么写：

```python
def decorator(func):
    def inner():
        # do something
        func()
        # do some more
        return None
    return inner
```

也就是在装饰器内部再定义一个函数，这个内部函数的函数体执行被装饰的函数，然后外层装饰器把内层函数名当作返回值。

### 如果一个函数需要多个装饰器

把前面装饰器的定义套在多个装饰器的情况里：

```python
@decorator1
@decorator2
def myfunction():
    return None

myfunction = decorator1(decorator2(myfunction))
```

### 如果被装饰的函数有传入参数

装饰器不知道自己要装饰的函数长什么样，也就不知道函数接受多少个参数，其中有几个是位置参数，几个是关键词参数。所以需要用单星号打包/解包位置参数，双星号打包/解包关键词参数。`args` 和 `kwargs` 是变量名的代词，可以换成其他自己喜欢的名字。

```python
def decorator(func):
    def inner(*args,**kwargs):
        # do something
        func(*args,**kwargs)
        # something else
        return None
    return inner

@decorator
def myfunction(x,y,mode="normal",strict=True):
    # do something...
    return None
```

### 如果被装饰的函数有返回值

则装饰器的内层函数需要把被装饰的函数的返回值返回出来：

```python
def decorator(func):
    def inner(*args,**kwargs):
        # do something
        func(*args,**kwargs)
        # something else
        return func(*args,**kwargs)
    return inner

@decorator
def myfunction(x,y,mode="normal",strict=True):
    # do something...
    return results
```

### 如果想让装饰器本身接受参数

也就是想达到下面的效果：

```python
@param_decorator(param="neat")
def myfunction(x,y,mode="normal",strict=True):
    # do something...
    return results
```

也就是让 `param_decorator(param="neat")` 返回一个装饰器函数，也就是在之前的装饰器外面再加一层：

```python
def param_decorator(param):
    def decorator(func):
        def inner(*args,**kwargs):
            if param=="neat":
                print("neat")
                # ...
            else:
                print("not neat")
                # ...
            func(*args,**kwargs)
            return func(*args,**kwargs)
        return inner
    return previous_decorator
```

### 如果想让装饰器既可以接受参数，也可以不接受参数～

实在是有点过于高级了，直接说答案：

```python
def flex_decorator(_func=None,*,kw1="val1",kw2="val2"):
    def decorator(func):
        def inner(*args,**kwargs):
            print(kw1,kw2)
            # do something
            func(*args,**kwargs)
            # something else
            return func(*args,**kwargs)
        return inner
    if _func is None:
        return decorator
    else:
        return decorator(_func)
```

根据 [https://peps.python.org/pep-3102/](https://peps.python.org/pep-3102/)，`*`作为一个单独的函数参数，表示后面所有的参数都是关键词参数，用来限定星号前面位置参数的数量。

- 当 `@flex_decorator` 不加参数使用的时候:
    - 根据定义 `myfunction = flex_decorator(myfunction)`
    - `_func=myfunction`
    - 此时 `else` 生效，`myfunction = decorator(myfunction)`
- 当 `@flex_decorator(kw1="val1",kw2="val2")` 加上参数使用的时候:
    - 根据定义 `myfunction = flex_decorator(kw1="val1",kw2="val2")(myfunction)`
    - `_func=None`
    - 此时 `if` 生效，`myfunction = decorator(myfunction)`

——**接受的参数必须是关键词参数**，否则和被装饰的函数名无法区分。

### `@functools.wraps`：刻章、办证

以上各节基本完成了常用场景下装饰器的功能。

但是，Python 作为一种动态语言，一大特征就是可以在运行时进行[类型内省](https://en.wikipedia.org/wiki/Type_introspection)。而按照我们上面的写法，被装饰之后的函数，Python 认为它不再是原来的函数，而是装饰器里面定义的那个内部函数，这样可能会出现意想不到的问题。

解决方法是使用一个专门的装饰器根装饰器定义的内部函数办个假身份：

```python
import functools

def decorator(func):
    @functools.wraps(func)
    def inner(*args,**kwargs):
        # do something
        func(*args,**kwargs)
        # something else
        return func(*args,**kwargs)
    return inner
```
