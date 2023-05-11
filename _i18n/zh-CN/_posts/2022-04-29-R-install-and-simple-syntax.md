---
layout: post
title: .r | R语言入门笔记
keywords: [md,r,mpipks-note]
excerpt: 本文也是马克思·普朗克复杂物理研究所《非平衡态集体过程》第9讲的笔记。
---

> 本文也是马克思·普朗克复杂物理研究所《非平衡态集体过程》第9讲的笔记。
> 

最近在蹭一门数学系的读书课，题目叫“非线性时间序列分析”。本来以为会是数学系的人抢物理系动力学方向的饭碗用的（可能实际上也确实是，或者更有可能是反过来），但是老师在前几讲一直把重点放在何种定理如何证明上面。数学系的嘛，这种对公理化系统的喜爱可以理解。但是发现我们几个上课的对这些证明都不太感兴趣之后，~~直接一个发卡弯漂移，教我们用 R 语言分析现实数据，现在新课还没上，不过可能是以股票数据做例子，我的老天鹅，这也太“经世济民”了吧……~~ 最后期末作业发现大家居然又都选择做 PPT 讲中心极限定理的证明，经世济民计划无疾而终。

以下是为了新课程，我自己提前做的准备。

## 下载、安装、环境配置（精神病版）

- [https://cloud.r-project.org/](https://cloud.r-project.org/)
- 看这一个链接就够了：[https://marketplace.visualstudio.com/items?itemName=Ikuyadeu.r](https://marketplace.visualstudio.com/items?itemName=Ikuyadeu.r)
- [https://github.com/randy3k/radian](https://github.com/randy3k/radian)
- [https://github.com/nx10/httpgd](https://github.com/nx10/httpgd)

`Fedora Linux` + `R` + `radian` + `vscode` + `R extension for vscode`

1. 在官网（[https://cloud.r-project.org/](https://cloud.r-project.org/)）下载并安装 R [解释器](https://python-interpreter)。
2. 在命令行输入 `R` 打开解释器，在 R 中输入 `install.packages("languageserver")` 
3. 在 vscode 的市场页面搜索 “R”，安装 R 语言插件。
4. 安装 radian：
    1. 在合适的 python [虚拟环境](https://pyhton-virtualenv) 里输入 `pip intall radian`
    2. 用 radian 取代 R：编辑 `~/.bashrc` , 在其中加入一句`alias r="radian"` ，重启命令行
    3. 在 vscode 的设置中找到 `R>Rterm: Linux`, 输入 radian 的安装路径（在命令行中输入 `which R` 可以找到）
5. 在 vscode 的市场页面搜索 “R debugger”，安装 `R debugger for vscode`
6. 在命令行输入 `R` 打开解释器，在 R 中输入 `install.packages("httpgd")`，安装可视化工具 `httpgd`

## 简单语法

来自马克思·普朗克复杂物理研究所《非平衡态集体过程》第9讲，这老师的讲课顺序简直了……

R 的语法也简直了……

### 简单数据结构 Some data types

```r
# vector
a <- c(1,2,3,NA)
b <- c("m","f","f","m")
# using a value
b[2]

# list
list.ab <- list(number=a, gender=b)
list.ab$number
list.ab[[1]]

# factors (categorial variable)
f <- factor(b)
f
# [1] m f f m f m m
# levels: f m
levels(f) <- c("female", "male")

# dataframe (lists of vectors of the same length)
x <- c(1,2,3)
y <- c("aa","bb","cc")
z <- c(TRUE, FALSE, TRUE)
df <- data.frame(first=x, second=y, third=z)
View(df)
# |      | first | second | third |  
# |    1 |     2 |     aa |  TRUE |
# |    2 |     3 |     bb | FALSE |
# |    3 |     5 |     cc |  TRUE |
```

### 控制流 Loops, conditional statements

```r
# for loop
for(i in 1:5) {
	print(i)
}
# while loop
while(!finished) {
	print("Hello")
}
# if statement
if(i<5) {
	print("Hello")
} else {
	print("Not Hello")
}
```

### 函数 Functions

```r
# calling a function
rnorm(5,mean=1,sd=1)

# defining a function
mysum <- function(a,b,c=1) { a + b + c }
mysum(1,1)
```

### 复杂数据类型 `data.table`

Some comparison:

- `data.table`: R package, fast and memory efficient
- `python.pandas`: python implementation of data frames
- `dplyr`: highly popular, easy to learn

```r
library(data.table)
dt <- as.data.table(df)
```

```r
# read and write
flights <- fread("path/to/your/flights.txt")
weather <- fread("path/tp/your/weather.txt")
```

Making data tidy can simplify the following analysis.

- Every column is an observable.
- Every row is an observation.

```r
# making data tidy
melt( dt,
      id.vars = "ID",
      value.name = "expression",
      variable.name = "cell"
)
# making data messy
dcast(dt, ID ~ cell+expression) # not understand
```

Get item

```r
d[i, j, by] # take `d`, subset rows using `i`, then **calculate** `j` grouped by `by`
# examples
planes[engines == 4]

# slice the 2 columns
planes[, .(tailnum, year)] 
# groupby and calculate
flights[, .(mean_delay = mean(dep_delay, na.rm=T)), by=carrier]
flights[time_hour>20, .(mean_delay=mean(dep_delay,na.rm=T)), by=.(month, origin)]
# math calculations
flights[, speed_kmh := 60*1.61*distance/air_time]
flights[, resc_distance := distance/mean(distance), by=carrier]
```

Merge 2 tables

```r
# left join
merge(a,b,all.x=T)
b[a] # same as above

# right join
merge(a,b,all.y=T)
a[b] # same as above

# inner join
merge(a,b, all=F)
a[b, nomatch=0]

# full join
merge(a,b,all=T)
```

Chaining operations

```r
# data.table way
weather[, ws_kmh:=1.61*wind_speed][, .(mean_ws=mean(ws_kmh)), by=month]
# use operator %>% to take the result on the left as the 1st argument on the right
library(magrittr)
weather[, ws_kmh:=1.61*wind_speed] %>%
.[, .(mean_ws = mean(ws_kmh)), by=month] %>%
head()
```
