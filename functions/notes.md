# FUNCTIONS IN JAVASCRIPT

## What are functions in JavaScript?

If we want to use set of statements repeatedly, we can use functions. Functions are reusable blocks of code that perform a specific task. They can take inputs (called parameters) and return outputs.

Advantage: reusability. Once a function is defined, it can be called multiple times without rewriting the code.
**NOTE:** Whenever a function is executed a new execution context is created. This means that the variables defined inside the function are not accessible outside of it.

SYNTAX:

```javascript
// Function declaration
function nameOfFunction(parameter1, parameter2) {
    // code to be executed
    return result; // optional
}

// Function Expression
let add = function(a, b) {
    return a + b;
};


// Arrow Function
let multiply = (x, y) => {
    return x * y;
};

```

``` javascript
let password = prompt("Enter your password: ");
let msg = null;
if(password === "sachin"){
    msg = ()=>{
        console.log("Success");
    }
}
else{
    msg = ()=>{
        console.log("Failure");
    }
}

msg(); // Calls the function and executes the code inside it

```

## Key Concepts

In javascript a function can return primitive type and non primitive [objects and function].
Arguments: While calling a function we pass data they are called arguments.

Parameters: The variables in the function definition that accept the arguments are called parameters.

In javascript a function can accept parameters like primitive type and non primitive [objects and function].

Since functions can do majority of the things that objects can do, functions are also called first class citizens.

"FIRST CLASS CITIZENS" means that functions in JavaScript can be treated like any other value. They can be assigned to variables, passed as arguments to other functions, and returned from functions.

## Function expression vs Arrow Function

| **Function Expression**                                | **Arrow Function**                                     |
| ------------------------------------------------------ | ----------------------------------------------------------- |
| \`\`\`javascript                                       | \`\`\`javascript                                            |
| const add = function(a, b) {                           | const add = (a, b) => {                                     |
| return a + b;                                          | return a + b;                                               |
| };                                                     | };                                                          |
| \`\`\`                                                 | \`\`\`                                                      |
| - `this` refers to the object that calls the function. | - `this` is lexically bound (inherits from parent scope).   |
| - Suitable for methods inside objects.                 | - **Not suitable** for object methods where `this` is used. |



arguments: In function expressions, you can use the `arguments` object to access all passed arguments. Arrow functions do not have their own `arguments` object.

```javascript
function exampleFunction() {
    console.log(arguments); // Accesses all arguments passed to the function
    console.log(Array.isArray(arguments)); // false

}
```