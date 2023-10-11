---
layout: post
title: .css | TailwindCSS 笔记
keywords: [md]
excerpt: 一直听说“全栈项目 = Next.js + TailwindCSS + HeadlessUI”，但是 TailwindCSS 到底是啥，之前一直妹整明白
---

> 一直听说“全栈项目 = Next.js + TailwindCSS + HeadlessUI”
但是 TailwindCSS 到底是啥，之前一直妹整明白
> 

## 思路：utility-first

> [https://tailwindcss.com/docs/utility-first](https://tailwindcss.com/docs/utility-first)
> 

传统设计需要根据 html 中的结构，在 CSS 中给相应的元素/class/id 定义所需要的所有样式 style。

问题很明显：

- 最低效的情况下，每个 `<div/>` 都要定义一个 class。
- 每个定义里包含若干不同的性质，背景颜色、字体、边框样式等等都挤在一个大括号里，耦合过强。

TailwindCSS 的思路名叫 utility-first, 预先定义一批“性质-取值”的组合，每个组合给出一个有规律命名的类。使用时，一个 `<div/>` 后面声明几个甚至几十个不同的 class。缺点就是不灵活了，每个性质只搭配有限几种取值，且类的数量很多。好处是——

- 不用绞尽脑汁给类取名字
- CSS 不会再变大了（也可以说已经大得不能再大了）
- 修改视觉效果时更换一个类，而不是修改类的定义，也就不用担心对类的修改在自己不记得的地方生效。

与之相对的另一种思路，是直接用 html 元素的 style 属性，或者用 module.css 让样式只对某一 component 生效。TailwindCSS 派对这种方法的批评是：

- 每个取值都是设计者拍脑袋想出来的，一个项目要拍太多次脑袋，容易风格不统一。
- 难以做 responsive design （真的吗？很怀疑）
- 难以处理鼠标悬浮、聚焦等等状态（这玩意应该由 CSS 处理吗？）

utility-first 在维护性方面收到批评的一点是，很多地方要不断重用相同的组合，少了一点封装和抽象。TailwindCSS 对此的辩护是，可以抽象出 components 和 partials（见下节），或者使用编辑器的多光标功能。（绷……）

## 技术细节

- 样式重用
- 状态，比如鼠标悬浮、聚焦
- Responsive design
- 夜间模式
- 添加自定义样式
- 函数和 directives

### 状态，比如鼠标悬浮、聚焦

在正常的类名字之前添加 `<状态>:` 标记，用来指明在相应状态时的样式。这些状态可以叠加，之间用 `:` 分隔。比如 `<button class="hover:bg-sky-700">`

可以标记的状态：[https://tailwindcss.com/docs/hover-focus-and-other-states#appendix](https://tailwindcss.com/docs/hover-focus-and-other-states#appendix)

- Pseudo-classes
    - 举例： [https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-class-reference](https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-class-reference)
        - `hover:`, `focus:`, `active:`
        - `first:`, `last:`, `odd:`, `even:`
        - `required:`, `invalid:`, `disabled:`: 主要用在 `<form>` 中
    - 需要父元素的状态信息时，
        - 如果因为嵌套，存在多个 group 时，可以给每一个父元素的类命名 `group/<name>`, 子元素的类名需要写在伪类的后面，有点反直觉 `group-hover/<name>:`
        - 给父元素添加 `group` 的 class，然后给需要变化的子元素添加 `group-<pseudo-class>:` 前缀。如 `group-hover:`
        - 当需要更细致的选择时，可以在子元素的 group 后面添加自定义内容，如 `group-[.is-published]:`, `group-[:nth-of-type(3)_&]:`
    - 需要姊妹元素的状态信息时：
        - 给被跟踪的姊妹元素添加 `peer` class, 被跟踪的元素只能在跟踪元素的前面。
        - 其余特性类比 group
- [Pseudo-elements](https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-elements), like `::before`, `::after`, `::placeholder`, and `::selection`
    - 写作 `before:` 等等，默认相当于 `before:content-['*']`
    - 当想要调整 content 以外的性质时，需要指明 `before:block`, `before:absolute`, `before:-inset-1` 等等
    - `placeholder:` 用于调整表格中代填内容的样式
    - `file:` 上传文件按钮的样式
    - `list:` 列表开头的
    - `selection:` （鼠标）选中文字之后的样式
    - `first-line:`, `first-letter:` 杂志常用的首行、首字母的特殊样式
- [Media and feature queries](https://tailwindcss.com/docs/hover-focus-and-other-states#media-and-feature-queries), like responsive breakpoints, dark mode, and `prefers-reduced-motion`
    - 结合响应式设计 responsive design 一节，使用 `md:`, `lg:` 等前缀
    - `dark:` 黑夜模式
    - `motion-reduce:` 用户选择屏蔽动画效果时的样式，`motion-safe:` 只有不屏蔽动画才会生效的样式
    - `portrait`,`landscape` 屏幕朝向
    - `print:` 打印时的样式
    - `supports-[...]` 当浏览器支持某种特性时启动。也可在 `tailwind.config.js` 文件中设置 `theme.supports` 变量
- [Attribute selectors](https://tailwindcss.com/docs/hover-focus-and-other-states#attribute-selectors), like `[dir="rtl"]` and `[open]`
    - `aria-*` modifier to conditionally style things based on [ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes).
    - `data-[key=value]` data 参数的值
    - `ltr:` & `rtl:` 从右往左书写的文字
    - `open:` & `close:` 用于可以展开的元素
    - 自定义选择符：用中括号包围，`&` 开头选择元素，下划线表示空格，如 `[&:nth-child(3)]:`, `[&_p]:mt-4`, `[@supports(display:grid)]:grid`

### Responsive design

| Breakpoint prefix | Minimum width | CSS |
| --- | --- | --- |
| sm | 640px | @media (min-width: 640px) { ... } |
| md | 768px | @media (min-width: 768px) { ... } |
| lg | 1024px | @media (min-width: 1024px) { ... } |
| xl | 1280px | @media (min-width: 1280px) { ... } |
| 2xl | 1536px | @media (min-width: 1536px) { ... } |

移动端优先的思路，所有尺寸限定的都是大于该宽度时的样式。

要限定上限，要用 `max-<size>:` 比如 `md:max-xl:flex`

要想自定义 breakpoints，可以看 [customizing breakpoints documentation](https://tailwindcss.com/docs/breakpoints).

也可以单独设定 `min-[320px]:`, `max-[600px]:` 等等

### 夜间模式

默认使用操作系统的设定。

要想手动设定，须在 tailwind.config.js 中加入

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // ...
}
```

然后含有 `class=’dark’` 的元素的子元素都时夜间模式的效果

这个[链接](https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection)包含了同时兼容系统设置和手动设置的做法

### 样式重用

- 编辑器的多光标功能：[https://code.visualstudio.com/docs/editor/codebasics#_multiple-selections-multicursor](https://code.visualstudio.com/docs/editor/codebasics#_multiple-selections-multicursor)
- 标记语言的循环语法
- react 等框架的 component 概念
- `@apply` and `@layer` in the [Functions & Directives](https://tailwindcss.com/docs/functions-and-directives#layer) documentation.
- 避免提前过度抽象

### 添加自定义样式

- 编辑 `tailwind.config.js`, 文档在此：[https://tailwindcss.com/docs/theme](https://tailwindcss.com/docs/theme)
- [Arbitrary properties](https://tailwindcss.com/docs/adding-custom-styles#arbitrary-properties) 和 [arbitrary variants](https://tailwindcss.com/docs/adding-custom-styles#arbitrary-variants)
- [Using CSS and @layer](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer), 使用多个 CSS 文件时，需在 postcss.config.js 文件中添加 `plugins: {’postcss-import’:  {},}` 字段
- [Writing plugins](https://tailwindcss.com/docs/adding-custom-styles#writing-plugins)

### 函数和 directives

directives 是 CSS 文件中的 `@` 开头的语句

`@layer` 用来把一些需要打包的样式绑在一起，后面三个取值：base, components, utilities

`@apply` 后面接 TailwindCSS 已经定义的类，表示把类的定义移植于此处。

**[`@config`](https://tailwindcss.com/docs/functions-and-directives#config)** 指定所在 CSS 文件需要使用的 TailwindCSS 配置文件，放在 @import 语句后面

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
}

@layer components {
  .btn-blue {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  }
}

@layer utilities {
  .filter-none {
    filter: none;
  }
  .filter-grayscale {
    filter: grayscale(100%);
  }
}
```

TailwindCSS 还自定义了一些 CSS 函数：

- `theme()`: 返回 config 文件中的参数，比如
    
    ```css
    .content-area {
      height: calc(100vh - theme(spacing.12));
    }
    ```
    
- [`screen()`](https://tailwindcss.com/docs/functions-and-directives#screen): 以预定义的 breakpoint 为参数，避免代码中间出现硬编码的数值
    
    ```css
    @media screen(sm) { /* ... */ }
    ```
    

## 在 Next.js 项目中安装 TailwindCSS

> [https://nextjs.org/docs/pages/building-your-application/styling/tailwind-css](https://nextjs.org/docs/pages/building-your-application/styling/tailwind-css)
> 

在命令行

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

如此会在项目的根目录新建 `tailwind.config.js` & `postcss.config.js` 文件

然后编辑 `tailwind.config.js` 文件，添加需要用到 TailwaindCSS 的路径

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

在全局样式表 `styles/globals.css` 中引入 TailwaindCSS

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

在 `pages/_app.js` 中引入全局样式表。`@` 的含义不明

```jsx
// These styles apply to every route in the application
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

在项目的 components 中使用 TailwindCSS 的类：

```tsx
export default function Page() {
  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
}
```