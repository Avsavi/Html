

// variable in java script let var const :

// var has a function scope and redeclared and reassign it again .

var a = 10;
var a = 20; // redeclared
a = 30; // reassigned
console.log(a); // 30


let sname = "first";
{   // block scope start
let sname = "Second"; // reassigned  
console.log(sname); // Smith
} // block finish
console.log(sname); // John

// let has a block scope and cannot be redeclared but can be reassigned 

let x=50;
// let x=30; // cannot be redeclared Identifier 'x' has already been declared
// let x=40; // cannot be redeclared
x=20; // reassigned
console.log(x); // 20


const pi = 3.14;
// const pi = 3.1416; // cannot be redeclared Identifier 'pi' has already been declared
// pi = 3.14159; // cannot be reassigned Assignment to constant variable.

console.log(pi); // 3.14

// hoisting in javascript :

console.log(m); //o/p -  undefined 
var m = 100;


console.log(n); // o/p - ReferenceError: Cannot access 'n' before initialization
n = 200;   

console.log(p); // o/p - ReferenceError: Cannot access 'p' before initialization
const p = 300;