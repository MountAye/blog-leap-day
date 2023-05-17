---
layout: post
title: .tex | Notes during APS March Meeting 2022 in Chicago
keywords: [tex,phy]
excerpt: Notes during the March Meeting in 2022 Chicago
---

## Physical of Artificial System

some physical learning that does not have to be in equilibrium

## Cell fate

### Xinhua Xing’s talk

intro to differential geometry: Kamien, Rev Mod Phys 74:953 (2002)

WeiKang Wang, in silico vector field analysis

Waddington landscape 1957

Joanathan Weissman Lab (WI, MIT) 

### Maria’s Talk

Boston U, Pankaj Mahta Group.

extension  of work from Lang et al PLoS comput bio (2014)

found an order parameter, better than UMAP 

### Shubham Tripathi’s talk

miimally frustrated topology

### Glassy fluctuation ...

proten and mRNA noise levels are Boltzmann distributed.

spin glass: frustration

free energy 

gene expression noise can store information

### Kraemer

cell types in multicellular organisms

master regulator as order parameter

**Hopfield model**

forward and backward conditional probabilities

### Logan Carpenter

tissue homeostasis: birth and death

cellular Potts model

there is Hamiltonian!

CompuCell3D software

cell size distribution plot is very good

### Lo’s talk

UWashington

collision during cell cycle, replication and transcription

F-mean

### Lambert.io

bacterial persistence

CRISPER-dCas12a interference

massive parallel assay


### Arkansas U talk

Reversibiliy and cell division dynamics of elongated Escherichia coli cells obtained at high pressure

a new cell division model

GCDM

continuous time Markov chain model?

### Vivek

microbial colonizing and phenotypes

Danio rerio

virio Z20

### Louis Cortes

IPTG indeces lac operon

$f(t)=1-e^{-\frac{ln(2)}{t_{1/2}}(t-t_0)}$

### Jintao Li

cell competition

homeostasis pressure

## Author & Reference Session

### criteria

- significantly advance physics
- scientifically
- letter
    - advance in field
    - open a new
    - solve a problem
    - be of great interest

### for authors

- identify audience
- take-home message
- adequate literature
- authorship & acknowledgment
- additional info
    - suggested reviewer
    - conflicts of interest
    - related paper
    - PRL/X: justification for suitability exclusively to

## referee

- novel, interesting, original
- valid and reproducible
- well presented
- report
    - summary
    - technical details
    - decision explained
- report requirements
    - substantiated
    - a reasonable level of details
    - no personal/self-serving remarks
    - timeliness

### joint submissions

### updated PhySH

## K42: Network Theory and Applications to Complex Systems

### Complex Contagion: Unfolding and Control

Adilson E. Motter, Northwest University

contagion

whack-a-mole effect

### Physics of financial networks

mono-layer networks: a network of ownership, a network of credit contracts between financial institutes

multi-layer  networks: 

## Non-equilibrium I

### success landscape

### speed fluctuation of bacterial replisomes

### circadian clocks in natural environments

$\dot r = \alpha r(1-\frac{r^2}{R^2})$

$\dot \theta = \omega$

“decoder”

Leypunskiy 2017, Pittayakanchit 2018 

## Physics of social interactions I

### collective sensing in slime mold

slime molds sense concentrations of fructose in environments

hypotheses:

- evenly distributed across the network. density be the only parameter
- at the growing tips

### [Competition for fluctuating resources reproduces statistics of species abundance over time across wide-ranging microbiotas](https://march.aps.org/sessions/M03/2)

consumer-resource model: species abundance is solely dependent on resource functuations

Taylor’s law: distribution of abundance change is fit by a power law.

“their model” coarse grained consumer-resource. can predict many kinds of , different resource competition regimes.

### Dog Congnition

Alexandra Horowitz. 

Social play

## Predicting Nonlinear and Complex Systems with Machine Learning I

### Building Deep Learning Architectures for Physics, Chemistry, and Biology with Geometric Algebra

finished soon after I arrived

vector institute

### Quantum thermal machine with ML

BraXXXX, VQE

Finite time thermodynamics: compete between efficiency and power

energy change between two harmonic oscillators

differential programming, RL-like scheme

missed the flawed thermodynamic definition

### Clarkson University: reservoir computing

reservoir computer: a kind of neural network, for forecasting dynamical systems but most of the parameters are chosen randomly. cheap but works well.

ESN Jaeger 2001

classic representation theorem by WOLD theorem

works because time soaks randomness. equivalent to logical NVAR (non-linear vector autoregression)

enjoys universal approximation theorem, even linear with non-linear readout. 

VAR: vector autoregression

VMA: vector moving average

DMD

macket-glass equation as its example

### Kim’s recurrent neural programming language

also reservoir computer. 

silicon computers represent with binary and compute sequentially.

neural computers use continuous symbols and compute distributedly

dRAM: dynamical random access memory

store a reservoir into another reservoir

another hot topic is Koopman's theory

### Learn complex fluids with rheo

RhINNs (PhysicsINNs): inform the NN with underlying physics/rheology

his model is called RhIGNet, and an improved “multi-fidelity RHIGNets”

### Data-driven selection of rheology-informed NN

same group as previous one.

model works better as it goes more complex, while data wants model to be simpler.

we should prioritize data range over size

### ML for Robot Locomotion in Flowable Materials

robot cars (RRP) climbing sand slopes

### Predicting Clogging

hopper flow

### Analogical Reasoning to build Transferable Models

model manifold: for a given data sampling method, points in parameter space can be mapped to a sampling space

manifold boundary approximation method

supremum principle

Wnt signalling network

### [Evidence for Griffiths Phase Criticality in Residual Neural Networks](https://march.aps.org/sessions/M09/12)

residual networks’ has Griffith phase, due to the design (sth.  and renormalization)

## N08: Systems Far from Equilibrium

### Hopping Particles

math heavy

Doi representation, Jarzynski relation, Doi-Peliti field theory

generalized fluctuation-dissipition into non-equilibrium

no coarse graining or slow modes

### [A topological fluctuation theorem](https://march.aps.org/sessions/N08/2)

$\Delta S_M = \frac{Q}{k_B T}n = \gamma n$

also math heavy

detailed TFT: symmetry of particle in vortex field is protected by topology

### TUR in Langevan processes

TUR: thermodynamic uncertainty relation

$\frac{var(j)}j{}\ge \frac{2}{<\Sigma>}$

probability distribution → rate function. don’t know how

“caveat” seems an abused word, another is “ansatz”

### reversal symmetry for cyclic paths from Notre Dame

detailed balance implies a reversal symmetry

expressed as Markov process: $\frac{p_i}{p_j} = \frac{l(i,j)}{l(j,i)}$

his work is just cycles in non-equilibrium systems

fluctuation theorem for **cycle counts**. PRE 2021

### emergence and breaking of duality symmetry in generalized thermodynamic relations from UNC chapel hill

foundation of thermodynamics, statistical mechanics, can be further founded upon classical or quantum mechanics

three times of Legendre transforms of internal energy ought to give 0, which breaks the reversibility of Legendre transform.

T. Hill 1963: added some sub linear term

they used mean of finite measurements

their understanding of thermodynamics is “nothing more than theories of probability”

### Scaling of entropy under coarse graining

entropy production rate

in 1 dimension Derrida)

dimension matters and data reduction may have non-trivial effects.

### Kibble-Zurek effect, quench

phase transitions

### Discrete Non-Linear Schroedinger Equation by Federico

phase transition again

### anormalous thermal relaxation in unimolecular chemical reactions

Mpemba effect: hotter water freeze faster than cold water

### [Perturbation spreading in a non-reciprocal classical isotropic magnet](https://march.aps.org/sessions/N08/10)

totally absent-minded

### Stefan-Maxwell diffusivities of gas mixtures and liqiud electrolytes from Oxford

electrolytes, concentrated solution theory: Gibbs-Duhem relations

very math heavy, and words too small on slides. presentation visualization not so good.

extended DFN model

Onager’s regression

## Q04: Non-equilibrium Thermodynamics: From Chemical Reaction Networks to Natural Selection II

### Free energy transduction, chemical reaction network

non-linear reaction: at least second order reaction

reactions → emergent cycles

### Scaling relations of energy dissipation rate in non-quilibrium reaction systems

state space renormalization group

### algebra on biological structures, Caltech and Cold Spring Harbor

second quantization, field operators in multiparticle Fock space

classic particles in quantum language

the operation is the Wick contraction

### decomposing, local arrow of time, interacting systems

$\dot I = D_{KL}[P(x\rightarrow x')||P(x'\rightarrow x)]$

“entropy production” again: Prigogine 1947, Shcnakenberg 1976, Skinner Dunkel 2021

observe k elements in the system: interaction irreversibility $\dot I^{(k)}_{int}=\dot I^{(k)} - \dot I^{(k-1)}$

### information transmission by heterogeneous cell populations

noise can ruin cellular info sensing

individual cell senses better than population(?) **conditional mutual information** reflects this  

### functional universality, microbial, thermodynamic constraints

energy-limited vs. nutrient limited

### trade off:

law of energy in biology; model organism being anaerobes B. theta

PPi (pyrophorsphate) as energy source

### 3D diffusion in E.coli

## Physics of social interactions II

firefly, one research about vocabulary, one about spatiotemporal pattern

bunblebees, SLEAP to identity action and track

ant, fire ant, BOBbots, multi-occupancy lattice gas, rule based model→observed result

social polarization: vector force, but how agents are embedded into this space? no answer

HKB system, third party induced bistability, symmetry breaking “HOW”!

**Team formation**: [Modeling the Catalysis of Collaboration at In-Person and Virtual Conferences](https://march.aps.org/sessions/S03/9): Non-linear memory model, scialog dataset

mirror game: no designated leader experts reach higher accuracy and velocities

Granger causality analysis: not so advertised. experiment with flow switch. Presentation not so well given. 

Bacteria reshape their surroundings to enable migration: use bioprinting. different pore size in media. non-motile vs. motile. motile E.coli can escape tight pores

## **Learning dynamical models across physical systems**

### **Learning dominant physical processes with data-driven balance models (walking)**

- obtain kinetics without markers
    - 2d median filter, viterbi filter
    - **anipose**: combination of  2d filters, triangulation, minimize spatiotemporal variation in limb length
- feedback model
    - reflex model, central pattern generator
    - tune the sensor neurons with laser
    - proprioceptor model → state estimator → neural controller → (muscle model)

### KNODES to learn complex dynamics and chaos by M. Ani Hsieh from UPenn

- ocean data
- neural ordinary differential equation (NODE).
    - NeurIPS 6572-6583, 2018
    - knowledge embedding enabled by NODEs. Knowledge-based learning of nonlinear dynamics and chaos. Chaos vol31. 2021
    - applied to Hopf model, Stiff Can Der Pol model,
    - inferring swarming dynamics from data
    - deformable image registration
    - model predictive control that controlled drones
    - learning chaos

scalar.seas.upenn.edu

### physics of behaviors across scales

large scale behavior (trajectory): variation explained by exploration-exploitation

fine scale (posture): decompose into 5 primitive postures

connection: 

- transfer operators → slow emergent variables, subsume nonlinear to linear
- use time series to max predict system to compensate missing d.o.f

“hopping dynamics” again 

non-ergodic drives that prevent the dynamics from relaxing to the steady state within measurement time

the landscape the worms seeking food is also time dependent

### ML for biomechanics

this group’s interested is very scattered.

first part just missed: learn macroscopic params in hydrodynamics as fields

Unet to predict some cell protein density, identify relevant signals

model: Oakes et al, BioPhys J 2014

fruit fly tissue

physics-informed machine learning again

### physics-informed machine learning: climate modeling and COVID 19 forecasting

Unet also here. turbulent-flow net. basically a new network structure based on unet. 

group equivariance leads to another net called Scale Equ-ResNet in order to retrieve symmetry

spatial-temporal neural p...: Baysian Active Learning

## Collective Behavior in Biology

### thermal TRP channels of vipers

1K sensitivity of a channel; 1mK sensitivity of neurons

independent channels, over time of several independent measurements

hypothesis: TRPA1 channels are embedded into a dynamical system near bifurcation. activated channels activates other channels 

question: does coupling break the independence of measurements? single channel info is ~1

### growth difference in single and multicellular organisms

expanding epithelium,when the area grows linearly, the size only ~$\sqrt{a}$, does this feedback to cells?

cells divide at a smaller size

lower bound of cellular size might come from genome size. CCND1labels DNA demage

no mechanisms yet

### collective signal oscillation

a lot of models

key features not heard clearly. adaptive spiking

### cellular migration on substrate with topological defects

the way they defined topology number = -1 is not as my expectation

Francesca Serra group experiment

not too much work

### synchrony and causality

Bo Sun again. granger causality again

used a famous model not written down. Sounded like Nagumo model

### living chiral crystals

starfish embryos

### central nervous system

gut motions and nerves in crafish

just using 5-HT is not enough to compensate the cutting of nerve

### role of position info in collcetive gradient sensing

Cramer-Rao bound by maximum likelihood estimation

benchmark was called tug-of-war model

contact inhibition of locomotion

### self-tuned criticality amplifies signals in bacterial chemotaxis

E.coli chemosensing: high cooperativity, perfect adaptation, large noise

symmetric spreading of CheA

### division, migration, cell signaling

MDCK monolayer

very biology heavy

a low fluctuation phase

### criticality in Cochlea

impedance = pressure/height, WKB approximation

hair cells are the sensors, undergo Hopf bifurcation

### defining success for pairwise maximum entropy models

mouse brain hippocampus, 2000 neurons

in subgroups, swap 1/2 of the cells to minimize pairwise correlation coefficient

## stoichastic thermodynamics and biological and artificial info processing

### [Entropy generation during computation - is it really avoidable, even in principle?](https://march.aps.org/sessions/Y09/1)

[Entropy generation during computation](https://march.aps.org/sessions/Y09/1): Szilard’s argument

erase and copy operation of ribonsome works like a universal turing machine.

in theory, logically irreversible process can be thermodynamically reversible, like **erasure**

### statistic thermodynamics of communication channels

MIT media lab

$\sigma(\vec x_f)\leftrightarrow DK(P(\vec x_f)||P(\vec x))$ KL Divergence

2 models, 3 by 3 nodes with some lines connecting some pairs, didn’ get what they mean.

they call the thing NESS (non equilibrium steady state).

takehome: dissipative not monotuned increasing as info transmission increases. some channel more efficient than others

### fluid intellengence: activities from learning and forgetting

diameter variable particles as intelligent agents

diameter function $D(\vec p)$ symmetry determines symmetry of new distribution

policy optimization, reinforce learning to search behavior space

### nonquilibrium dynamics of temporally responsive, single molecular automation

smart vs. inert: ability to perform temporal pattern recognition

a polymer that has multiple foldable positions. 

dual scale master equation

### thermodynamics of biological signal propagation

information: $lim_{T\rightarrow \infin}\frac{1}{T}\int MI(I,O)dt$

diffusion of signal,some equations, etc, parameters include size of source and receiver

implications: 

- cells don’t talk because they are too small
- E.coli phosphotases are close to ion channels (missed, not sure)

### dissipation-accuracy-speed tradeoffs in computation on-;attice self-assembly

Landauer principle

D. Woods. Nature 2019

diamond shape 2-in2-out tiles that 

### Bayesian mechanics for interacting systems

Langevin equation

NESS again

### wipe a bit with no energy cost by pypassing Liouville theorem

Liouville says Halmitonian system must be incompressible in phase space

$H_{ers} = H_0+gH_{contraction}$

micro-canonical energy shell

### **Stochastic Thermodynamics of Finite Automata**

not following, deterministic finite automata

### **Nonequilibrium thermodynamics of uncertain stochastic processes**

wanted to follow but failed

### glycan, function of Golgi constrain its morphology

also used KL divergence here.

looks like there has been no experiment, maybe I missed it. 

### **Stochastic thermodynamics of anomalous diffusion generated by scaled and fractional Brownian motions**

Stochastic thermodynamics: ST

fractional Brownian motion: fractional gaussian noise (no idea what)

fluctuation-dissipation is broken by memory in noise

### **Optimality in biological proofreading**

DNA replication error rate 10^-8 ~10^-10

experiment K_D/K_C = 10^-2, observed error rate 10^-3~10^-4, discrepancy

Pareto optimal fronts of kinetic proofreading

**generalized Hopfield model**

speed-dissipation trade off again

## Dynamics in Evolution

### Multicellular

Size→nutrition gradient→differentiation 

Multicellular yeast! T yeast

Bozdag

Non-reformable→mechanical challenge 

The aspect ratio increases significantly after the size grows

Aggregation not happening; Tangling spans the bulk
