// what is closure and lexical scope in JavaScript 
// Lexical Scope is used for variable scope and closure is a function that references variables from outside its own scope. lexical scope determines how variable names are resolved in nested functions: inner functions contain the scope of their parent functions, even if the parent function has returned. and closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables— a scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.

//lexical scope example:

function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing variable from outer function
    }

    innerFunction();
}
outerFunction(); // Output: I am from outer function

//closure example:

function makeCounter() {
    let count = 0; // count is a variable in the outer function's scope

    return function() { // returning an inner function
        count++; // inner function has access to count variable
        return count;
    };
}

const counter = makeCounter(); // counter is now a closure  
console.log(counter()); // Output: 1