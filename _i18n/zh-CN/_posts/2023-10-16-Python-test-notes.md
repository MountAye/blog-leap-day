---
layout: post
title: .py | Python 测试笔记
keywords: [md,py]
excerpt: 如题
---

## 一些名词

### 调试和测试

调试一般是由代码的作者进行，用于自行检查程序运行过程，是否存在思路和实现不匹配的错误，调试的代码一般和程序主体写在一起，主要包括错误处理和日志记录。简单的可以用 print 和 assert，复杂的程序可以用 logging。

测试一般由第三方进行，测试代码和程序代码分离，写测试的人甚至不需要理解程序的具体工作原理，只关注给定的输入能否得到程序宣称的输出。

### 单元测试

对一个模块、一个函数或者一个类来进行正确性检验的测试工作。

检验的方法是写一堆测试用例，把测试员拍脑袋想的输入交给相应的模块，看模块的输出是否正确；以及不合理的输入是否被程序识别，抛出异常。

单元测试全通过了不代表程序整体一定就没错误，但是单元测试通不过的程序一定有问题。

### 文档测试

文档是对代码的功能介绍，其中不免要举例子，给出实例代码和相应的输出，这个过程很像是单元测试，只不过是纯嘴炮。

文档测试就是自动寻找文档中的示例代码，运行之后，和文档中的结果进行比对。

### 集成测试

集成测试模拟用户的行为，测试各个模块之间的配合，测试结果应该保证程序可以在生产环境中工作。

## Python 中的测试

### 文件结构

上一篇文章里面提到了 src-layout，在 setuptools 的官方文档里提供了[一篇博客文章](https://blog.ionelmc.ro/2014/05/25/python-packaging/#the-structure)，里面提到，这种文件结构的一个优点就是，测试代码的文件夹一般和 `src/` 而不是 package 平级，这就导致运行测试的时候只能先（在虚拟环境里）安装待测试的包，而不会无意中出现测试的代码和用户下载到的内容不同的问题。

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

### 单元测试·`unittest`

`unittest` 是 Python 自带的单元测试库。

测试脚本的内容基本如下：

```
import unittest

class TestName1(unittest.TestCase):

    def test_sum(self):
        self.assertEqual(sum([1, 2, 3]), 6, "Should be 6")

    def test_sum_tuple(self):
        self.assertEqual(sum((1, 2, 2)), 6, "Should be 6")

class TestName2(unittest.TestCase):

    def test_sum(self):
        self.assertEqual(sum([1, 2, 3]), 6, "Should be 6")

    def test_sum_tuple(self):
        self.assertEqual(sum((1, 2, 2)), 6, "Should be 6")

if __name__ == '__main__':
    unittest.main()
```

- 测试用例包装在一个 class 里面，这个 class 继承自 `unittest.TestCase`
- 所有测试方法名字以 “test” 开头，能测试的性质有限，都是类自带的方法，以 `self.` 开头。支持的方法见下表，感觉 `[assertTrue(x)](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertTrue)` 和 `assertRaises(Exception)` 包打一切
- 作为 `'__main__'` 运行，运行的是自带的函数 `unittest.main()`。
- 运行时需要 python 指明脚本的文件名。安装了 nose2 这个库的话，可以直接运行 `python -m nose2`, 它会自动寻找所有的测试依次运行。（后面发现 `unittest` 好像也有自动发现功能）

| Method | Checks that | New in |
| --- | --- | --- |
| https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertEqual | a == b |  |
| https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertNotEqual | a != b |  |
| https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertTrue | bool(x) is True |  |
| https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertFalse | bool(x) is False |  |
| https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertIs | a is b | 3.1 |
| https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertIsNot | a is not b | 3.1 |
| https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertIsNone | x is None | 3.1 |
| https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertIsNotNone | x is not None | 3.1 |
| https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertIn | a in b | 3.1 |
| https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertNotIn | a not in b | 3.1 |
| https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertIsInstance | isinstance(a, b) | 3.2 |
| https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertNotIsInstance | not isinstance(a, b) | 3.2 |

### 文档测试

[https://www.liaoxuefeng.com/wiki/1016959663602400/1017605739507840](https://www.liaoxuefeng.com/wiki/1016959663602400/1017605739507840)

Python 的文档测试用的是 `doctest` 库，写法如下：

```python
class Dict(dict):
    '''
    Simple dict but also support access as x.y style.

    >>> d1 = Dict()
    >>> d1['x'] = 100
    >>> d1.x
    100
    >>> d1.y = 200
    >>> d1['y']
    200
    >>> d2 = Dict(a=1, b=2, c='3')
    >>> d2.c
    '3'
    >>> d2['empty']
    Traceback (most recent call last):
        ...
    KeyError: 'empty'
    >>> d2.empty
    Traceback (most recent call last):
        ...
    AttributeError: 'Dict' object has no attribute 'empty'
    '''
    def __init__(self, **kw):
        super(Dict, self).__init__(**kw)

    def __getattr__(self, key):
        try:
            return self[key]
        except KeyError:
            raise AttributeError(r"'Dict' object has no attribute '%s'" % key)

    def __setattr__(self, key, value):
        self[key] = value

if __name__=='__main__':
    import doctest
    doctest.testmod()
```

在保持 docstring 缩进的前提下，`>>>`  开头的注释会被当作测试运行，紧随其后的行将作为对比基准。只有当预期报错的时候，可以用 `...` 省略中间的报错信息。

### 集成测试

也可以用 `unittest` 完成。

和单元测试的区别在于，一般来说需要构建测试数据集等等。这需要重写 `unittest.TestCase.setup()`

```python
class TestComplexData(unittest.TestCase):
    def setUp(self):
        # load test data
        self.app = App(database='fixtures/test_complex.json')

    def test_customer_count(self):
        self.assertEqual(len(self.app.customers), 10000)

    def test_existence_of_customer(self):
        customer = self.app.get_customer(id=9999)
        self.assertEqual(customer.name, u"バナナ")
        self.assertEqual(customer.address, "10 Red Road, Akihabara, Tokyo")

if __name__ == '__main__':
    unittest.main()
```