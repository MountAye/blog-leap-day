---
layout: post
title: .rs | Rust 入门笔记
keywords: [md]
excerpt: introduction to Rust and some simple syntax
---

On youtube.

## What is Rust

fast and powerful, system language

web development through webAssembly

No garbage collection, also no need to manege memory, which makes language more tedious

Use Cargo to manage package

## Install

Windows: .exe

Linux: run the curl script.

```bash
rustup --version
rustc --version 
cargo --version
```

vscode Rust(rls) plugin

## empty folder and compile

```bash
mkdir rustsandbox
cd rustsandbox
touch hello.rs
```

```bash
fn main() {
	println("Hello World!");
}
```

## initialize a project with cargo

```bash
cargo init
```

bettertmil plugin for highlight of `.tmil` file.

```bash
cargo run # compile and debug
cargo build
cargo build --release # for production
```

## print line

```bash
touch src/print/rs
```

```rust
// in print.rs
pub fn run() {
	println!("Hello World!");
	// Basic formatting
	println!("Number: {}",1); 
	println!("{} is from {}","Brad","Mass");
	// Positional arguments
	println!("{0} is from {1} and {0} likes to {2}.","Brad","Mass","code");
	// Named argument
	println!("{name} likes to play {activity}.", name="John", activity="baseball")
	//Placeholder traits
  println!("Binary: {:b} Hex: {:x} Octal: {:o}", 10,10,10);
	//Placeholder for debuging
  println!("{:?}", (10,True,"hello"));
	//Basic Math
	println!("10+10={}",10+10)
}
```

```rust
// in main.rs
mod print;

fn main() {
	print::run();
}
```

## Variable

```rust
// var.rs
pub fn run() {
	let name="Brad";
	let age = 37;
  age = 38; //cannot assign twice
	let mut age = 37;
	age = 38;
	println!("My name is {} and I am {}",name, age);
	// constant
	const ID:i32 = 001;
	println("ID: {}",ID);
	// assign multiple variables
	let ( my_name, my_age ) = ("Brad", 37);

}
```

## Primitive Types

```rust
// type.rs
/*
Primitive Types:
Integers: u8,i8,u16,i16,...u128,i128
Floats: f32,f64
Boolean: bool
Characters: char
Tuples
Arrays
*/

// Rust is a static type language, but compiles usually can infer
 
pub fn run() {
	// default is i32, f64
	let x = 1; 
	let y = 2.5;
	let z: i64 = 454544445554;
	// find max size
	println!("Max i32:{}", std::i32::MAX);
	println!("Max f64:{}", std::f64::MAX);
	// boolean
	let is_active = true;
	// get boolean from expression
	let is_greater = 10 > 5;
	// char
	let a1 = 'a'; // has to be single quotes
	let a2 = 'ab'; // error, can only be one character
	let a3 = '\u{1F600}';
}
```

## Strings

```rust
// string.rs

// primitive str = immutable fixedlength string
// String = growable heap-allocated data structure - use when I need to modify or own srtring data

pub fn run() {
	let mut hello = String::from("Hello ");
	//get length
	println!("Length: {}", hello.len());
	hello.push('W');
	hello.push_str("orld");
	// immutable
	let hello2 = "Hello";
	// methods
	println!("Capacity {}", hello.capacity());
	println!("Is empty {}", hello.is_empty());
	println!("Contains 'World' {}", hello.contains("World"));
	println!("Replace {}", hello.replace("World","there"));
	// loop through string by whitespace
	for word in hello.split_whitespace() {
		println!("{}",word);
	}
	// Create string with capacity
	let mut s = String::with_capacity(10):
	s.push('a');
	s.push('b');
	// Assertion testing
	assert_eq!(2,s.len());
}
```

## tuple

```rust
//tuples.rs

// can be different types
pub fn run() {
	let person: (&str,&str,i8) = ("Brad","Mass",37);
	println!("{} is from {} and is {}", person.0, person.1, person.2);	
}
```

## Array

```rust
// array.ts

use std::mem

pub fn run() {
	let numbers: [i32,5] = [1,2,3,4,5]; // length has to be exact
	println!({:?},numbers);
	// get single value
	println!("Single value{:?}",numbers[0]);
	let mut numbers1: [i32,5] = [1,2,3,4,5];
	numbers1[2] = 20;
	println!("Array length: {}", numbers1.len());
	//arrays are static allocated
	println!("Arry occupies {} bytes", mem::size_of_val(&numbres1));
	// get slice
	let slice: &[i32] = &numbres[0..2];
	println!("")
}
```

## Vector

```rust
//vector.rs

// vectors are resizable arrays
pub fn run() {
	let mut numbers: Vec<i32> = Vec![1,2,3,4];
	// add 
	numbers.push(5);
	numbers.push(6);
	//pop off las values
	numbres.pop();
	// loop through vector values
	for x in numbers.iter(){
		println!("Number: {}", x);
	}
	for x in numbers.iter_mut(){
		*x *= 2; // no idea what the 1st * does
		println!("Number: {}", x);
	}
}
```

## conditional

```rust
//conditional.rs

pub fn run() {
	let age: u8 = 18;
	let check_id: bool = false;
	let knows_person_of_age = true;

	// if/else
	if age >= 21 && check_id || knows_person_of_age {
		println!("Bartender: what would like to drink?");
	} else if age < 21 && check_id {
		println!("Bartender: sorry you have to leave.");
	} else {
		println!("Bartender: I'll need to see your ID.");
	}

	// short if
	let is_of_age = if age>=21 {true} else {false};
	println!("Is of age: {}", is_of_age);
}
```

## loop

```rust
//loop.rs

pub fn run() {
	let mut count = 0;
	//infinite loop
	loop {
		count += 1;
		println!("Number: {}", count);

		if count > 20 {
			break;
		}
	}
	// while loop (FizzBuzz)
	while count <=100 {
		if count%15 === 0 {
			println!("fizzbuzz");
		} else if count%3 == 0 {
			println!("fizz");
			else if count%5 == 0 {
			println!("buzz");	
		} else {
			println!("{}",count)
		}
		count += 1;
	}	
	// for loop
	for x in 0..100 {
		// ...
	}
}
```

## function

```rust
// function.rs
pub fn run() {
	greeting("Hello","Jane");
	let get_sum = add(5,5);
	//closure
	let n3 = 10;
	let add_sums = |n1: i32, n2: i32| n1+ n2 + n3; //need to find out more
}

fn greeting (greet: &str, name: &str) {
	println!("{} {}, nice to meet you.", greet, name);
}

fn add(n1: i32, n2: i32) -> i32 {
	n1 + n2 // no semi-colum here
}
```

## Pointer/Reference

```rust
// pointer.rs

pub fn run() {
	// primitive
	let arr1 = [1,2,3];
	let arr2 = arr1;
	println!("Values: {:?}", (arr1,arr2));
	// with non-primitive, if you assign another variable to a piece of data, the 1st variable will no longer hold that value. You'll need to use a reference (&) to point to the resource
	let vec1 = Vec![1,2,3];
	let vec2 = &vec1;
	println!("Values: {:?}", (&vec1, vec2))
}
```

## Struct

```rust
// struct.rs

// used to create custome data types

// traditional struct
struct Person {
	first_name: String,
	last_name: String
};

impl Person{
	fn new(first: &str, last: &str)-> Person {
		Person {
			first_name: first.to_string(),
			last_name: last.to_string()
		}
	}
	fn full_name(&self) -> String {
		format!("{} {}", self.first_name, self.last_name)
	}
	// set last name
	fn set_last_name(&mut self, last: &str){
		self.last_name = last.to_string();
	}
	// name to tuple
	fn to_tuple(self)->(String,String){
		(self.first_name,self.last_name)
	}
}

struct Color {
	red: u8,
	green: u8,
	blue: u8,
};

// tuple struct
struct ColorTuple(u8,u8,u8); 

pub fn run() {
	let mut c = Color{
		red: 255,
		green: 0,
		blue: 0,
	};
	c.red = 200;
	println!("Color: {},{},{}",);
	
	let mut ct = ColorTuple(255,0,0);
	ct.0 = 200;
	println!("Color: {},{},{}",ct.0,ct.1,ct.2);

	let mut p = Person::new("John","Doe");
	println!("Person {} {}", p.first_name, p.last_name)
	p.set_last_name("Williams");
	println!("Person {}", p.full_name());
	println!("Person {:?}", p.to_tuple());
}
```

## enumerate

```rust
//enum.rs

// enum is a type with a few definitive values

enum Movement {
	// variants
	Up, 
	Down,
	Left, 
	Right
}

fn move_avatar(m:Movement) {
	match m {
		Movement::Up => println!("Avatar Moving Up"),
		Movement::Down => println!("Avatar Moving Down"),
		Movement::Left => println!("Avatar Moving Left"),
		Movement::Right => println!("Avatar Moving Right")
	}
}

pub fn run() {
	let avatar1 = Movement::Up;
	let avatar2 = Movement::Down;
	let avatar3 = Movement::Left;
	let avatar4 = Movement::Right;

	move_avatar(avatar1);
	move_avatar(avatar4);
	move_avatar(avatar2);
	move_avatar(avatar3);	
}
```

## Command line interface

```rust
// cli.rs

use std::env;

pub fn run() {
	let args: Vec<String> = env::args().collect();
	let command = args[1].clone();
	let name = "Brad";
	let status  = "100%"

	println!("Args: {:?}", args);
	println!("Command: {}", command)

	if command == "Hello" {
		println!("Hi {}, how are you?", name);
	} else if command == "status" {
		prinln!("Status is {}", status);
	} else {
		println!("That is not a valid command.");
	}
}
```