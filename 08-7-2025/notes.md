# JavaScript Notes

## Instanceof Operator

The `instanceof` operator is used to check if an object is an instance of a specific class or constructor function. It returns `true` if the object is an instance, and `false` otherwise.

### Syntax

```javascript
object instanceof constructor
```

### Example

```javascript
class Animal {}
class Dog extends Animal {}

const dog = new Dog();

console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true
console.log(dog instanceof Array); // false
```

### How it Works

The `instanceof` operator checks the prototype chain of the object to see if it matches the prototype of the constructor function.
