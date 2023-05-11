---
layout:      post
title:      ".mpipks-transcript | 02. Stochastic Process"
keywords:   [mpipks-transcript]
excerpt:    "这次的内容大致分为两部分，一是继续将朗之万方程推广，另一部分是主方程。"
---

> 《非平衡态系统中的集体过程 (Collective processes in non-equilibrium systems)》是位于德累斯顿的马克思普朗克复杂物理研究所 (Max Planck Institute for the Physics of Complex Systems) Steffen Rulands 研究员的一门课程。
>
> 课程主页[链接在此](https://www.pks.mpg.de/statistical-physics-of-living-systems/teaching/collective-processes-in-non-equilibrium-systems/)，网页上有课程的课件，录像发布于 YouTube。
>
> YouTube 把视频中讲者说的话从语音转化成了文字，我把这些转录复制了下来，进行了简单的断句，并且推测了各段文字对应的课件的内容。
>
> 这次的内容大致分为两部分，一是继续将朗之万方程推广，另一部分是主方程。

# 2. Stochastic Process

### Introduction

Again five minutes late.

So today i would like uh to begin say the methodological part of the lecture and uh to begin to introduce some of the methods that we need to describe non-equilibrium systems. And if we describe non-equilibrium systems then of course that's pretty broad. 

But if you look at systems that come into your mind if you think about non-equilibrium systems epidemics biology and these systems are generally very small. You might think about for example the number of infected people and race or the number of new infection in infections and racing a certain day is maybe what do we have 10 or so. Yeah it's a small number yeah and chance of fluctuations have a large influence on this number you know if you have in a small tone if you have one COVID case and this one person recovers then you have a child then you have a change by 100. So in small systems small changes have large consequences large statistical consequences. In other words we have strong fluctuations. The same of course also holds true in biology where uh if you look at the number of transcripts of a given gene you know in a given cell then it's typically just a few thousand or. So it's not 10 to the 20 and 10 to the power of uh 26 usually are used to in a gas or a magnet from statistical physics. These are rather small numbers and we cannot just say that such systems are completely described by the evolution of some average or deterministic evolution of some average quantity. So we need to start looking at fluctuations around these averages can be very important and are very important.

And to this end let me share the screen. There we go okay you can share the screen unfortunately you also simply see um the um toolbars is that correct you can can you see the two balls ah something is different than last time. Okay. I hope that is not doesn't bother you too much and i don't know what's the reason for this yeah okay. That's at least it seems to be working.

### Slide 1

When i talk about fluctuations then uh that means of course that we have to describe these non-equilibrium systems that i was talking about in terms of stochastic processes. That means taking into account the stochastic stochasticity that isn't used by the small size of many of these systems. And the field of mathematics and physics that deals with such processes are is called stochastic processes.

Now many of you will be familiar with stochastic processes particularly those on the phd level. I nevertheless want to give you a brief introduction to stochastic processes today. So That we're all on the same level and can start moving on to field theory and other topics from next week onwards.

So what is a stochastic process.

Stochastic process is just the collection of random variables. These very variable variables that take a random variable that at a random value that is has an index that we call the time t. You know this is the stochastic process and uh there are of course different all kinds of stochastic processes.The simplest one but not the simplest one but the ones that we're usually dealing with in physics just for mathematical simplicity are markov processes. 

Markov processes have the property that they lack memory. That means that the state probability to find the system in a certain state for example to have five infections and on november 11. yeah this probability only depends on the previous time in the system but not on times before that yeah and that is denoted by these conditional probabilities here in principle you can think that the state of the system at a certain time t i depends explicitly on all of the previous times. It remembers what was going on in the past. Now the markov process is a process where the state of the probability to find the system in a certain state only depends on the state that it had at the previous time stack. These markov processes don't have memory and that makes them simple to handle and in many situations uh this markov approximation is actually a very good approximation and a necessary approximation that we need to make.

The goal that we have in the theory of stochastic processes is that we want to find the probability that our random variable x takes a certain value that i denote by lowercase x at a given time t. That's what we call p of x and t the probability that a random variable takes a value x at a time t.

How can we get this probability? the two approaches 

The first approach i introduced last time. That's the approach the langevan equation and that is a project where we also have a look later in more detail.

We can just take a look at specific realizations of the stochastic process you know a specific realization of this stochastic process that is then given by this langevin equation and then we can sample many of these these realizations and define an appropriate statistical ensemble and from this ensemble we can then calculate our probabilities our moments and other things.

This approach is the langevin approach and this is based on calculating the trajectories of individual realizations and last time i showed you this approach in the context of brownian motion. If you think about brown emotion then another name pops up in your head and this other name is einstein yeah so einstein had a different approach to brown emotion.

He didn't model individual trajectories. What he was looking for was to directly consider the time evolution of the probability density p of x and t yeah.

And the goal in the second approach is then to find a differential equation that describes this time evolution yea. So this is the second approach to stochastic processes and we'll have a brief look at each of these approaches in this lecture lecture today.

### Slide 2

Let's have a look at the first approach. The langevan equation.

The larger equation is a specific case of a stochastic differential equation and.

The general form you can see on the top here that basically looks at looks like the larger equation that you know of course yeah the time evolution of some random variable x is given by a deterministic part plus a stochastic part and this stochastic part has this psi term that we were looking at last time this noise term this stochastic force that takes random value at e at each instant of time.

Now the stochastic part can also have complicated forms but to make our life easier we classify these terms and these forms here this is a functional form of b of x e and then we have two broad categories of stochastic differential equations.

The first case is if this b is just constant then the strength of the noise does not depend on the current state of the system. Noise is then called additive it comes on top of what we have as the state of the system.

The second case you could have is that this b is not constant but depends on x. If this b pre-factor here depends on depends on x then the strength of the noise is related to the current state of the system.

This is then called multiplicative noise.

An example of a multiplicative noise is for example an epidemic. If you have an epidemic and the epidemic virus goes extinct to the population that it doesn't come back for a very long time. That means if this x here the concentration of this virus the population is zero then the stochastic force is also very small or even zero you know that that is just one of the prime examples.

These so-called absorbing states where you go extinct for example and then you don't have any noise anymore no because the thing just disappears and it doesn't come back.

Then that's one of the prime examples is absorbing stuff it's always says one of the prime examples of multiplicative noise and a very important class of stochastic processes.

We can now write this general form of the stochastic differential equation in a differential form as the principle can also do with ordinary differential equations.

And in this differential form rewrite it this way it's a little bit uh you know it's almost trivial we get the dt here it finishes infinitesimal time interval and we get a d w of t here yeah and this is already the first indication that differentials and integrals and stochastic differential equations and stochastic processes are not that easy because we don't have the x but we have some dw of t that is the w of t is called the WEINER PROCESS and this is just defined by in differential form that the differential of this weiner process is equal to the value of psi of t times dt or in integral form that's equal to the total contributions of the noise of the cumulative stochastic force until a certain time t.

We can formulate formally just integrate this equation you know we just integrate over time and then we formally get a solution of this equation.

### slide 3

We just integrate over time and here on the right hand side we formally have some integral over this vena process all over this differential stochastic force here dw of s you know and one of the central questions and stochastic processes is that the fundament of stochastic process is what is this integral here yeah.

What is this integral here.

One thing we can do and i'll show you later that it's important uh how to define this integral so-called stochastic integral one way to look at this is to take the time domain and cut it into small pieces yeah that's called a partition n pi of n of time and we cut it into small pieces into small intervals a number of n intervals and then we just say that this stochastic integral over some function f is the limit of infinitely small intervals and then we do something similar as in the normal riemann integral.

That the usual integral that we have.

We say that this is just the function evaluated at a specific time in the summer in this interval times basically the size of this integral which is the discrete form of this differential. The question is this is some kind of a weighted sum yeah you're on the right-hand side and the weights because w is again a stochastic variable yeah are themselves random variables. This integral again is a stochastic integral and the result of this integral is again is to test a random variable.

You can see here on the bottom right. We have this interval t j the sort of the previous time point t j plus one the next time point and then somewhere in the in the middle we evaluate our function and.

### slide 4

You might think that if we go to the limit where this interval here becomes very small. Infinitely small like we do in usual calculus then it doesn't really matter where we evaluate the function you know by the stochastic processes things are not that easy it actually matters where you evaluate this interval this integral and that's what i will show you.

By just looking at two specific choices of this integral there are two specific choices of where we evaluate the function when we integrate it yeah.

On the left hand side uh we'll do a little calculation where we just set uh this function this point where we evaluate the integral to be on the left end of the integral and on the right hand we'll evaluate the integral by taking the function on the right end of each interval and as a test function we just integrate over this we know process wt yeah.

This calculation is rather simple.

We take a look at the average over i'll just write down this integral not j equals one to n w t j w t j plus 1 minus w t j. That's this integral evaluated at the left hand side yeah and then we just say okay. This average is a linear function. We have j equal one to end and the sum moves out of the average wtj w tj plus one minus w t j.We can factorize it because of the independence of these w j equals 1 to n w t j w t j plus 1 minus w [Music] tj.

Yep was there a question okay um yes. Here um the dj star is the point that we have the freedom to choose either on the left or right hand side exactly. This was here on the previous slide. On the previous side we had this formula um yeah and. We're just writing down this formula here where our function f is w and we evaluate t j star. So here we have the choice where to put it on the rest on the left boundary of the interval yeah it's just the same formula we just plug in what we get if we if this tj star is equal to tj and if our function f is equal to w yeah and we just do that to give you an example what you get when you integrate when you do statistic integration yeah.

There's no biological application also it's just a mathematical exercise to show you uh that you get weird results with stochastic processes and on in this case here this second integral here is just equal to zero because the the differences between integral between time integrands are the difference between these values of w at different time points is a random gaussian variable with mean zero because our soi you know that was what we had here originally here yes is random our sign is a random as a stochastic as a random variable that is normally distributed opposite gaussian distribution with mean zero yeah and this is basically right.

The average is also zero yes uh right at this place i would like to ask in the previous slide um yes. We initially started with uh x which was our primary random variable and the evolution of which we're trying to figure out then we said that um even b b psi was the stochastic part or the random part.

B in itself can be any function it's not a stochastic function it can be for example x squared also you know. This in itself is not stochastic but because you multiply it to the stochastic function sine or this random variable psi this whole second part becomes yeah. The b is just uh for example in the random and the brownian motion the b was the strength of the noise and that was what we calculated we call it recorded a and it was just a number that represented the strength of the node no but it can have more complicated forms it can be x squared or something else yeah. X squared exponential of x square root of x whatever you know. That in principle this can be any function of x and even of t if you want to make it really complicated yes and nicely speaking we can say that the the fact the reason that we're calling a x a of x t as deterministic is because we we ha we know um we know the trend of a with respect to x and t i believe speaking it could be anything but we know the trend yes.

Another way yes yes exactly yeah. Another way to see it is if you say no we don't have just 100 cases of code but 10 to the 26 yeah like a huge number of cases or you look all the x is the number of particles in this room for example yeah then the stochastic part would vanish. Because then you also saw okay there might be at every second there might be a few molecules going in and out of this room yeah but if you have 10 to the 26 molecules in total yeah then you don't need to worry about that then the a will completely describe our system that means it's essentially deterministic it's not the fluctuation the noise that we get here is small compared to the actual value of x.

That's why we call this okay yes yes that's the scale of the system the scale all the sides of the system 

yes the xi typically disappears if you make your system larger and larger. Of course there are counter examples like exotic counter examples but typically you could think that the psi at some point disappear if you make your resistance larger and larger it's like the central limit theory right. If you have a large number of observations you know then at some point your uh your measurements that you say will be uh still follow a distribution but will be sharply p around the average and then it's fine if you just look at the average and not at the variations and that's also what we typically do in statistical physics you know if you have 10 to 20 to the power of 26 particles yeah then uh you can neglect typically fluctuations around 10 to the 26 yeah if you have 20 10 to the 26 times plus 100 or so that doesn't matter that. That's why we call this part stochastic and the other part okay and it's it seems a pretty pretty random right. That we put w t uh equal to f of t it's completely random right it's completely random uh yes it is pedagogically not random yeah.

We you would see here that this is off because what i just wrote this is just 0.

It's just an example integral and I can calculate the same thing on the right hand side and on the right-hand side we evaluate the integral on the right hand side not. So we have j equals one to n w t j plus one w t tj plus one minus w t j. and now we do a little trick that means that we here subtract zero yeah we subtract the zero that we have here on the left hand side.

We know that this is zero and we can just subtract uh what we have on the left hand side w t j w t j plus one minus w to j how we know that this is zero and if you plug that in and move it into the average then we see that this whole thing on top will be equal to j equals one to n w t j plus 1 minus w t j squared and if we just evaluate that uh taking into account again that this is a weiner process and the difference is basically follows a normal random variable we get that this is equal to j equals 1 to n t j plus 1 minus t j and then only the last boundary terms will survive and this is equal to t minus p0.

And this is not zero.

This is just to show you that if i evaluate this integral on the left hand side and on the right hand side then we get different results and we need to decide on one specific conventions and in the fields of course there are multiple conventions not just one for example two common choices first choice is the so-called ito integral and as each in this ito integral we say that this t star j is equal to t j.

That's what you have on the left hand side we evaluate the into the the function and the integral on the left and hand side of these intervals yeah and in this lecture we will usually use the ito integral the second choice is the so-called stratanovic integral yeah and this just means that we evaluate this function in the middle of this interval t j plus 1 minus tj divided by 2 plus tj.

So that's the middle of this integral and you always have if you do if you work on stochastic differential equation you always have to say in which which kind of stochastic interval integral you're using ito or strotonovich and depending on your choice your results will be different difficult different mathematically.

So it's always important to state which choice of this interval of this stochastic integral you're using because the results as you saw in these two examples will be different.

### Slide 5

This was our first let's say glimpse into stochastic calculus and that already showed that stochastic calculus is not quite as straightforward as our usual calculus and another manifestation of this is that the usual rules of calculus are also different for stochastic processes and one important example is the chain rule in stochastic takers.

In the chain room we want to evaluate a quantity that is some function f of x of t like a variable transformation.

So let's have a look how if we transform such a make a variable transformation of a stochastic variable what we will get and i wouldn't show you that if not something interesting or at least unexpected would be the outcome.

Let's first do a taylor expansion you know just taylor expansion. That we get that del f over del t dt you know plus just taylor expansion del f over del x dx plus second order df squared over stop working i think i have to pair the pen again okay let's see if that works okay. Second order x squared dx squared oh it's just taylor expansion of course we can continue that.

We have our dx here in this expansion and we just substitute substitute the langevin the equation in differential form for the x yeah and then what we get is that the first term does not have any dx dt dt you know plus now we have our dx and we substitute the largemouth or the stochastic differential equation in differential form a plus dt plus sorry a times dt plus b times dw and i'll run into problems space.

The second term of course becomes a little bit more complicated and this is a second derivative delta x squared and we have to substitute the launch of the equation with this dx squared on the previous line and.

Collect the terms that's second order term in time squared plus continue here 2 a e d t w plus e squared b w squared plus higher orders and. What we will use is we uh only want to take into account the highest orders in time yes.

When you differentiate what is what we do we usually it's like a linear approximation.

We take only into account the linear order in dt and.

In the second step we we collect these dts and what we get is.

To highest order in dt del f over del t plus a del f over del x plus b squared over 2 del squared f over del x squared times dt.

And then that's the highest order in dt plus b del f over del x d w.

That's called ITO'S FORMULA and what you can see is that the chain rule is not as convenient as in using the usual uh non-stochastic calculus.

So you have to think if you make a transformation that you get quite a few new terms just because you're dealing with fantastic processes one term has not been taken the term with two a b dt dw that is also linear in dt let me see.

Two adt yes this is also here you have it where's the other one uh the next one which has pre-factored to way b it's t d w and d w scales with dt squared exactly sorry square square root dt square root of dt exactly yeah.

That that's what i should say.

This dw scales with the square root of dt and the reason is that this dw is essentially something like this brownie motion and if you look at this browning motion from last time then you see that the typical distance.

That you travel scales with the square root of time.

The standard deviation increases with the square root of time and this is how you can see that roughly this dw scales the square root of dt yeah and that's why uh as you said uh this term looks like it like you know okay this just yes thank you just just to show you that um um.

If this is uh just to show you that the chain rule in stochastic processes is a little bit more difficult like many other things as well as stochastic processes.

What i should say.

Is that what i would suggest is that.

### slide 6 & 7

We have your examples and what i will do is i will leave the examples to the end of the lecture until we're done with the methods and depending on how we're doing with time you'll have these examples then in the notes that i'll upload to the web page and by the way i should give you the password that's the password is.

My my last name and.

With it after that you can open the lecture notes and then you can have a look at the example at the examples or we will have time at the end of the lectures to go through these examples just because some of you have already heard stochastic processes for the 10th time and others are still maybe undergrad or graduate students uh that's here suggested processes for the first time and um.

Are trying to find a little way uh of going through this topic here.

All for Of course a very nice epidemic example again yeah i'll leave it for.

And uh you'll see you'll be either do that at the end of the lecture or when we um you can see it on the slides that are on the website yeah that's just how you how how how it is to do calculations with these larger equations with this e2 formula and.

On yeah.

### Slide 8

Then we have the second approach in stochastic processes and the second approach dealt with finding a differential equation for the time evolution of the probability to find a system at a certain time t that is in a certain state x at a certain time t. and for now we write that in the form we have some initial conditions i suppose that the system was at some initial condition initial state x naught at time t naught given that this that we have this initial conditions we're looking at the conditional probability to then find the system in the state x at time t and at the first step you can look if you look at the plot on the left hand side if you ask what is the probability to end up in x if i started on x naught then what we do is we can sum up all the different paths that the system took to get from x naught via some intermediary state x prime to x. And each of these paths has certain probabilities. What is the probability to be in this state given that we started here this red line. This is given by this here the conditional probability to be in x prime at t prime given that i started at x naught and t naught you know and then the second part of this diagram is what is the probability to end up in x if i was previously in any of these states x prime we can sum up these contributions we can sum over all different parts.

If you have one trajectory here one way through this uh through these parts here one diff one specific trajectory yeah then this is given by this multi uh the product of these two probabilities we are going from here to here and from here to here and then we sum up of all possible parts and what we get is this formula here that's called the CHAPMAN CHROMOGOROV EQUATION.

That just says what i just said in words in the continuum form if i want to know the probability that i will that i'm an x at time t given that i started at x naught and t naught then i just have to integrate or sum up all the possible parts all the possible parts this system can take and weight these paths by their probabilities.

This is what is in this chapman komagorov formula.

So you go through all possible paths and sum up the total probabilities.

This chapman called mogoro formula is not very convenient it seems like it solves the problem of getting p of x and t but it's not very convenient in practical purposes and to do to be able to calculate this p f of x and t more conveniently we rather want a differential equation that describes the time evolution of this.

So that was the that was the written notes version of the transition here of the slide transition it was very fancy. So what is the time evolution of this probability p of x t. We're trying to get a differential equation that tells us what's happening. And this differential equation is again are picturized here on the left hand side.

You can do lengthy calculations to get it but the idea is pretty simple if i want to know what the change in probability of being in a state x at time t then i have to have to look at two different contributions yeah one contribution is what goes into the state from the left hand side.

What is the flux of probability into this state and then on the other hand i have the contribution that i have to subtract subtract from that that is what is the probability to go out of the state yeah that's the green stuff here you know and.

The time evolution of this probability of being in state x attack time t is given by a balance between what comes in and what goes out yeah and this balance is described by a so-called master equation.

This master equation has the form of the quite complicated form like here on the left hand side we sum up all the contributions that go into this state but.

I chose more convenient notation to describe these conditional probabilities.

That's the rate of going from x prime to x here the red thing.

That the rate of the transition rates are going transition rate times the probability that i was an x prime in the first place.

On the right hand side we have to subtract i think that's supposed to be minus if i'm not wrong no we have to subtract what flows out of this state you know.

That's the probability that i'm in state x in the first place times the rate w of going out of the state.

And these rates.

That's the w. How do i get out of this state or at which rate do i get out of this state and these transition rates w that's basically also a transition matrix a large matrix these transition rates define the stochastic transitions between states in our systems and that's what you typically have in the first place and you can typically have these rates based on fatalities.

To say phenomenological arguments the master equation is typically a phenomenological equation where you define these rates based on simple modeling assumptions that you make about your system for example what is the probability that i have one more covert case than yesterday and that would be one such as position rate how does that depend on the number of cases i already have.

That that would go into this transition rates.

This master equation again it's a little bit simple it's technological you have to balance these two contributions it's a little bit simpler but it's still hardly ever solvable yeah and numerically that's pretty easy it's solvable actually.

It's not.

Much part of this lecture because it's a numerical thing um let me give you some flashy color this one here uh if you want to have simple stochastic simulations you can solve this uh equation by using something called the GILLESPIE ALGORITHM.

If you just google that like you'll find a ton of literature on this the very simple algorithm to solve approximately or to sample trajectories from master equations and with this you can basically if you know how to program in a few hours you can have a stochastic simulation but analytically you know this is not this master equation is not that convenient.

So we have to make approximations to this master equation.  i'm sorry is this example come to that in the end yeah where's the equation okay.

### Slide 9

skipped :-(

### slide 10 & 11

The way you do that is basically do you do a taylor expansion no that means that you have a taylor expansion in your state x yeah you expanded x or you expand x in these transitions and the sizes of your transitions.

What you assume that is del is that is delta x here the jumps that you make in the system are very small.

That the only ever increment for example the number of cases in very small steps and then you can tailor expand in this in these uh steps here.

For example delta x x prime is the previous state x is the current state and then you assume that the change from the previous state to the next state is always small.

It's a continuum approximation and what you can then do is you can formally write on a taylor expansion of the master equation.

You do a lot of bookkeeping of terms and what you get is something that then in the end indeed then looks like a taylor expansion.

With uh this prefecture alpha n and this alpha n is basically all the terms that you get from the taylor expansion and it's given by an integral over these transition rates that's called also the jump moments.

So the moments of these transitions.

You know that the probability the probability distributions uh distribution is described by moments like the variance the mean higher order moments yeah and these prefectures here and the taylor expansions are the moments of the transition rates they're also called jump moments.

And.

That's that's how they're defined and this is still doesn't look very convenient it's called the chromosome expansion but it doesn't look very convenient.

What you do know is you arbitrarily stop this expansion in the second order yeah.

What you then get if you get it do it to the second order is uh we've got p of x t that's equal to minus del x alpha one of x p of x t plus second moment second order one half del x squared alpha two of x p of x t yeah and that's becomes a little box no because it has a name after the name is called the plunk equation.

As i said we arbitrarily truncated the taylor expansion after the second order and i mean by arbitrary i mean that it's really arbitrary if you if you normally truncate something you would say okay that's good enough it gets better if i take into account higher order higher orders for the equation that's typically that's not not always the case you know it's an arbitrary cutoff after the second order but it's uh has some intuitive meaning you know.

This term here if you look at this what what does this what does this first order derivative here what does it do think about it what this derivative do it shifts the probability distribution to the left and right.

If this is positive here and then it will go to the right and if it's negative it will go to the left.

What it does here it doesn't change the shape of the distribution but it changes approximation but it moves it around yeah and because it does that it's called the drift term and this drift term as i said has the property that the time evolution of this average of x is just given by this drift term alpha one yum.

Yeah and.

Average okay.

This first term describes the deterministic evolution of the probability distribution the second term can also be complicated but it has this second order derivative here yeah and second order derivatives what do they do they minimize fluctuations in your probability distribution they smooth everything out suppose that you have initially a fixed a small localized distribution like a delta distribution or.

Where your system is at a very confined state then the second term will make this distribution wider and wider typically yeah and because it does that and because it looks like it this is to record the diffusion term.

The focal plug equation we have a very nice separation like in the launch of the equation between the drift.

The digital deterministic components and between the effects that reshape and broaden the probability distribution because of noise and that's described by this diffusion term.

The focal plane equation as you can see in the assumptions that we made here we basically assumed that this delta x.

The uh the jumps that i make in this system if i go from x to x prime or the other way around that these are small.

Implicitly that means that we make very strong constraints on our transition rates or how the system can evolve and essentially essentially we assume that it is that it involves in the continuous way and this is what you get if your system is very large.

So you could say uh if you say you have like oil in water then you have a lot of molecules and if you add another water molecule into your glass yeah then the actual concentrations will not change that much.

So these are one of the some of the scenarios where you're actually then it's fine to look at the fact focus equation and i'll show you.

A specific scenario of uh this focal plunk equation and how it can feel.

We come to the example part of the lecture and.

We're roughly one hour.

I'll show you some examples and um those of you who are phd students who know all of this can drop out if you want yeah or just read it online and for the others i'll go through the examples uh quickly and then you can on the website you can then download the slides go to the calculations 