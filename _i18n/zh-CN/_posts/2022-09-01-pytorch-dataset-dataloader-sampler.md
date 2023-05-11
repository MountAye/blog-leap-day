---
layout: post
title: .py | PyTorch 数据处理方面的封装
keywords: [md,py,ai]
excerpt: 一般监督学习的数据结构和处理过程，以及 PyTorch 对上述结构和处理过程的封装
---

## 一般监督学习的数据结构和处理过程

### 训练集、验证集、测试集

所有数据整体构成一个大集合，这个集合的每一个元素都包含一个输入和一个目标，分别记作 x 和 y。

把这个大集合分成互相没有交集的三个子集，分别是训练集 (training set)、验证集 (validation set)、测试集 (test set)。

- 训练集和验证集在训练过程中使用。
    - 训练集的数据带入模型时，模型处于训练模式，模型输出对参数的导数被记录。通过比较把“模型输出”和“训练目标 y”代入**损失函数**的损失，更新模型的参数。同时记录“模型输出”和“训练目标 y”带入验证函数的结果，和验证集比较。
    - 验证集的数据代入模型时，模型处于求值模式，模型只根据输入计算输出，对参数的导数不记录。通过观察“模型输出”和“训练目标 y”带入**验证函数**的结果，观察训练是否陷入“过拟合”。当训练集的验证函数结果不断下降，但是验证集的验证函数结果几乎不变时，可以认为模型过拟合。
- 测试集在训练完成之后使用，代入模型时，模型处于求值模式。用于评价训练结果的好坏。

### epoch vs. batch

如果把所有数据同时进行训练，所需要的空间一般都大于电脑内存。所以一般会将训练集随机分成若干批次 (batch)，一个批次的数据同时塞入模型进行训练，在一个 batch 里每一个模型输出对参数的导数累加在一起，整个 batch 结束后更新模型参数，同时导数清零。因为 batch 这个概念和内存有关，所以数值一般选择为 2 的指数。

将训练集所有的 batches 跑完一次称为而一个 epoch。一次训练一般需要很多 epochs，直到损失函数结果足够低，或验证集显示出现过拟合。

## PyTorch 对上述结构和处理过程的封装

### `Dataset`

前面已经说了，数据集包括输入和目标两部分，`Dateset` 及其子类的作用就是

如果在把数据装入 `Dataset` 之前就已经是规整的两个张量了的话——

```python
import torch
from torch.utils import data

# ...

for x,y in zip(train_x,train_y):
    # do something with x and y

trainset = TensorDataset(train_x,train_y)
for x,y in trainset:
    # do something with x and y
```

——这一步确实没什么意思。

有意思的地方在于可以自己写一个数据集类，继承 `Dataset`，然后重载 `__getitem__()` 和 `__len__()` 方法，这样可以把一些不适合用张量表示的数据塞进 `Dataset` 里面，对图像进行学习的话可以在此处加入图像增强的步骤，并进一步用于 `DataLoader`

### `DataLoader`

`DataLoader` = `Dataset` + `Sampler`，因为一般的教程里只需要讲数据集进行简单随机划分，也就只用到了 `batch_size` 等等参数，用到 Sampler 的地方很少。

最常见的用例就是 `WeightedRandomSampler` 。训练分类器的时候，有时其中一个类别的数据远少于其他，那么训练器就更难判断出这一分类（因为只要无脑排除这个类别就能获得不错的正确率），所以需要平衡不同组别之间的权重。

```python
list(WeightedRandomSampler(weights=[0.1, 0.9, 0.4, 0.7, 3.0, 0.6], num_samples=5, replacement=True))
# [4, 4, 1, 4, 5]
list(WeightedRandomSampler(weights=[0.9, 0.4, 0.5, 0.2, 0.3, 0.1], num_samples=5, replacement=False))
# [0, 1, 4, 3, 2]
```

平衡完之后转化为 batch，搭配 `BatchSampler`：

```python
list(BatchSampler(WeightedRandomSampler(weights=[0.1, 0.9, 0.4, 0.7, 3.0, 0.6], num_samples=5, replacement=True), batch_size=2, drop_last=False))
# [[4, 4], [1, 4], 5]
list(BatchSampler(WeightedRandomSampler(weights=[0.1, 0.9, 0.4, 0.7, 3.0, 0.6], num_samples=5, replacement=True), batch_size=2, drop_last=True))
# [[0, 1], [4, 3]]
```

### 汇总一下

```python
import torch
from torch.utils import data

train_x = torch.rand((100,5))
train_y = torch.rand((100,2))
trainset = data.TensorDataset(train_x,train_y)

# either:
trainloader = data.DataLoader(
    trainset,
    batch_size=2,
    drop_last=True,
    sampler=data.WeightedRandomSampler(
        weights=[0.1, 0.9, 0.4, 0.7, 3.0, 0.6], 
        num_samples=5, 
        replacement=True))
# or:
trainloader = data.DataLoader(
    trainset,
    batch_sampler=data.BatchSampler(
        data.WeightedRandomSampler(
            weights=[0.1, 0.9, 0.4, 0.7, 3.0, 0.6], 
            num_samples=5, 
            replacement=True), 
        batch_size=2, 
        drop_last=True))

for epoch in range(100):
    for x,y in trainloader:
        train(model,x,y,loss_function)
```

需要注意的是，`for x,y in trainset` 的 x 和 y 的维度是单个数据的维度，最简单的情况就是是 P 和 Q 维向量，而此时如果把 batch_size 记作 B，`for x,y in trainloader` 中的 x 和 y 是维度分别为 (B,P) 和 (B,Q) 的矩阵。`train()` 函数里面的计算要考虑到多出的这一个维度。

## 参考链接：

- [https://pytorch.org/tutorials/beginner/basics/data_tutorial.html](https://pytorch.org/tutorials/beginner/basics/data_tutorial.html)
- [https://pytorch.org/tutorials/beginner/nn_tutorial.html](https://pytorch.org/tutorials/beginner/nn_tutorial.html)
- [https://pytorch.org/tutorials/beginner/ptcheat.html](https://pytorch.org/tutorials/beginner/ptcheat.html)
- [https://pytorch.org/docs/stable/data.html?highlight=dataset#torch.utils.data.Dataset](https://pytorch.org/docs/stable/data.html?highlight=dataset#torch.utils.data.Dataset)
- [https://pytorch.org/docs/stable/data.html?highlight=dataloader#torch.utils.data.DataLoader](https://pytorch.org/docs/stable/data.html?highlight=dataloader#torch.utils.data.DataLoader)
- [https://pytorch.org/docs/stable/data.html?highlight=dataloader#torch.utils.data.Sampler](https://pytorch.org/docs/stable/data.html?highlight=dataloader#torch.utils.data.Sampler)
- [https://pytorch.org/docs/stable/_modules/torch/utils/data/dataset.html#Dataset](https://pytorch.org/docs/stable/_modules/torch/utils/data/dataset.html#Dataset)
