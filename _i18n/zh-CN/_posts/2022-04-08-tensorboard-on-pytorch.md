---
layout: post
title: .py | TensorBoard 笔记（PyTorch 版）
keywords: [md,py,ai]
excerpt: TensorBoard 是 TensorFlow 团队开发的一款可视化工具，方便观察和调整机器学习的数据集、模型、超参数和训练结果等等。但是不知道为什么，PyTorch 调用 TensorBoard，要比 TensorFlow 方便简单得多，<del>这何尝不是一种 NTR</del>……
---

- 官网教程：[https://pytorch.org/tutorials/intermediate/tensorboard_tutorial.html](https://pytorch.org/tutorials/intermediate/tensorboard_tutorial.html)
- 官方文档：[https://pytorch.org/docs/stable/tensorboard.html](https://pytorch.org/docs/stable/tensorboard.html)

TensorBoard 是 TensorFlow 团队开发的一款可视化工具，方便观察和调整机器学习的数据集、模型、超参数和训练结果等等。但是不知道为什么，PyTorch 调用 TensorBoard，要比 TensorFlow 方便简单得多，~~这何尝不是一种 NTR~~……

---

## 用法和效果

一个使用了 TensorBoard 的 torch 项目的主文件一般是这样的（把和 TensorBoard 无关的部分都注释掉了）：

```python
# imports
# import matplotlib.pyplot as plt
# import numpy as np

# import torch
# import torchvision
# import torchvision.transforms as transforms

# import torch.nn as nn
# import torch.nn.functional as F
# import torch.optim as optim

from torch.utils.tensorboard import SummaryWriter

# # transforms
# transform = transforms.Compose(
#     [transforms.ToTensor(),
#     transforms.Normalize((0.5,), (0.5,))])

# # datasets
# trainset = torchvision.datasets.FashionMNIST('./data',
#     download=True,
#     train=True,
#     transform=transform)
# testset = torchvision.datasets.FashionMNIST('./data',
#     download=True,
#     train=False,
#     transform=transform)

# # dataloaders
# trainloader = torch.utils.data.DataLoader(trainset, batch_size=4,
#                                         shuffle=True, num_workers=2)
# testloader = torch.utils.data.DataLoader(testset, batch_size=4,
#                                         shuffle=False, num_workers=2)

# # constant for classes
# classes = ('T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
#         'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle Boot')

# class Net(nn.Module):
#     def __init__(self):
#         super(Net, self).__init__()
#         self.conv1 = nn.Conv2d(1, 6, 5)
#         self.pool = nn.MaxPool2d(2, 2)
#         self.conv2 = nn.Conv2d(6, 16, 5)
#         self.fc1 = nn.Linear(16 * 4 * 4, 120)
#         self.fc2 = nn.Linear(120, 84)
#         self.fc3 = nn.Linear(84, 10)
#     def forward(self, x):
#         x = self.pool(F.relu(self.conv1(x)))
#         x = self.pool(F.relu(self.conv2(x)))
#         x = x.view(-1, 16 * 4 * 4)
#         x = F.relu(self.fc1(x))
#         x = F.relu(self.fc2(x))
#         x = self.fc3(x)
#         return x
# net = Net()

# criterion = nn.CrossEntropyLoss()
# optimizer = optim.SGD(net.parameters(), lr=0.001, momentum=0.9)

# default `log_dir` is "runs" - we'll be more specific here
writer = SummaryWriter('runs/fashion_mnist_experiment_1')

running_loss = 0.0
for epoch in range(1):  # loop over the dataset multiple times
    for i, data in enumerate(trainloader, 0):
        # # get the inputs; data is a list of [inputs, labels]
        # inputs, labels = data

        # # zero the parameter gradients
        # optimizer.zero_grad()

        # # forward + backward + optimize
        # outputs = net(inputs)
        # loss = criterion(outputs, labels)
        # loss.backward()
        # optimizer.step()

        # running_loss += loss.item()
        if i % 1000 == 999:    # every 1000 mini-batches...
            # ...log the running loss
            writer.add_scalar('training loss',
                            running_loss / 1000,
                            epoch * len(trainloader) + i) # 注意这一行！
# print('Finished Training')
```

正常情况下，使用了tensorboard 的项目在训练的过程中，可以用网页浏览器打开网址 `localhost:6006`，应该可以看到和下图类似但不同的画面：

![tensorboard]({{site.baseurl}}/assets/photos/2022-04-08-tensorboard.png)

下面来仔细分解。

## 代码分解

[引入]({% post_url 2021-12-11-python-import-script-module-package %}) TensorBoard 需要下面一行代码：

```python
from torch.utils.tensorboard import SummaryWriter
```

从名字就能看出来，`SummaryWriter` 是一个 class。粗略用了一下文档页面的业内搜索，好像整个 `torch.utils.tensorboard` 就只有这一个 class。

新建一个这个类的实例：

```python
writer = SummaryWriter('runs/fashion_mnist_experiment_1')
```

这一步会在当前工作环境下新建一个 `/runs` 文件夹，

要想显示导航栏上的“SCALARS”、“IMAGES”等等选项卡，并且让自己想观察的数据显示在各自类别的选项卡里，需要调用 `SummaryWriter` 下面的各种方法，比如 `add_scalar()`, `add_image()`.

### 各种方法

用法和效果举例如下：

- `add_scalar()`: 在一张图中画出**一个标量**指标随学习迭代的**变化曲线**。
    - `tag`: 图片的标题。
    - `scalar_value`: 指标的值，也就是纵坐标。
    - `global_step`: 全局迭代次数，也就是横坐标。
- `add_scalars()`: 在一张图中同时画出**多个指标**随学习迭代的**变化曲线**。
    - `main_tag`: 图片的标题
    - `tag_scalar_dict`: 一个字典，字典的键是变量的名字，值是各个变量的纵坐标。
    - `global_step`: 全局迭代次数，也就是横坐标。
- `add_custome_scalars()`: 没有用过，也没见到例子，不太明白。根据描述像是把之前 `add_scalar()` 和 `add_scalars()` 的结果重新组合，对 SCALARS 选项卡重新排版。每个 `SummaryWriter` 只能运行一次，可以在训练开始前运行，也可以在之后。
    - `layout`: 只有一个这参数，是一个字典，字典的键像是新图片/章节的名字，值是下一级字典或者是 `add_scalar()` 出现过/将要出现的 `tag` 参数。
- `add_figure()`: 显示 `matplotlib` 画出的**图表**。
    - `tag`: 标题
    - `figure`: 图表，要求类型为 `matplotlib.pyplot.figure`
    - `global_step`:迭代次数，效果如何 没试过。
- `add_histogram()`: 在一张图中画出一个样本的**直方图**，以及这个直方图随迭代变化的规律。这是个三维图片，x 轴是直方图的取值范围，y 轴是迭代次数，z 轴是直方图的频率值。
    - `tag`: 图片标题。
    - `values`: 一个 `torch.Tensor` 或者 `numpy.array` ，用于绘制直方图的样本.
    - `global_step`: 迭代次数，y 轴分量。
    - `bins`: 取样间隔参数，`numpy.histogram()` 中用到的。 ****
- `add_graph()`: 一般用于在训练前画出神经网络的**图状结构**。
    - `model`: 要画的模型，类型是 `torch.nn.Module`
    - `input_to_model=None`: （可选）输入模型的变量。
- `add_mesh()`: **三维点云**。
    - `tag`: 表格标题。
    - `vertices`: 顶点三维坐标的列表。
    - `colors`: 顶点的颜色。
    - `faces`: （可选）没看懂 (Indices of vertices within each triangle.)
    - `config_dict`: 用于画图的 ThreeJS 的参数。
    - `global_step`: 迭代次数。
- `add_embeddding()`: 神经网络的输入一般是高维向量，此工具将高维数据**投影到三维**空间，然后画出图像，方便我们感知训练集内样本之间的关系。
    - `mat`: 一个矩阵，每一行都是一个要处理的向量。
    - `metadata`: 标记文字，一般是列表。
    - `label_img`: 标记图片，显示在每个数据点旁边的
    - `global_step`: 迭代次数，一般没人用。
    - `tag`: 图片标题。
- `add_pr_curve()`: 准确率 (precision) -召回率 (call back) 曲线。准确率=真阳性/(真阳性+假阳性)，召回率=真阳性/(真阳性+假阴性)
    - `tag`: 图片标题。
    - `labels`: Ground truth 数据，每个数据点对应一个布尔值。
    - `predictions`: 模型的输出，每个数据点对应一个 [0,1] 之间的实数。
    - `global_step`: 迭代次数。
    - `num_thresholds`:用于画出 PR 曲线的阈值的数目。
- `add_hparams()`: 比较不同次运行之间的超参数。没太看懂。
    - `hparam_dict`: 超参数的名称和取值
    - `metric_dict`: metric （不知道怎么翻译）的名称和取值
    - `hparam_domain_discrete`: （可选）字典，超参数的名称和有限个可能的取值。
    - `run_name`: 运行的名称，将会成为 `logdir` 的一部分。
- `add_image()`: 在 IMAGES 选项卡中显示**一张图片**。
    - `tag`: 图片名称。
    - `img_tensor`: 一个 `torch.Tensor` 或者 `numpy.array`，被显示的图片。对应于下面的 `dataformats` 参数。
    - `global_step`: 迭代次数，没见有人在显示图片的时候用过。
    - `dataformats=’CHW’`: 图片各维度的顺序。默认是“颜色-高度-宽度”。
- `add_images()`: 并列显示**多张图片**。
    - `tag`: 图片组的标题。
    - `img_tensor`: 一个 `torch.Tensor` 或者 `numpy.array`，被显示的图片。图片个维度的含义由 `datadormats` 给出。
    - `global_step`: 迭代次数，没见有人在显示图片的时候用过。
    - `datadormats=’NCHW’`: 图片各维度的顺序。默认为“图片序号-颜色-高度-宽度”。
- `add_video()`: 略
- `add_audio()`: 略
- `add_text()`: 略