## Day 13
---

In JavaScript we can use condition statements on methods | properties while returns `'object | null'`.
This is possible because by default javascript uses the following condition to process instructions:

```javascript
if (condition) {
    // do something (true case)
} else {
    // do something (false case)
}
```

eg :->

```javascript
let str = ''.someMethod(input);// object | null
if(str) {
    // process for true case
} else {
    // process for false case
}
```