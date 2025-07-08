# Looping Constructs in JavaScript

## Overview

Looping constructs in JavaScript allow you to execute a block of code repeatedly based on a condition or a set of values. The most common looping constructs are `for`, `while`, and `do...while` loops.

## For Loop

The `for` loop is used when you know the number of iterations beforehand. It consists of three parts: initialization, condition, and increment/decrement.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## While Loop

The `while` loop continues to execute as long as the specified condition is true. It checks the condition before each iteration.

```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

## Do...While Loop

The `do...while` loop executes the block of code once before checking the condition. It guarantees that the code will run at least once, even if the condition is false initially.

```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

## For...In Loop

The `for...in` loop is used to iterate over the properties of an object. It iterates over enumerable properties, including those inherited from the prototype chain.

### Syntax

```javascript
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]);
}
```

## For...Of Loop

The `for...of` loop is used to iterate over iterable objects like arrays, strings, and other collections. It provides a simpler syntax for iterating over values.

```javascript
const arr = [1, 2, 3];
for (let value of arr) {
    console.log(value);
}
```
