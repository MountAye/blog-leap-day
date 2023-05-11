---
layout: post
title: .py | 深度学习暑期学校知识点
keywords: [md,py,ai]
excerpt: 机器学习在图像处理当中的应用，知识结构树
---

- 电脑设置、python 入门
    - NoMachine, ssh, python, conda, jupyter
    - 文件夹操作 `pathlib`, 图片操作 `skimage`
    - 数据增强 (data augmentation): `imgaug`
    - TensorBoard
- 机器学习简介
    - Linear Classifier
    - `sklearn**.**model_selection**.**train_test_split()`
    - Stochastic gradient descent
    - TensorFlow:
        - `tensorflow_addons as tfa`
        - `tfa.image.rotate()`, `tf.image.random_flip_left_right()`
        - **`from** tensorflow.keras **import** Model`, **`from** tensorflow.keras.models **import** Sequential`, **`from** tensorflow.keras.layers **import** Input, Flatten, Dense, Activation, BatchNormalization, Conv2D, MaxPool2D, Softmax`
        - `tf**.**keras**.**losses**.**CategoricalCrossentropy()`, `tf**.**keras**.**optimizers**.**Adam(lr**=**1e-3, clipnorm**=**0.001)`
        - `linear_classifier **=**``Model(...)`, `linear_classifier.compile()`, `linear_classifier.fit()`, `linear_classifier.predict()`
- 深度学习简介
    - Perceptron
    - Perceptron-based XOR gate
    - **decision boundary** of your model: `np.meshgrid`
- 图像恢复 (image restoration)
    - CARE network
    - Noise2Nosie, Noise2Void
- 图像翻译 (image translation)
    - micro-DL: a tool to generate and train U-net from config files.
- 图像语义分割 (image semantic segmentation): 比较详细，前两节有点水了。
    - **`from** PIL **import** Image`, **`import** imageio`, **`from** torchvision **import** transforms`
    - **`from** torch.utils.data **import** Dataset, DataLoader`, **`import** torch.nn **as** nn`, **`from** torch.nn **import** functional **as** F`,  **`from** torch.utils.tensorboard **import** SummaryWriter`,
    - U-net on PyTorch
- 图像实例分割 (instance segmentation)
    1. Foreground segmentation: 
        - **Receptive Field of View**: The term is borrowed from biology where it describes the "portion of sensory space that can elicit neuronal responses when stimulated" (wikipedia). Each output pixel can look at/depends on an input patch with that diameter centered at its position. Based on this patch, the network has to be able to make a decision about the prediction for the respective pixel.
        - **Early Stopping** to avoid overfitting: define an `EarlyStopping` class
    2. Instance Segmentation:
        - Ideas:
            - Three-class model (foreground, background, boundary),
            - Distance transform (label for each pixel is the distance to the closest boundary),
            - Edge affinity (consider not just the pixel but also its direct neighbors, predicts the probability that there is an edge, this is called affinity.) 听的时候懂了，回来看的时候没太看懂
            - Metric learning (learns to predict an embedding vector for each pixel.)
    3. **Tile and Stitch：**
        - 当需要处理的图片过大时，将图片切分成多个小图，分别预测之后拼接在一起。
        - 文中说图片尺寸不是 某个参数的整数倍的时候拼贴结果会不连续，但是代码注释中说等于这个整数倍的时候会不连续，晕。
        - [https://arxiv.org/pdf/2101.05846.pdf](https://arxiv.org/pdf/2101.05846.pdf)
    4. 一个实例，epithelia cells
- 失败模式：极其之水，就是科普了一下训练参数错误的后果，以及一点对抗学习的内容
- 追踪：比较水，因为机器学习追踪的运算量极大，且主讲人感觉就是来做广告的，所以就直接用 CoLab 体验了一下就完事了。（就这还加州理工呢~）
- 知识提取：
    - 前面的基本上是从像素到像素的映射，这里的知识提取是从图片到标签的映射。
    - CycleGAN
    - **Create a balanced Dataloader**
    