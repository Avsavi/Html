
// various types of operators in java script.
// Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition: ", a + b); // 15 
console.log("Subtraction: ", a - b); // 5
console.log("Multiplication: ", a * b); // 50
console.log("Division: ", a / b); // 2
console.log("Modulus: ", a % b); // 0
console.log("Exponentiation: ", a ** b); // 100000
console.log("Increment: ", ++a); // 11  
console.log("Decrement: ", --b); // 4

// Assignment Operators
let c = 20;
c += 5; // c = c + 5    
console.log("c after += 5: ", c); // 25
c -= 3; // c = c - 3    
console.log("c after -= 3: ", c); // 22
c *= 2; // c = c * 2
console.log("c after *= 2: ", c); // 44
c /= 4; // c = c / 4
console.log("c after /= 4: ", c); // 11
c %= 3; // c = c % 3
console.log("c after %= 3: ", c); // 2
c **= 3; // c = c ** 3
console.log("c after **= 3: ", c); // 8

// Comparison Operators
let x = 10;
let y = '10';
console.log("x == y: ", x == y); // true
console.log("x === y: ", x === y); // false
console.log("x != y: ", x != y); // false   
console.log("x !== y: ", x !== y); // true
console.log("x > 5: ", x > 5); // true  
console.log("x < 15: ", x < 15); // true
console.log("x >= 10: ", x >= 10); // true  
console.log("x <= 8: ", x <= 8); // false   

// Logical Operators
let p = true;
let q = false;
console.log("p && q: ", p && q); // false
console.log("p || q: ", p || q); // true    
console.log("!p: ", !p); // false
console.log("!q: ", !q); // true


// Type Operators
console.log("typeof x: ", typeof x); // number
console.log("typeof y: ", typeof y); // string
console.log("x instanceof Number: ", x instanceof Number); // false
let arr = [1, 2, 3];
console.log("arr instanceof Array: ", arr instanceof Array); // true
let obj = {name: "John"};
console.log("obj instanceof Object: ", obj instanceof Object); // true
