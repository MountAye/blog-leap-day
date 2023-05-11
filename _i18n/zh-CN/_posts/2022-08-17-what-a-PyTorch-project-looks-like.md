---
layout: post
title: .py | 一个 PyTorch 机器学习项目长什么样
keywords: [md,py,ai]
excerpt: 官网的一个pytorch教程的笔记，原文先按照第一性原理，尽量用原生 python 写了一遍，然后一步一步重构成接近生产环境的代码。这里我把顺序反过来，先放出重构之后的最终结果
---

自学，或者说一切学习和教学，本质就是在已经掌握的知识和未知的目标知识之间修路。路有两种修法，一是理论或者说是第一性原理路线，从不证自明的公理或者已经掌握的知识出发，通过逻辑推理一步步得到新的知识；另一种是实践或者说工程师路线，拿到一个已经可以工作的产品，划分成各个子系统，通过输入的改变来观察输出的不同，直到子系统简化到自己可以理解的地步，不再是黑箱，借此了解整个系统的功能。

但是当学习的对象复杂到一定程度之后，凭借一个人的自学能力，只用其中一种方法往往难以钻透。又或者两种方法学到的路线并非同一条路。对于机器学习，理论路线就是“让输入数据通过一个带有超多参数的函数，根据函数返回值和输出数据之间的差别修正参数，直到函数能够近似输入数据和输出数据之间的关系”；实践中代码往往会使用很多库作者封装好的函数，只读源码往往一头雾水。

所以，看到 PyTorch 官网的这篇教程 **WHAT IS TORCH.NN *REALLY*?:** [https://pytorch.org/tutorials/beginner/nn_tutorial.html](https://pytorch.org/tutorials/beginner/nn_tutorial.html) 可以说是喜出望外，把两种路线写出的代码都给了出来，对于自学者来说，就像罗塞塔石碑一样可以互相对照。这里我把 CNN 相关的部分抽掉了，毕竟 CNN 只是深度学习的一个子集，深度学习只是机器学习的一个子集，和这篇文章的主题关系不大。

原文先按照第一性原理，尽量用原生 python 写了一遍，然后一步一步重构成接近生产环境的代码。这里我把顺序反过来，先放出重构之后的最终结果：

```python
from pathlib import Path
import requests
import pickle
import gzip
import numpy as np
import torch
import torch.nn.functional as F
from torch import nn
from torch import optim
from torch.utils.data import TensorDataset,DataLoader

# Using GPU

print(torch.cuda.is_available())
dev = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")

# Wrapping DataLoader
# https://pytorch.org/tutorials/beginner/basics/data_tutorial.html?highlight=dataloader
# https://pytorch.org/tutorials/beginner/data_loading_tutorial.html?highlight=dataloader

def preprocess(x, y):
    return x.view(-1, 1, 28, 28).to(dev), y.to(dev)

def get_data(train_ds, valid_ds, bs):
    return (
        DataLoader(train_ds, batch_size=bs, shuffle=True),
        DataLoader(valid_ds, batch_size=bs * 2),
    )

class WrappedDataLoader:
    def __init__(self, dl, func):
        self.dl = dl
        self.func = func

    def __len__(self):
        return len(self.dl)

    def __iter__(self):
        batches = iter(self.dl)
        for b in batches:
            yield (self.func(*b))

# Define the neural network model to be trained

# # If the model is simple:
# model = nn.Sequential(nn.Linear(784, 10))

# generally the model is a class that inherites nn.Module and implements forward()
class Mnist_Logistic(nn.Module):
    def __init__(self):
        super().__init__()
        # self.weights = nn.Parameter(torch.randn(784, 10) / math.sqrt(784))
        # self.bias = nn.Parameter(torch.zeros(10))
        self.lin = nn.Linear(784, 10)

    def forward(self, xb):
        # return xb @ self.weights + self.bias
        return self.lin(xb)

# Define the training pipeline in fit()

def loss_batch(model, loss_func, xb, yb, opt=None):
    loss = loss_func(model(xb), yb)

    if opt is not None:
        loss.backward()
        opt.step()
        opt.zero_grad()

    return loss.item(), len(xb)

def fit(epochs, model, loss_func, opt, train_dl, valid_dl):
    for epoch in range(epochs):
        model.train()
        for xb, yb in train_dl:
            loss_batch(model, loss_func, xb, yb, opt)

        model.eval()
        with torch.no_grad():
            losses, nums = zip(
                *[loss_batch(model, loss_func, xb, yb) for xb, yb in valid_dl]
            )
        val_loss = np.sum(np.multiply(losses, nums)) / np.sum(nums)

        print(epoch, val_loss)
    return None

# __main()__:

# data
DATA_PATH = Path("data")
PATH = DATA_PATH / "mnist"

PATH.mkdir(parents=True, exist_ok=True)

URL = "https://github.com/pytorch/tutorials/raw/master/_static/"
FILENAME = "mnist.pkl.gz"

if not (PATH / FILENAME).exists():
        content = requests.get(URL + FILENAME).content
        (PATH / FILENAME).open("wb").write(content)
with gzip.open((PATH / FILENAME).as_posix(), "rb") as f:
        ((x_train, y_train), (x_valid, y_valid), _) = pickle.load(f, encoding="latin-1")

x_train, y_train, x_valid, y_valid = map(
    torch.tensor, (x_train, y_train, x_valid, y_valid)
)

train_dataset = TensorDataset(x_train, y_train)
valid_dataset = TensorDataset(x_valid, y_valid)
train_dataloader, valid_dataloader = get_data(train_ds, valid_ds, bs)
train_dataloader = WrappedDataLoader(train_dataloader, preprocess)
valid_dataloader = WrappedDataLoader(valid_dataloader, preprocess)

# hyperparameters/model
learning_rate = 0.1
epochs = 2
loss_function = F.cross_entropy # loss function
model = Mnist_CNN()
model.to(dev)
optimizer = optim.SGD(model.parameters(), lr=learning_rate , momentum=0.9)

# training
fit(epochs, model, loss_function, optimizer, train_dataloader, valid_dataloader)
```

可以看到，一个项目主干可以分成4部分：

1. 准备数据
2. 定义模型
3. 描述流程
4. 实际运行

下面把各部分拆分开来，把两种思路的代码进行对比。

## 1. 准备数据

### 重构之前

```python
DATA_PATH = Path("data")
PATH = DATA_PATH / "mnist"

PATH.mkdir(parents=True, exist_ok=True)

URL = "https://github.com/pytorch/tutorials/raw/master/_static/"
FILENAME = "mnist.pkl.gz"

if not (PATH / FILENAME).exists():
        content = requests.get(URL + FILENAME).content
        (PATH / FILENAME).open("wb").write(content)
with gzip.open((PATH / FILENAME).as_posix(), "rb") as f:
        ((x_train, y_train), (x_valid, y_valid), _) = pickle.load(f, encoding="latin-1")

x_train, y_train, x_valid, y_valid = map(
    torch.tensor, (x_train, y_train, x_valid, y_valid)
)
n, c = x_train.shape
```

### 重构以后：

```python
# Wrapping DataLoader
# https://pytorch.org/tutorials/beginner/basics/data_tutorial.html?highlight=dataloader
# https://pytorch.org/tutorials/beginner/data_loading_tutorial.html?highlight=dataloader

def preprocess(x, y):
    return x.view(-1, 1, 28, 28).to(dev), y.to(dev)

def get_data(train_ds, valid_ds, bs):
    return (
        DataLoader(train_ds, batch_size=bs, shuffle=True),
        DataLoader(valid_ds, batch_size=bs * 2),
    )

class WrappedDataLoader:
    def __init__(self, dl, func):
        self.dl = dl
        self.func = func

    def __len__(self):
        return len(self.dl)

    def __iter__(self):
        batches = iter(self.dl)
        for b in batches:
            yield (self.func(*b))
```

## 2. 定义模型

### 重构之前

```python
weights = torch.randn(784, 10) / math.sqrt(784)
weights.requires_grad_()
bias = torch.zeros(10, requires_grad=True)

def log_softmax(x):
    return x - x.exp().sum(-1).log().unsqueeze(-1)

def model(xb):
    return log_softmax(xb @ weights + bias)

def nll(input, target):
    return -input[range(target.shape[0]), target].mean()
loss_func = nll

def accuracy(out, yb):
    preds = torch.argmax(out, dim=1)
    return (preds == yb).float().mean()
```

### 重构以后

```python
# If the model is simple:
model = nn.Sequential(nn.Linear(784, 10))

# generally the model is a class that inherites nn.Module and implements forward()
class Mnist_Logistic(nn.Module):
    def __init__(self):
        super().__init__()
        # self.weights = nn.Parameter(torch.randn(784, 10) / math.sqrt(784))
        # self.bias = nn.Parameter(torch.zeros(10))
        self.lin = nn.Linear(784, 10)

    def forward(self, xb):
        # return xb @ self.weights + self.bias
        return self.lin(xb)

```

## 3. 描述流程

### 重构之前

```python
lr = 0.5  # learning rate
epochs = 2  # how many epochs to train for

for epoch in range(epochs):
    for i in range((n - 1) // bs + 1):
        #         set_trace()
        start_i = i * bs
        end_i = start_i + bs
        xb = x_train[start_i:end_i]
        yb = y_train[start_i:end_i]
        pred = model(xb)
        loss = loss_func(pred, yb)

        loss.backward()
        with torch.no_grad():
            weights -= weights.grad * lr
            bias -= bias.grad * lr
            weights.grad.zero_()
            bias.grad.zero_()
```

### 重构以后

```python

def loss_batch(model, loss_func, xb, yb, opt=None):
    loss = loss_func(model(xb), yb)

    if opt is not None:
        loss.backward()
        opt.step()
        opt.zero_grad()

    return loss.item(), len(xb)

def fit(epochs, model, loss_func, opt, train_dl, valid_dl):
    for epoch in range(epochs):
        model.train()
        for xb, yb in train_dl:
            loss_batch(model, loss_func, xb, yb, opt)

        model.eval()
        with torch.no_grad():
            losses, nums = zip(
                *[loss_batch(model, loss_func, xb, yb) for xb, yb in valid_dl]
            )
        val_loss = np.sum(np.multiply(losses, nums)) / np.sum(nums)

        print(epoch, val_loss)
    return None
```

## 4. 实际运行

### 重构之前

```python
# __main()__:
print(loss_func(model(xb), yb), accuracy(model(xb), yb))
```

### 重构以后

```python
# __main()__:

# data
DATA_PATH = Path("data")
PATH = DATA_PATH / "mnist"

PATH.mkdir(parents=True, exist_ok=True)

URL = "https://github.com/pytorch/tutorials/raw/master/_static/"
FILENAME = "mnist.pkl.gz"

if not (PATH / FILENAME).exists():
        content = requests.get(URL + FILENAME).content
        (PATH / FILENAME).open("wb").write(content)
with gzip.open((PATH / FILENAME).as_posix(), "rb") as f:
        ((x_train, y_train), (x_valid, y_valid), _) = pickle.load(f, encoding="latin-1")

x_train, y_train, x_valid, y_valid = map(
    torch.tensor, (x_train, y_train, x_valid, y_valid)
)

train_dataset = TensorDataset(x_train, y_train)
valid_dataset = TensorDataset(x_valid, y_valid)
train_dataloader, valid_dataloader = get_data(train_ds, valid_ds, bs)
train_dataloader = WrappedDataLoader(train_dataloader, preprocess)
valid_dataloader = WrappedDataLoader(valid_dataloader, preprocess)

# hyperparameters/model
learning_rate = 0.1
epochs = 2
loss_function = F.cross_entropy # loss function
model = Mnist_CNN()
model.to(dev)
optimizer = optim.SGD(model.parameters(), lr=learning_rate , momentum=0.9)

# training
fit(epochs, model, loss_function, optimizer, train_dataloader, valid_dataloader)
```