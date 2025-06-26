# Day 80 - JavaScript

1. How to read all keys from the object ?
   - Use `Object.keys(object)` to get an array of keys from the object.

2. How to get count of keys in the object ?
   - Use `Object.keys(object).length` to get the count of keys in the object.

3. How to read both keys and values from the object?
   - Object.keys(obj).forEach(key => {
       console.log(key, obj[key]);
   });

4. How to remove a key from the object?
   - Use `delete object.key` to remove a key from the object.

5. How to check the availability of a key in the object?
   - Use `key in object` to check if a key exists in the object.
   - if(key in object) { ... }

## Objects holding methods
