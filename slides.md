---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: ./images/typescript-bg.png
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
title: Type System within TypeScript
# some information about the slides, markdown enabled
info: |
  ## Type System within TypeScript

  Explore a powerful type system through this talk if you have never used TypeScript before.

  by Ziyang Zeng
---

# <span class="golden-font">Type</span> System within <span class="golden-font">Type</span>Script

Ziyang: Explore the Rich Expressiveness from a Powerful Type System!

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Start the journey <carbon:arrow-right class="inline"/>
  </span>
</div>

<div
  class="abs-bl m-6 text-sm opacity-50">
  Jun 2021 @ Hotstar
</div>

<style>
.golden-font {
  background-image: linear-gradient(45deg, #f9b208, #f98404);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
---

# Type System

A type system defines the rules to categorize data (values, expressions).

<div grid="~ cols-2 gap-4">
<div>

### Static vs Dynamic type system

**Static typing**
- Variables have types.
- Compilers ensures (at compile time) that type rules are obeyed.

**Dynamic typing**
- Variables do not have types, values do.
- Compilers/Interpreters ensures (at run time) that type rules are obeyed.

### Structural vs Nominal

</div>
<div>


### Strong vs Weak typing

**Strong typing**

- Does not allow variables to be used in a way inconsistent with their types.

**Weak typing**

- Allows many ways to bypass the type system (e.g., pointer arithmetic).

### Subtype

A relation between types. e.g., `{a, b, c}` is a subtype of `{a, c}`, `a|c` is a subtype of `a|b|c`.

</div>
</div>

---


<div style="position: absolute; bottom: 50px;">

# What is <a target="_blank" href="https://www.typescriptlang.org"><span class="ts-title">TypeScript</span></a>?

- TypeScript ≈ <ins>JavaScript</ins> + <ins>static typing</ins>
- Superset of JavaScript that transpiles to JavaScript
- Expressive type system with <span class="golden-font">SOA</span> type inference capabilities
- "JavaScript that scales."

</div>

<style>
.ts-title {
  background-image: linear-gradient(45deg, #4EC5D4, #146b8c);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.golden-font {
  background-image: linear-gradient(45deg, #f9b208, #f98404);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Popularity

| # Ranking | Programming Language | Percentage |
| - | -------------------- | ---------- |
| 1 | JavaScript | 18.756% |
| 2 | Python | 16.628% |
| 3 | Java | 11.680% |
| 4 | Go | 7.829% |
| 5 | Ruby | 7.588% |
| 6 | C++ | 6.985% |
| 7 | <span class="ts-title">TypeScript</span> | 6.604% |
| 8 | PHP | 5.081% |

<span style="font-size: 14px; opacity: 0.3;">Courtesy of https://madnight.github.io/githut/#/pull_requests/2021/1</span>


<style>
.ts-title {
  background-image: linear-gradient(45deg, #4EC5D4, #146b8c);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Where does TypeScript advance?

<div grid="~ cols-2 gap-4">
<div>

### Dynamic typing

In JavaScript:

```js
let user = {
  id: 1,
  username: "admin",
  password: "123456",
}

let company = {
  name: "hotstar",
  users: [user, ...],
  running: true
}

function getValue(obj, key) {
  return obj[key]
}

let username = getValue(user, "username")
let isCompanyRunning = getValue(company, "running")
```

</div>
<div>

### Static typing but lack expressiveness

In Golang:

```go
user := User{
  Id: 1,
  Username: "admin",
  Password: "123456"
}

// ...

func getValue(obj interface{}, key string) interface{} {
	objVal := reflect.ValueOf(obj)
	return objVal.FieldByName(key).Interface()
}

userId := getValue(user, "Id").(int)
isCompanyRunning := getValue(company, "Running").(bool)
```

</div>
</div>

---

# A little peek at TypeScript's solution

```ts {monaco} {height: '400px'}
let user = {
  id: 1,
  username: "admin",
  password: "123456",
}

let company = {
  name: "hotstar",
  users: [user],
  running: true
}

function getValue<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
```

---

# TypeScript Type Features

- Erasable
- Gradual
- Structural
- Generic
- Inferable
- Expressive
- Object-oriented
- Functional

---

# TypeScript Basics

### Basic types

<div grid="~ cols-2 gap-4">
<div>

- <span class="faded-font">Boolean</span>
- <span class="faded-font">Number</span>
- <span class="faded-font">String</span>
- Array
- Tuple
- Enum
- Null and Undefined
- Object/Interface: <span class="faded-font">optional properties</span>
- Function
- Void
- <span class="golden-font">Unknown</span> = U
- <span class="golden-font">Never</span> = ∅
- <span class="golden-font">Any</span>

</div>
<div>

```ts {all|1|2|4-7|9-11}
let arr = [1, 2, 3];
let tuple: readonly [number, number, number] = [1, 2, 3];

interface User {
  name: string;
  phone?: string;
}

function test(arg1: string, arg2: number) {
  return Number(arg1) + arg2;
}

```

<br>
<PlaygroundLink href="https://embeddable.vercel.app/?code=bGV0IGFyciA9IFsxLCAyLCAzXTsKbGV0IHR1cGxlOiByZWFkb25seSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPSBbMSwgMiwgM107CgppbnRlcmZhY2UgVXNlciB7CiAgbmFtZTogc3RyaW5nOwogIHBob25lPzogc3RyaW5nOwp9CgpmdW5jdGlvbiB0ZXN0KGFyZzE6IHN0cmluZywgYXJnMjogbnVtYmVyKSB7CiAgcmV0dXJuIE51bWJlcihhcmcxKSArIGFyZzI7Cn0KCnR5cGUgVGVzdEZ1bmN0aW9uID0gKGFyZzE6IHN0cmluZywgYXJnMjogbnVtYmVyKSA9PiBudW1iZXI7CgpsZXQgdGVzdDIgPSB0ZXN0Owo%3D" />

</div>
</div>

<style>
.faded-font {
  opacity: 0.5;
}
.golden-font {
  background-image: linear-gradient(45deg, #f9b208, #f98404);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Union Type

`|`: "may be any one of those types"

```ts {monaco} {height: '380px'}
interface TextMessage {
  type: "text";
  content: string;
}

interface Hotshot {
  type: "hotshot";
  imageURL: string;
}

// type Message = TextMessage | Hotshot;

function send(message?: TextMessage | Hotshot) {

}
```

---

# Union Type

`|`: The union of type sets.

```ts {monaco} {height: '380px'}
interface User {
  name: string;
  gender: "male" | "female" | "other";
  phone?: string;
}

type Union1 = string | unknown;

type Union2 = string | never;
```

---

# Intersection Type

`&`: The intersection of type sets.

```ts {monaco} {height: '380px'}
type I1 = string & unknown;

type I2 = string & never;

interface F {
  f: number;
  b: string;
}

interface B {
  b: string;
  c: boolean;
}

type FBI = F & B;

let fbi: FBI = {
  // ?
}
```

---

# Generics

"Type variables"

```ts {monaco} {height: '380px'}
type PropertyType<T, K extends keyof T> = T[K];

interface User {
  username: string;
  age: number;
  gender: "male" | "female" | "other";
}

type AgeType = PropertyType<User, "age">


type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Picked = MyPick<User, "username" | "age">;
```

---

# Conditional Type

Ternary operator, but for types.

```ts {monaco} {height: '380px'}
interface User {
  username: string;
}

interface Admin extends User {
  admin: true;
}

type CT<T> = T extends User ? string : number;
type CT1 = CT<Admin>;

type MyNonNullable<T> = T extends null | undefined ? never : T;
type A = MyNonNullable<string | number | undefined>;
```

---

# `infer` in Condition

Declaratively introduce a new generic type variable using type inference.

```ts {monaco} {height: '380px'}
type ItemTypeOfArray<T extends any[]> = T[number];

// or use infer...

type ItemType = ItemTypeOfArray<[number, string, boolean]>;



type TestFunction = (arg1: string, arg2: number) => number;

type FuncReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type TestFunctionReturnType = FuncReturnType<TestFunction>


```

---

# Template Literal Types

THE most expressive literal typing in the world so far.

```ts {monaco} {height: '380px'}
type ChinaPhone = `+86-${number}`;
let phone: ChinaPhone = '+86-233123';

type City = 'beijing' | 'shanghai' | 'shenzhen' | 'guangzhou';
type Direction = 'east' | 'west' | 'north' | 'south';
type MyLocation = `${City}-${Direction}`;
let location1: MyLocation = 'beijing-north';

type MatchPair<S extends string> = S extends `[${infer A},${infer B}]` ? [A, B] : unknown;
type Pair1 = MatchPair<'[1,2]'>;
type Pair2 = MatchPair<'[foo,bar]'>;

type Trim<S extends string> =
  S extends ` ${infer T}` ? Trim<T> :
  S extends `${infer T} ` ? Trim<T> :
  S;
type Trimmed1 = Trim<'     hello  '>;
type Trimmed2 = Trim<' hello       '>;

type Join<T extends unknown[], D extends string> =
  T extends [] ? '' :
  T extends [string | number | boolean | bigint] ? `${T[0]}` :
  T extends [string | number | boolean | bigint, ...infer U] ? `${T[0]}${D}${Join<U, D>}`:
  string;
type Joined1 = Join<[1, 2, 3, 4], '.'>;
type Joined2 = Join<['foo', 'bar', 'baz'], '-'>;

```

---

# Type Frankenstein

```ts {monaco} {height: '380px'}

type PathImpl<T, Key extends keyof T> =
  Key extends string
  ? T[Key] extends Record<string, any>
    ? | `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof any[]>> & string}`
      | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}`
    : never
  : never;

type PathImpl2<T> = PathImpl<T, keyof T> | keyof T;

type Path<T> = PathImpl2<T> extends string | keyof T ? PathImpl2<T> : keyof T;

type PathValue<T, P extends Path<T>> =
  P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Rest extends Path<T[Key]>
      ? PathValue<T[Key], Rest>
      : never
    : never
  : P extends keyof T
    ? T[P]
    : never;

declare function getValue<T, P extends Path<T>>(obj: T, path: P): PathValue<T, P>;

const object = {
  name: 'Diego Haz',
  age: 30,
  account: {
    username: 'diego',
    password: '123456',
  },
  projects: [
    { name: 'Reakit', contributors: 68 },
    { name: 'Constate', contributors: 12 },
  ],
} as const;

getValue(object, "account.");

```

<span style="font-size: 14px; opacity: 0.3;">Courtesy of https://github.com/ghoullier/awesome-template-literal-types</span>

---

# Turing Completeness

---

# Fun Projects


---
layout: center
class: text-center
---

# Learn More

[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) / [GitHub Repo](https://github.com/microsoft/typescript)
