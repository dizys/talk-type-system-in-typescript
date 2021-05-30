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

The type system defines the interpretation of binary numbers for a language, mapping the values onto the underlying hardware.

<div grid="~ cols-2 gap-4">
<div>

### Static vs Dynamic type system

**Static typing**
- Variables have types.
- Compilers ensures (at compile time) that type rules are obeyed.

**Dynamic typing**
- Variables do not have types, values do.
- Compilers/Interpreters ensures (at run time) that type rules are obeyed.

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

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

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
- Object: <span class="faded-font">optional properties</span>
- Function
- Void
- <span class="golden-font">Unknown</span> = U
- <span class="golden-font">Never</span> = ∅
- <span class="golden-font">Any</span>

</div>
<div>

```ts {1-3|5|all}
let a = true;
let b = 1;
let c = "string";

let arr = [1, 2, 3];
let obj = {
  a: "aa",
  v: "sdd",
};

function test(arg1: string, arg2: number) {
  return Number(arg1) + arg2;
}
```

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
layout: center
class: text-center
---

# Learn More

[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) / [GitHub Repo](https://github.com/microsoft/typescript)
