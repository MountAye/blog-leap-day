---
layout: post
title: .ts | TypeScript 入门笔记
keywords: [md]
excerpt: An introduction to Typescript and some simple syntax
---

What is TypeScript:

- static types
- types from 3rd parties can be added with type definition

Dynamic vs Static types

- dynamic: types associated with run-time values, and not explicitly in code
- static: explicitly assign types

Pros and Cons

- pros: more robust, debug, predictability
- cons: more codes to write, requires compilation, **not true typing**

Compiling

- `.ts` or `.tsx` extension
- `TSC` is used
- `tsconfig.json`

# Hands on

## Install

```bash
sudo npm i -g typescript
tsc -v
touch index.ts
```

```tsx
let id: number = 5 
id = `5` // error

```

```bash
tsc index
tsc -- watch index
```

```bash
tsc --init # produces tsconfig.json
```

```json
{
	"outDir": "./dist",
	"rootDir": "/src"
}
```

## Types

```tsx
let id: number = 5
let company: string = "Media"
let isPublished: boolean = true
let x: any = "hello"
x = true // no errors

// array
let ids: number[] = [1,2,3,4,5]
ids.push("hello") // error

let arr: any[] = [1, true, 'hello']

//tuple
let person: [number, string, boolean] = [1, 'Brad', true]

// tuple array
let employee: [number, string][]
employee = [
	[1, 'Brad'],
	[2, 'Sam']
]

// union
let pid: string | number = 22

// enum
enum Direction1 {
	Up, // default is 0
	Down,
	Left,
	Right
}

enum Direction2 {
	Up   = "Up", // default is 0
	Down = "Down",
	Left = "Left",
	Right= "Right"
}

//objects
const user: {
	id: number,
	name: string
} = {
	id: 1,
	name: 'John'
}

type User = {
	id: number,
	name: string
}

const user: User

// type assertion
let cid: any = 1
let customerId = <number>cid
let customerId = cid as number

```

## function

```tsx
function addNum(x: number,y: number): number {
	return x+y
}
//void

function log(message: number | string): void {
	console.log(message)
}
```

## Interfaces

```tsx
interface UserInterface {
	readonly id: number,
	name: string,
	age?: number // optional property
	register(): string
}
const user1: UserInterface = {
	id: 1, // error , read only
name: "brad"
}

interfce MathFunc {
	(x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x+y
```

## Class

```tsx
class Person implements UserInterface{
	private id: number	 // within the class
	protected name: string // within class or extended classes
	salary: number

	constructor(id: number, name: string) {
		this.id = id
		this.name = name
	}
	register() {
		return `${this.name} is registered.`
	}
}

const brad = new Person(1,'Brad')
```

## Subclass

```tsx
class Employee extends Person {
	position: string

	constructor(id: number, name: string, position: string) {
		super(id,name)
		this.position = position
	}
}
const emp = new Employee(3,"Shawn","developer")
console.log(emp.register())

```

## Generics

```tsx
function getArray(items: any[]): any[] {
	return new Array().concat(items)
}
let numArray = getArray([1,2,3,4])
let strArray = getArray(['a','b','c','d'])

numArray.push('hello') // no error, but not what we want

function getArray<T>(items: T[]): T[] {
	return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4])
numArray.push('hello') // error
```

## With React

```bash
npx create-react-app . --template typescript
npm start
touch header.tsx
```

```tsx
export interface Props{
	title: string
	color?: string
}
const Header = (props: Props) => {
	return (
		<header>
		  {% raw %}
			<h1 style={{ color: prps.color ? props.color: "blue" }}>
				{props.title}
			</h1>
		  {% endraw %}
		</header>
	)
}
```