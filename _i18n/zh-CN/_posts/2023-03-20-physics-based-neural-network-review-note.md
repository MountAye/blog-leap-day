---
layout: post
title: .tex | 基于物理的神经网络 (PINN) 综述笔记
keywords: [tex,phy,md,ai]
excerpt: "本文是《Scientific Machine Learning Through Physics–Informed Neural Networks: Where we are and What’s Next》这篇综述的读书笔记。"
---

> 本文是《[Scientific Machine Learning Through Physics–Informed Neural Networks: Where we are and What’s Next](https://link.springer.com/article/10.1007/s10915-022-01939-z)》这篇综述的读书笔记。
> 

年前，今年新入职的天文学方面的一位老师给我们群发邮件，宣传某国家实验室超算的 GPU 编程马拉松活动，他可以担任指导老师。于是毫不意外地，我报了名。该编程马拉松项目还需要专门申请，申请材料里要写清楚打算干什么，于是报名的五六个人七嘴八舌地想创意。基于物理的神经网络 PINN 就是天文老师的点子。

~~写到这里，我才意识到，老哥是不是想拿我们当免费劳动力啊~~~

神经网络可以看作是一个复杂的非线性函数，接受一个（一般来说维度很高的）向量作为输入，一番计算后输出另一个向量。训练神经网络，就是找到这个函数的参数，绝大多数找参数的方法涉及计算网络输出对参数的偏导数，因此神经网络计算框架的核心功能就是自动微分 (auto-differentiation)。

而很多物理问题，都可以用（偏）微分方程来描述，微分方程的解不是变量，而是函数，而且往往是复杂的非线性函数。所以基于物理的神经网络 (PINN) 就是以神经网络来表达这个函数，然后把这个函数带入到物理的微分方程中，把神经网络输出和真正的物理解之间的差距当作损失函数，反向传播回去来优化神经网络的参数。代入方程时的微分计算，正好可以利用现成框架的自动微分功能。

在以 GPT 为代表的 transformer 类神经网络模型出现之前，自然语言处理类的机器学习项目，往往要在网络之外，利用人类的语法知识，对语段进行语义分割等等“中间任务”。Transformer 一出，算力出奇迹，中间任务逐渐变得没有必要了。

在 GPT 崭露头角，并且越来越有迹象表明其将会涌现出通用人工智能的今天，这些基于物理的神经网络，会不会还未成熟就已过时？这种心情，就和《三体》第二卷开始，章北海和吴岳面对焊渍未漆的“唐”号航空母舰时差不多吧……

<hr class="slender">

- Abstract
    - PINNs are neural networks that encode model equations. a NN must fit observed data while reducing a PDE residual.

1. Introduction
    - The “curse of dimensionality” was first described by Bellman in the context of optimal control problems. (Bellman R.: Dynamic Programming. Sci. 153(3731), 34-37 (1966))
    - Early work: MLP ([multilayer perceptron](https://en.wikipedia.org/wiki/Multilayer_perceptron)) with few hidden layers to solve PDEs. ([https://doi.org/10.1109/72.712178](https://doi.org/10.1109/72.712178))
    - 感觉可能更全面的一篇综述：[https://doi.org/10.1007/s12206-021-0342-5](https://doi.org/10.1007/s12206-021-0342-5)。该文关注 what deep NN is used, how physical knowledge is represented, how physical information is integrated，本文只关于 PINN, a 2017 framework。

    1. What the PINNs are
        - PINNs solve problems involving PDEs:
            - approximates PDE solutions by training a NN to minimize a loss function
            - includes terms reflecting the initial and boundary conditions
            - and PDE residual at selected points in the domain (called **collocation points**)
            - given an input point in the integration domain, returns an estimated solution at that point.
            - incorporates a [residual network](https://en.wikipedia.org/wiki/Residual_neural_network) that encodes the governing physical equations
            - can be thought of as an **unsupervised strategy** when they are trained solely with physical equations in forward problems, but **supervised learning** when some properties are derived from data
        - Advantages:
            - [mesh-free](https://en.wikipedia.org/wiki/Meshfree_methods)? 但是我们给模型喂训练数据的时候往往已经暗含了 mesh 了吧
            - on-demand computation after training
            - forward and inverse problem using the same optimization, with minimal modification
    2. What this Review is About
        - 提到了一个做综述找文章的方法：本文涉及的文章可以在 Scopus 上进行高级搜索：`((physic* OR physical)) W/2 (informed OR constrained) W/2 “neural network”)`
2. The Building Blocks of a PINN
    - question:
    
    $$
    F(u(z);\gamma)=f(z),\quad z\ \in\ \Omega \\ B(u(z))=g(z), \quad z\ \in\ \partial \Omega
    $$
    
    - solution:
    
    $$
    \hat u_{\theta}(z)\approx u(z)\\ \theta^* = \arg\min_{\theta}\left(\omega_F L_F(\theta)+\omega_BL_B(\theta)+\omega_{data}L_{data}(\theta)\right)
    $$
    
    1. Neural Network Architecture
        - DNN (deep neural network) is an artificial neural network that is deeper than 2 layers.
        
        1. Feed-Forward Neural Network: 
            - $$u_{\theta}(x) = C_{K} \circ C_{k-1} ...\alpha \circ C_1(x),\quad C_k(x) = W_k x_k + b_k$$
            - Just change CNN from convolution to fully connected.
            - Also known as multi-layer perceptrons (MLP)
            
            1. FFNN architectures 
                - Tartakovsky et al used 3 hidden layers, 50 units per layer,  and a hyperbolic tangent activation function. Other people use different numbers but of the same order of magnitude.
                - A comparison paper: *Blechschmidt, J., Ernst, O.G.: Three ways to solve partial differential equations with neural networks –A review. GAMM-Mitteilungen 44(2), e202100,006 (2021).*
            2. multiple FFNN: 2 phase [Stephan problem](https://en.wikipedia.org/wiki/Stefan_problem).
            3. shallow networks: for training costs
            4. activation function: the swish function in the paper has a learnable parameter, so — [how to add a learnable parameter in PyTorch](https://discuss.pytorch.org/t/how-could-i-create-a-module-with-learnable-parameters/28115)
        2. Convolutional Neural Networks: 
            - I am most familiar with this one.
            - $$f_i(x_i;W_i)=\Phi_i(\alpha_i(C_i(W_i,x_i)))$$
            - performs well with multidimensional data such as images and speeches
            
            1. CNN architectures: 
                - `PhyGeoNet`: a physics-informed geometry-adaptive convolutional neural network. It uses a coordinate transformation to convert solution fields from irregular physical domains to rectangular reference domains.
                - According to Fang ([https://doi.org/10.1109/TNNLS.2021.3070878](https://doi.org/10.1109/TNNLS.2021.3070878)), a Laplacian operator can be discretized using the finite volume approach, and the procedures are equivalent to convolution. Padding data can serve as boundary conditions.
            2. convolutional encoder-decoder network
        3. Recurrent Neural Network
            - $$f_i(h_{i-1})=\alpha\left(W\cdot h_{i-1}+U\cdot x_i+b\right)$$, where f is the layer-wise function, x is the input, h is the hidden vector state, W is a hidden-to-hidden weight matrix, U is an input-to-hidden matrix and b is a bias vector. 我认为等号左边的 $$h_{i-1}$$ 应当作为下标
            - 感觉有点像 hidden Markov model，只不过 Markov 中间的 hidden layers 好像与序号无关（记不清了），~~RNN 看起来各个 W 和 H 似乎不同~~。**RNN cell is actually the exact same one and reused throughout.** (from [https://blog.floydhub.com/a-beginners-guide-on-recurrent-neural-networks-with-pytorch/](https://blog.floydhub.com/a-beginners-guide-on-recurrent-neural-networks-with-pytorch/)). Cartoon from Wikipedia:
                
                ![Untitled]({{ site.baseurl }}/assets/photos/2023-03-20-rnn-unit.png)
                
            - From [https://blog.floydhub.com/a-beginners-guide-on-recurrent-neural-networks-with-pytorch/](https://blog.floydhub.com/a-beginners-guide-on-recurrent-neural-networks-with-pytorch/):
                
                ![Untitled]({{ site.baseurl }}/assets/photos/2023-03-20-rnn-types.png)
                
            1. RNN architectures
                - can be used to perform numerical Euler integration
                - 基本上输出的第 i 项只与输入的第 i 和 i-1 项相关。
            2. LSTM architectures
                - 比 RNN 多更多中间隐变量，至于怎么做到整合长期记忆的，技术细节现在可以先略过
        4. other architectures for PINN
            1. Bayesian neural network: weights are distributions rather than deterministic values, and these distributions are learned using Bayesian inference. 只介绍了[一篇文章](https://doi.org/10.1016/j.jcp.2020.109913)
            2. GAN architectures: 
                - two neural networks compete in a zero-sum game to deceive each other
                - physics-informed GAN uses automatic differentiation to embed the governing physical laws in stochastic differential equations. The discriminator in PI–GAN is represented by a basic FFNN, while the generators are a combination of FFNNs and a NN induced by the SDE
            3. multiple PINNs
    2. Injection of Physical Laws
        - 既然是要解常/偏微分方程，那么微分计算必不可少。四种方法：hand-coded, symbolic, numerical, auto-differentiation，最后一种显著胜出。所谓 auto-differentiation, 就是利用现成框架，框架自动给出原函数的导数的算法。
        - Differential equation residual:
            - $$r_F[\hat u_\theta](z)=r_\theta(z):=F(\hat u_\theta(z);\gamma)-f$$
            - $$r_F[\hat u_\theta](z)=r_\theta(x,t)=\frac{\partial}{\partial t}\hat u_\theta(x,t)+F_x(\hat u_\theta(x,t))$$: 原文给出了来源，但是从字面上看不出来与前式的等价性
        - Boundary condition residual: $$r_B[\hat u_\theta](z):=B(\hat u_\theta(z))-g(z)$$
    3. Model Estimation by Learning Approaches
        1. Observations about the Loss
            - $$\omega_F$$ accounts for the fidelity of the PDE model. Setting it to 0 trains the network without knowledge of underlying physics.
            - In general, the number of $$\theta$$ is more than the measurements, so regularization is needed.
            - The number and position of residual points matter a lot.
        2. Soft and Hard Constraints
            - Soft: penalty terms. Bad:
                - satisfying BC is not guaranteed
                - assignment of the weight of BC affects learning efficiency, no theory for this.
            - Hard: encoded into the network design. [Zhu et. al](https://doi.org/10.1007/s00466-020-01952-9)
        3. Optimization methods
            - minibatch sampling using the Adam algorithm
            - increased sample size with L-BFGS (limited-memory Broyden-Fletcher-Goldfarb-Shanno)
    4. Learning theory of PINN: roughly in DE, consistency + stability → convergence
        1. convergence aspects: related to the number of parameters in NN
        2. statistical learning error analysis: use *risk* to define *error*
            - Empirical risk: $$\hat R[u_\theta]:=\frac{1}{N}\sum_{i=1}^N \left\|\hat u_{\theta}(z_i)-h_i\right\|^2$$
            - Risk of using approximator: $$R[\hat u_{\theta}]:=\int_{\bar \Omega}(\hat u_{\theta}(z)-u(z))^2dz$$
            - Optimization error: the difference between the local and global minimum, is still an open question for PINN. $$E_O:=\hat R[\hat u_{\theta}^*]-\inf_{\theta \in \Theta}\hat R[u_\theta]$$
            - Generalization error: error when applied to unseen data. $$E_G:=\sup_{\theta \in \Theta}\left\|R[u_\theta]-\hat R[u_\theta]\right\|$$
            - Approximation error: $$E_A:=\inf_{\theta \in \Theta}R[u_\theta]$$
            - Global error between trained deep NN $$u^*_\theta$$ and the correct solution is bounded: $$R[u^*_\theta]\le E_O+2E_G+E_A$$
            - 有点乱，本来说 error 是误差，结果最后还是用 risk 作为误差
        3. error analysis results for PINN
3. Differential Problems Dealt with PINNs：读来感觉这一部分意义不大，将来遇到需要解决的问题时，回来看看之前有没有人做过就行了——另一方面看，一类方程就需要一类特殊构造的神经网络来解，那么说明神经网络解方程的通用性并不好~
    1. Ordinary differential equations: 
        - Neural ODE as learners, a continuous representation of **ResNet**. [[Lai et al](https://doi.org/10.1016/j.jsv.2021.116196)], into 2 parts: a physics-informed term and an unknown discrepancy
        - LSTM [[Zhang et al](https://doi.org/10.1016/j.cma.2020.113226)]
        - [Directed graph models](https://doi.org/10.1016/j.compstruc.2020.106458) to implement ODE, and Euler RNN for numerical integration
        - Symplectic Taylor neural networks in [Tong et al](https://doi.org/10.1016/j.jcp.2021.110325) use symplectic integrators
    2. Partial differential equations: steady/unsteady的区别就是是否含时
        1. steady-state PDEs
        2. unsteady PDEs
            1. Advection-diffusion-reaction problems
                1. diffusion problems
                2. advection problems
            2. Flow problems
                1. Navier-Stokes equations
                2. hyperbolic equations
            3. quantum problems
    3. Other problems
        1. Differential equations of fractional order
            - automatic differentiation not applicable to fractional order → [L1 scheme](https://doi.org/10.1515/fca-2019-0086)
            - [numerical discretization for fractional operators](https://doi.org/10.1137/18M1229845)
            - [separate network to represent each fractional order](https://doi.org/10.1038/s43588-021-00158-0)
        2. Uncertainty Estimation: [Bayesian](https://doi.org/10.1016/j.jcp.2020.109913)
    4.  Solving a Differential Problem with PINN
        - 1d non-linear Schrödinger equation
        - dataset by simulation with MATLAB-based Chebfun open-source(?) software
4. PINNs: Data, Applications, and Software
    1. Data
    2. Applications
        1. Hemodynamics
        2. Flows Problems
        3. Optics and Electromagnetic Applications
        4. Molecular Dynamics and Materials-Related Applications
        5. Geoscience and Elastiostatic Problems
        6. Industrial Application
    3. Software
        1. `DeepXDE`: initial library by one of the vanilla PINN authors
        2. `NeuroDiffEq`: PyTorch based used at Harvard IACS
        3. `Modulus`: previously known as Nvidia SimNet
        4. `SciANN`: implementation of PINN as Keras wrapper
        5. `PyDENs`: heat and wave equations
        6. `NeuralPDE.jl`: part of SciML
        7. `ADCME`: extending TensorFlow
        8. `Nangs`: stopped updates, but faster than PyDENs
        9. `TensorDiffEq`: TensorFlow for multi-worker distributed computing
        10. `IDRLnet`: a python toolbox inspired by Nvidia SimNet
        11. `Elvet`: coupled ODEs or PDEs, and variational problems about the minimization of a functional
        12. Other Packages
5. PINN Future Challenges and Directions
    1. Overcoming Theoretical Difficulties in PINN
    2. Improving Implementation Aspects in PINN
    3. PINN in the SciML Framework
    4. PINN in the AI Framework
6. Conclusion
