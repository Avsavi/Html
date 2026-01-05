// functions in JavaScript

// Function Declaration:

// function name is greet and it takes one parameter name and returns a greeting message.so this is called as function declaration 

// to declare a function we use the function keyword followed by the function name and parentheses () which may include parameters. The function body is enclosed in curly braces {}. parameters are the values that we pass to the function when we call it.

// syntax for fucntion declaration:

function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression: we used to assign a function to a variable. Function expressions can be anonymous (without a name) or named. it will not be hoisted like function declarations. this is called as function expression

// syntax for function expression:

const add = function(a, b) {
    return a + b;
};  
console.log(add(5, 3)); // Output: 8

// exaample of function expression:

const greeting= function(name){
    return "Hi, " + name + "!"; 
}
console.log(greeting("Avinash")); // Output: Hi, Avinash!

// Arrow Function: Arrow functions provide a shorter syntax for writing function expressions. They are always anonymous and do not have their own this context. this is called as arrow function, this is introduced in ES6 version of javascript and this is the most modern way to declare a function in javascript.

// syntax for arrow function:

const studentInfo = (name, age) => {
 return "Name: " + name + ", Age: " + age;
}
console.log(studentInfo("Bob", 22)); // Output: Name: Bob, Age: 22

// example of arrow function:

const employeeDetails=(ecode,ename,esalary)=>`employee code:${ecode}, employee name:${ename}, employee salary:${esalary}`;
console.log(employeeDetails(101,"John",50000)); // Output: employee code:101, employee name:John, employee salary:50000

const multiply = (x, y) => x * y; // concise body syntax
console.log(multiply(4, 6)); // Output: 24

// Immediately Invoked Function Expression (IIFE): An IIFE is a function that is defined and executed immediately after its creation. It is often used to create a local scope and avoid polluting the global namespace. this is called as IIFE function.

(function() {
    console.log("This is an IIFE!");
})(); // Output: This is an IIFE!

// example of IIFE function:

(function(language) {
    console.log("I love " + language + " programming.");
})("JavaScript"); // Output: I love JavaScript programming.