---
layout: post
title: .tex | Notes during APS March Meeting 2023 in Las Vegas
keywords: [tex,phy]
excerpt: 终于把个人博客变成了废纸篓（
---

Some interesting sessions:

![5FB0A373-E7B7-45FF-97A5-81F9392CBB02.jpeg]({{site.baseurl}}/assets/photos/2023-03-12-5FB0A373-E7B7-45FF-97A5-81F9392CBB02.jpeg)

![E35F718E-38ED-432D-AC00-44E8D8893CC6.jpeg]({{site.baseurl}}/assets/photos/2023-03-12-E35F718E-38ED-432D-AC00-44E8D8893CC6.jpeg)

![A44D0789-44CC-42F5-85D1-E0CA93952712.jpeg]({{site.baseurl}}/assets/photos/2023-03-12-A44D0789-44CC-42F5-85D1-E0CA93952712.jpeg)

![7E0D2844-3BC8-4BEF-BABA-2818EEBA2C15.jpeg]({{site.baseurl}}/assets/photos/2023-03-12-7E0D2844-3BC8-4BEF-BABA-2818EEBA2C15.jpeg)

![A727558B-D110-48A1-B125-67A7067BFBD5.jpeg]({{site.baseurl}}/assets/photos/2023-03-12-A727558B-D110-48A1-B125-67A7067BFBD5.jpeg)

![B635604C-B9BD-4A34-9767-AD7338A80765.jpeg]({{site.baseurl}}/assets/photos/2023-03-12-B635604C-B9BD-4A34-9767-AD7338A80765.jpeg)

## Network theory and application to complex systems

1st talk: **Avalanches Dynamics** and its critical points, cortes dynamics, very long, missed first ~10 minutes, hard to follow, coarse grained 朗道-金斯堡 theory

Fokker-Planck equation, Fourier expansions, use as parameters of ____, choose a closure to solve

## Machine learning in complex systems

Fractional nn for continuous modeling of complex fluids: Caputo method for fractional derivative 

Inferring forces in many-particle systems using physics tailored ml: Chinese student with Ilya from Emory. Bruckner 2021 PNAS, cell. His work, dusty plasma, non reciprocal. Mutual Interactions, with environment, linear damping. not clear details of the nn 

Echo state network: Arizona state, Chinese student. A branch of reservoir learning. Switching states not always successful. Bad presentation. Don’t even know what question he is learning with this nn. Could be Lorenz system

Hopper Flow: particles passing a narrow gate in 2d. Classify problem: flow, clogging, clogged, empty arch. Direct interpretability: linear SVM. 

Committer of Reactive Events in and out of equilibrium: UCB. Variational methods for time-dependent backward Kolmogorov equation. decompose rate into contributions from different degrees of freedom. 

Predict Microfluid properties with ML: oil droplets into water, predict the droplet size. Monodispensed phse, poly  (jetting). Pretty small network and small dataset. nice GUI

ML for inverse design of metameterial. Combinatory/Discrete, imbalance. building block → unit cell → metamaterial. Ogliomodes

Long-term behavior with liearn regression. Moody 1944 moody diagram. Studied Lorenz system. Use short trajetories to predict long term properties. Period orbit theory 

## Quantitative cell physiology I - shape and size

missed 1st talk for breakfast.

### Beyond G1/S regulation: how cell size homeostasis is tightly controlled throughout the cell cycle?

G1/S not the main control cell size variation; CV reduces across cell cycle

rate positively correlated to size, but not exponential. this should lead to different mass density, but it is maintained tightly stable.

### Cell cycle dependent growth regulation in bacteria.

data  show that E. Coli cell growth is super-exponential.

model: ribonsome growth is exponential, 

B. Subtilis growth rate is not monotonic

Scott, M, 2014 Mol Sys Bio

tome averaged mass function and allocation function are equivalent.

A model, but didn’t see how it’s correlated to cell-cycle

### E. Coli coordination of cell dimensions to preserve macromolecular densities between compartments

shape is also important, not just dimensions. 

periplasm is the region between inner and outer membrane of E. Coli. Its colume fraction scales differently with the width and length of the cell

measure periplasm density by shocking and destroying the outer membrane and measure protein amount

cell aspect ratio is relatively controlled by changing periplasm biomass fraction and average cell width. Testified in multiple mutants

Growth rate is not a control parameter

### Molecular noise on cellular growth

standard model of size homeostasis: timer, adder, sizer

consider noise, get lower bound of size 

### Dynamic proteome trade-offs regulate cell size and growth in fluctuating nutrient conditions

growth rate and size control; in fluctuating nutritions, there is overshoot 

assums: cell maximize flux; division protein co-regulated with metabolic sector

model predicts cells prioritize division over biomass accumulation durign downshift

### Simulation about mechanical properties of Peptidoglycan (PG)

University of Jena, Balance of the Microverse. Very technical, very detailed

### Teichoic acids as organizing center of growth in B. Subtilis

inhibiting its synthesis immediately loses the cells’ rod shape; fluorescent images are uniform across the whole cell.

perturbing synthesis causes growth rate shutdown after loss of rod shape

PonA mediated crosslinking is required for growth in the absence of wall teichoic acids

proposed a model, not quantitative, seems not testified.

### coarse grained cell wall simulation

turgor pressure: 膨胀压

anisotropic deformability

surface evolver

### Nanostrctural changes of Peptidoglycan

Penicillin binds enzymes with the last step of PG synthesis.

treat with mecillinam; use AFM, changes local molecule orientation & PG organization

gaps in the PG network, not orientation, caused the death

### Robustness and Fragility in Yeast

Umap for metabolome data

### How Type 1 Fimbriae Help E. coli Adhere to Interfaces?

What is a fimbriae in bacteria?

Thin,  hairlike appendages, 1 to 20 microns in length and often occurring in large numbers, present on the cells of gram-negative bacteria, particularly Enterobacteriaceae and Neisseria.

they contruct mutants and can both adhere and swim.

### ZnO kills bacteria

Hypothezes: metal ion production, generation of reactive oxide 

## March 7, 2023 Ecological Dynamics

**Spatial drug heterogeneity:** a row of multiple wells, some of them have drugs. Mean field survival criterion: **$$L=\pi\sqrt{}$$**, and beyond mean field (some purtubation theory borrowed from quantum to reaction diffusion equation).

### Evo adaptation on cell shape by Katie

mechanical factors give same-fitness cells different growth rates in a colony. cells labels with 2 colors of fluorescence and grow in a mixed colony

mechanical forces slows down natural selection, both directions

used yeasts and grow for 10 days. select edge and center and continue growing. center still similar, but edge cells become elongated. “The elongation is a mechanism to get out of nitrogen starvation”(?)

sequenced ancester, center, and edge cells. Found 9 genes

<hr class="slender">

**The fate of beneficial and deleterious mutations in range expansions driven by long-range dispersal:** luckiest better than fittest, spatial factors dominate.

**Speciation at an expanding front**: superdiffusion → stepping stone model. Want to explain how homogeneous population evolve into species→ fitness model 

### F13: Emerging Principles and New Developments in Non-Equilibrium Thermodynamics, Natural Selection and Chemical Reaction Networks - Nonequilibrium thermodynamics of chemical reaction networks

CRN: chemical reaction networks, and this is about 

circuit theory for CRN: arxiv-2210.08035

- modules do not share internal species
- emergent cycles and effective reactions

## 203 cell model

### Active transport and Cell self organization

A lot of microtubules 

CCB-FL

![214D3DB8-7A99-42AC-8C18-051171564D6D.jpeg]({{site.baseurl}}/assets/photos/2023-03-12-214D3DB8-7A99-42AC-8C18-051171564D6D.jpeg)

Steam flows in large cells B. Corti 1741, fruit fly oocyte 

Flows in organelle positioning. Zidovska PNAS 2013, 2018. Gatlin lab U Wy 

Microscopic mechanisms about micro tubules is ill understood 

aLENS a living ensemble simulator 

1model: Cytoplasm as confined Newtonian fluid

Another model: coarse grained stokes force: fruit fly oogenesis 

![C622BD7E-E638-4194-A563-096F73209132.jpeg]({{site.baseurl}}/assets/photos/2023-03-12-C622BD7E-E638-4194-A563-096F73209132.jpeg)

skellySim

### Di Pierro: physical genomics

Nucleosome

but his title is **Landscapes of Genomic Architecture Across Evolution**, which is not 

ideal chromsome: every time  2 loci at genomic distance d come into contact there is a gain/loss of free energy $$\gamma(d)$$

### Stochastic model for cell survival and evolution

Single threshold and double threshold 

## metabolism and growth

### Adaptability and sensitivities in gene regulation out of equilibrium

Spare able energy 

Matrix tree theorem: inter alios

### biofilm electric shocked

Bacteria use membrane potential to regulate bio processes: cell division, antibiotic resistance, metabolism 

Electrical stimulation 

Biofilm: B subtilis: motile cells and matrix forming cells

Accumulation of motile cells around electrodes 

Proliferation or switch? Proliferate 

### Self organization waves on huge single cell living on light

external driving force main  reason?

Also internal limit cycle?

### CRISPER array for E. coli under antibiotic exposure

crisper cas 12-a

Beta Score , different in different media

### ZnO Nano particles on bacteria in magnetic field

Gram staining 

Synopsys quantumatk

## ecological dynamics

### design microbial community

Goal: metabolite production & degradation; pathogen inhibit 

Emerge, 

function as a design problem = f(composition)

Trivial idea: open the hood and see the interaction 

Another way: borrow from molecular level: how sequences gives function 

Statistical design: blue and red fluorescent proteins, separated by 13 amino acids, fit color as 13d binary

Success because landscape simple 

Ecology: if one can predict function from presence absence of a strain

Absence =-1 not 0, for similarity with Frourier expansion 

500 communities of 27 strains, predict production of a chemical 

sampling a very small space but result good, (predict/true value diagram)

Also predicted biomass (OD)

Additive property is the key to success 

Can get explained variance by the order of 

Ruggedness/slope

Compare with Generalized Lotka-Volterra

Metabolic cascades makes landscape rugged.

### connecting global patterns to ecological processes

Global soil samples

Environmental filtering cannot explain some of their data

Emerges from interactions 

### Mapping prediction error versus information content of coarse-grained descriptions of microbial ecosystems

Jacob moran

Framework to compare different coarse grained descriptions: partitioning, error-information diagram

To distinguish mechanisms of emergent simplicity: diversity in the partition 

## Materials that work by themselves

### biotic and abiotic

Adaptive d spring

## Pattern Formation

missed 1st talk of 30 min

### Morphoelastic growth to model aortic geometry

aortic 主动脉

integrated gaussian curvature

AI/ML needs a lot of data, so they need explicit models

NHLBI: National Heart, Lung, and Blood Institute

### experimental on chaos in cardiac tissue

kept in Tyrode solution

action potential duration + diastolic interval = period

TISEAN (a [Nonlinear Time Series Analysis](https://www.pks.mpg.de/tisean/) tool) to get Lyapunov exponent

### excitability at interface

2 bio-electric tissues, one only sodium channels, the other only potasium channels. so no spikes on their own. then shed laser on them.

A as fast variable, B as slow variable. A is x^3 shaped, whie B is -x shaped, then 

can also exlpain BZ reaction with some sub-reactions separated, and lumberjack and forect and desert

### light induced cortical excitability

shape control strategy in meiotic starfish oocytes.

rho protein. part of some signaling pathway, kymographs

seems to be my competitor on postdoc project in MPI-PKS

pole to pole opto-GEF accumulation aymmetry

presentation overtimed, not well delievered

<hr class="slender">

**Exploring regular, exotic and turbulent flow states in active fluids via the framework of Exact Coherent Structures**: too fast, totally lost. Who tm knows what is shadowing

### Pattern plant roots

tropism 向性: gravitropism, phototropism

roots on obstacles: skewing, coiling, waving

numerical scheme: separation of timescles, derivatives of intrinsic curvature over time, against cross section growth rate gradient.

decoupling the tropic dynamics parallel and perpendicular to the slope.

each curing given an energy, can predict transition between states

skewing is different, seen in mutants. It’s the intrinsic twist 

### cdc42 mobility changes yeast shape and survival

As title says 

### Jagged ligand improves notch signaling

Notch, delta, jagged 

## Synthetic biology

### stochastic model SELEX

to select aptamers with highest affinity : [https://www.basepairbio.com/what-is-an-aptamer/](https://www.basepairbio.com/what-is-an-aptamer/)

Optimal policy: A1 A2>>T, T>>1

### Cytoplasm is organized, crowding

Crowded with macromolecules

Crowding of cell free gene expression change noise; simulations 

Crowding gives attraction to membrane 

Simulations 

Impacts transcription and translation in cell-sized vesicles

### Elisa from Cornell : titrable in vivo Cre-loxP in E. coli

Somatic differentiation 

Er binding site, beta estradiol

DH10B RepOrter yfp 

## Research in Germany

### MPI

Write emails with info from website 

humburg scholarship

6+2 years super generous funding enough to hire 2 postdoctoral, to early scholars

Foreigners 9 years after doctor degree has to be employed, so many leaves

University and Scores important, papers slow so not so important

DPG MEETING

140 directors, each has a way of sponsoring 

Andrew Mackenzie 

Go for Nobel prize, not professorship 

Want to hire people with 20 yers of career left

Six months danger period, then 3 years safe

### Cell fate transition

### cell type order parameters

Saw last year 

Order parameters: 

scTop python package

### Class IV da neurons Laval development

Macroscopic measurable: dendrite Densities, front velocity 

Dendrite grow in stochastic manner 

Mean field descriptions: grow, shrinking, stall states

master equations 

Very in detail

Yale integrated graduate program in physical and engineering biology 

### synNotch expression in fruit fly

Delta notch: contact based intercellular signaling 

Vortex based model framework 

## Intracellular transport and organization

### super resolution

STORM, PALM, FPALM, all in 2006

Correlative live cell and super resolution microscopy

Post translation modification: Tyrosinated/detyrosinated, de- is important , sparse and stochastic 

De- VASH interact with MT 

Mean square displacement analysis 

Simulation: 

### In vitro experiment of Microtubules

## switch and detach at intersections of microtubules

diaplacement≤path length, from experiment 

### Kinesin-1,2,3, bidirectional transport

Different detect rate

Kinesin compete for dynesin in a tug of war

segment analysis of slow trace 

### motor

MTOC, convergence and target scretion of granules

Natural killer cells

### Growth of axonal caliber

Axonal neurofilament as caliber modulators 

Six state model Jung and Brown 2009, Li etc 2014

### intracellular drug transport in single cell

Hoechst dye to measure effenciency

### alien proteomics, diffusion through nuclear pore

Nuclear pore complex

FG-nucleoporin (IDR)

Active transport vs passive diffusion 

\Delta F(R)

Inject frog oocyte into E. coli 

### cone shaped hiv capsid through nuclear pore complex

Free energy of nuclear protein 

Narrow end enter first

### ER for transport Calcium ion

Ca bound to high capacity buffer proteins in ER

locally release in spikes

Reaction-diffusion model for calcium and buffer proteins

local cytoplasm concentration

in ER Lumen: proteins spread super diffusively; active runs along tubules, from single particle trajectories

altering morphology by morphogen expression: Rtn3 overexpression; Atlastin knockout

## collective behavior

### biofilm=cells+matrix

SPP2389- emergent function of bacterial multicellularity

Ng bacteria 

### flow-dirven cancer cell migration

autologous chemotaxis is a mechanis cancer cells fall onto XXX

chemotaxis vs. mechanosensing

chemotaxis fails at high cell density

### motility induced phase separation of deformable cells

所谓 phase separation，就是一筐红绿豆自己分成两堆

rigid particles aggregate and sort without adhesion

2d layer of deformable active brownian particles

simulation: high deformability easier to phase separation, shorter collision time

BioPACIFIC program at UCSB and UCLA

### Geometric programming of collective sensing of neural cells

Oregon State University, Chinese speaker

a cross shaped titch, with five wells at 4 tips and 1 crossing, (infinitely peridic? not sure)

flow switch of GM and ATP

longer period leads to more well synchronized nodes. edge probability pattern

### Ear, hair cells tune cochlea to criticality

impedance

seems have heard last year

Bo Sun Gourp member?

## Social Interaction

pretty big hall actually

### The Use of Laser Speckle Spectroscopy for Subtle Detection of Infantile Ants

Geogeria tech

pixel photon intensity, not direct movies, to detect movements. also sounds like something last year.

### density functional fluctuation theory to model basketball

NBA has position data every 40 ms!

50 feet x 50 feet heatmap of shots

postulates: location of ball changes player spatial tendencies, 2 types of player defense and offense 

![8795A615-E1CB-44C4-B02B-3AB5884AA384.jpeg]({{site.baseurl}}/assets/photos/2023-03-12-8795A615-E1CB-44C4-B02B-3AB5884AA384.jpeg)

forecast a play, evaluate a position, improving a player’s positioning.

### honeycomb formation under geometric frustrations

decentralized division of labour, to build honeycomb

a lot of energy cost, not always on flat plane. 

3d printing to prepare substrate for bees, for data repeatability. basically they make plastic cells of different sizes, and see how bees build upon them.

geometric frustrations: shifts, tilts, sizes

forcing smaller cell size → X-ray microscopy

some ~24% of the cells are filled with wax

larger cells → tilting of wax walls, can be 3x bees’ normal honeycomb cell size

### winner and loser emergence in zebrafish fights

what is a fight, what is a winner and dominance, how fights start and end.

6 pairs fo fish, 3 body points of 2 fish in 3d, experimental tracking

defining winner: post-fight position asymmetry

fight-bout micostructure to **mesoscopic** fight-maneuvers. 

phase space: $$(\theta_W, \theta_L, D_{pp})$$

### Chimera states among synchronous fireflies

Lewis and Cratsley Annu. Rev. Entomol. 2008. temporal patterns of different species

[https://fireflyexperience.org](https://fireflyexperience.org) 

$$\dot\theta_i=\omega_i+\frac{K}{N}\sum_j\sin(\theta_j-\theta_i)$$

chimera states for couples oscillators: part of the agents are synchronized, some are not, they coexist

example: unihemisphere sleep in marine mammals

South carolina, Congaree National Park

### Synchronization of human networks

Moti Fridman (Bar Ilan University)

![3790D8EF-864E-4107-9C44-2CD22D76AF8F.jpeg]({{site.baseurl}}/assets/photos/2023-03-12-3790D8EF-864E-4107-9C44-2CD22D76AF8F.jpeg)

previous works deal with the case where everyone sees everyone

violin players，但是成员互相看不到对方，one control position(? why need it)

bidirectional and delay 

even number of plays give checker board out-of-phase pattern 

odd number gives frustration, they need to ignore one of the plays, changing the connectivity of network, glass state

unidirectional network: humans change coupling strength at will when there is no delay

## Mechanics of cells and tissues

### division and differential adhesion drive cell self-segregation during embryo morphogenesis

Voronoi cell model for cell monolayers

contact tension controls tissue structure

### mechanosensing breast cancer spheroids

another Bo Sun group member.

to segment and track the cells in 3d: PEN projection enhanced network, on top of a Cellpose 2d neural network.

classify cell shape phenotypes with SVM

filopodia leads invasion

### kinetics of cell aggregation

cell-cell contacts: Guo et al Biophysics J. 2006

cell-substrate interactions: 

感觉是个大杂烩，啥都有

matrix mediated mechanical interactions, so what does matrix mean?

> ChatGPT:
> 
> In biology, a matrix refers to a non-living or extracellular substance that provides structural support or serves as a medium for cellular interactions. The matrix can be made up of various components such as proteins, polysaccharides, and minerals, and it can be found in different biological contexts, such as bone, cartilage, connective tissue, and the extracellular matrix surrounding cells.
> 
> For example, in bone tissue, the extracellular matrix provides support and rigidity to the bone and is primarily composed of collagen fibers and mineralized calcium phosphate. In cartilage, the matrix is composed of collagen and proteoglycans and serves as a cushion between bones in joints. In connective tissue, the matrix provides support and allows for the exchange of nutrients and waste products between cells.
> 
> In summary, the matrix is an essential component of many biological tissues and provides structural support and a medium for cellular interactions.
> 

### epithelia tissues as hexnematic liquid cystals, and instabilities

Heager et al,  J. Exp Med 2020

hexatics in a channel, momentum conservation and orientation dynamics

dispersion relation and unstabilities

very classical dynamics study, as classical as those on textbooks

### Multiscale measurements of mechanical stress in 3D co-cultures using a deformable micro-device

巴斯德研究所

cell level reponse to tissue level mechanical xxx

mechanic stress on each cell depends on position and neighbors; global deformation is accumulation of local stressees.

### Mechanoregulation of biofilm homeostasis

EPFL, Lausanne, Switzerland 

biofilm in hydrogels

size control hypotheses: mechanical, growth rate, cell death

### mechanosensing of embedded spheroids and cell invasion

inserted in a fibrous network consisting of collagen, and other proteins

3d **vertex models**

[https://github.com/ZhangTao-SJTU/tvm](https://github.com/ZhangTao-SJTU/tvm) 

### density variation of fibroblasts near topological defects

ridges to introduce topological defects, ridge height as proxy for ridge strength

shape dependent rate of division as the mechanism

cell density changes

### slicing softly with paper

paper cutting machine to use paper cutting into gels

small angle, thickness: buckling → cutting → indention

larger angle, only buckling → indention

appled stress must exceed critical threshold, but below buckling threshold

dangerous thickness: 65 microns

### Vasculogenesis

cardiovascular system is 1st organ system to form in a vertebrate embryo. 2 steps: vasculogenesis and angiogenesis

then totally lost

### Cell shape and fate changes in 3D model of mammalian hair follicle development

3d vertex model

2 hypotheses: 1. changing cell autonomous properties; 2. extrinsic force. model 2 wins

WTH is E15.5 morphology

Lisa Manning group

### Emergent chirality in active solid rotation of pancreas spheres

> **ChatPDF and Humata.ai**
>
> ChatPDF is almost unusable, there is no context, and cannot break lines. They even answered in French first
> 
>
> Humata.ai: The paper investigates the rotational dynamics of spherical tissues using murine pancreas-derived organoids as a model system. The study uses an active **vertex model** to demonstrate how the interplay between traction force and polarity alignment can account for distinct rotational dynamics. The study also investigates the emergence of chiral symmetry breaking in multicellular systems using experiments and simulations of rotating pancreas spheres. The authors propose that topological defects in the polarity field underlie the symmetry breaking. The article discusses the role of geometry in the behavior and properties of epithelial tissues, including cell division, patterning, and left-right symmetry breaking.
> 

语速还挺快

geometric constrains 

3D上皮 collective dynamics, mouse pancres self organize into a sphere, inside filled with lumen

distinct rotational modes: rotation, rotation arrest, drift in rotation axis → mechanism?

active certex model: force balance, polarity dynamics

solid rotation, or fluid exchange of neighbors. solid body rotation fraction.

rotation axis drift is reminiscent of yielding like transition

cell shape orientation is almost stable, not a uniform random distribution when there is rotation, but uniform random without rotation

polarity dynamics: 2 types of solutions

other structures: cubodal, compact, multi-lumen: **this is the proposed future direction**

## collective behavior

### spying on bacteria in 3d

Isolated cells:

Ball pit for E. coli cells for them to tumble 

Active hopping and trapping

<hr class="slender">

granular hydrogel matrix supports 3d printed colonies 

Collective motion, not diffusion

Consumption and chemotaxis 

How to keep front together: Change initial position. Chemostatic velocity

Sensing = F(c)

### multicelluarity w/ Differentiable Molecular Dynamics Simulations

Jax-MD: [github.com/google/jax-md](http://github.com/google/jax-md) 

machanism for regulating division

“learned params consistently yield homogeneous growth”

don’t like this project very much. which part is done by the speaker?

### collective behavior of swimmers in intermediate Reynold number

model of dumbbell in fluid, 2D [torque and force] free

pair of dumbbells: puller and pusher

### Chemotactic motility-induced phase separation

**Chemotactic**

student of the invited speaker of this session, award winner.

motility-induced phase separation: 抖豆子抖成堆

chemotaxis: directed motion in response to chemical gradient

particle volume fraction, chemoattractant concentration, 

sets up an allowed region of phase separation

arxiv:2301.12345

### Anomalous collective dynamics of dividing chemotactic agents

Chemotaxis + population dynamics

non-equilibrium continuous phase transition

some kind of reaction diffusion equations for $$\rho, c$$ 

**chemotactic** interactions can alter {} near critical point

### Crowds with large pressures

non-equilibrium 

microscopic: Vicsek model, Helbing-Molnar model; macroscopic: mechanical spectroscopy of insect swarms, equation of state

sys behave like equilibrium: Silverberg 2013 PRL

why works? difference of time scales: relaxation time >> collision time.

agents packed: potential energt not equi-partition, but kinetic energy are.

### phenotype probability distinguishes mutants from wildtype social bacteria

M. xanthus form persistent or not persistent dunes.

## Morphogenesis

### tension triangle

8:30-8:40

Order and anisotropic form coherent T1 that drive flow

A lot of UCSB, actually one group having 2 talks back to back 

Tension isogonal decomposition 

Could be applied to wing disk, neurolation, 

### from gene to geometry

Cells → sheet → tube → cortex 

multi view confocal, Bayesian based deconvolution, deep tissue imaging 

Knockout and shape differs

TubLUAR: tube like surface Lagrangian analysis resource

How gene → calcium signaling → muscle contraction → endodem strains → organ shape

## plant Biology

### root hair

self anchoring, 仿生根 robot, can dig into fake moon soil, for soil sampling and sensor implanting

### Heterogeneous cellular growth in root

Directly connected to organismal shape

cell behavior to organisms 

Discrete element simulation 

Meristematic and elongation zone

### Turing pattern in vegetation

Experiment: Australien fairy circles regenerated

WebGL and JavaScript

### network architecture of plant pathogen interactions

![D185C1B7-F5EB-4629-B767-0ECF7F72C591.jpeg]({{site.baseurl}}/assets/photos/2023-03-12-D185C1B7-F5EB-4629-B767-0ECF7F72C591.jpeg)

![03A05C17-8E19-4B30-B449-1A99D02093A9.jpeg]({{site.baseurl}}/assets/photos/2023-03-12-03A05C17-8E19-4B30-B449-1A99D02093A9.jpeg)

Translation/degradation, xxx, xxx

Simple model. complex systems 

Rockefeller U.

### water solubility of hydrophobic xxx with phytoglycogen(PG) nano particles

University of Guelph, in Canada

Astaxanthin-

Carotenoid solubilization strategy

OSA modification changes absorption spectra 

## Emergent behavior in biological systems

### Emergent Spatiotemporal Communication Patterns in Insect Swarms

Chemical signaling (bees) and visual signaling (fireflies)

Worker bees scent to amplify the feromon of the queen to locate the queen 

Also Happens in fed bees to locate food

<hr class="slender">

Visual signals by fireflies 

非线性动力学的课本居然有 synchronization, slide 和之前看过的一样

Can only see a small portions of fireflies in the wild

Controlled environment 

Talking to fireflies with LED

### anatomy of E. coli colony expansion

Height depends on glucose concentration 

### mechanical information processing by action cytoskeleton

Focal adhesion

Pretty biology heavy

### CryoET

Tomography 

Capture topological features on sparse density data

Image voxels and compare with alpha fold candidates.

Is this risky for cyclic reasoning?

### protein assembly

最后一天，没有心气记笔记了……
