
// what is heap and stack memory in js?
// Data Types in JavaScript         
// In JavaScript, data types are divided into two main categories: Primitive Data Types and Non-Primitive Data Types (Reference Data Types).
// 1. Primitive Data Types: These are the most basic data types in JavaScript. They are immutable, meaning their values cannot be changed once created.
//2. Non-Primitive Data Types: These data types are more complex and can store collections of values or more complex entities. They are mutable, meaning their values can be changed.


//  Non-Primitive Data Types are also known as Reference Data Types.and mutable.

    // a. Object

    let person = {
        name: "Alice",
        age: 30,
        isEmployed: true
    };
    // object literal
    
    console.log(person.name); //o/p - alice- accessing property using dot notation 
    console.log(typeof person); //o/p - object
    console.log(person); //o/p - { name: 'Alice', age: 30, isEmployed: true }

    // b. Array
    let numbers = [1, 2, 3, 4, 5]; // array literal
    let fruits = ["apple", "banana", "cherry"];
    console.log(fruits[1]); //o/p - banana - accessing array element by index
    console.log(typeof fruits); //o/p - object

    // c. Function  
    function add(a, b) {
        return a + b;
    }
    let sum = add(5, 10); // calling the function  
    console.log(sum); //o/p - 15 
    console.log(typeof add); //o/p - function        

    // function expression

    function greet() {
        return "Hello, World!";
    }
    console.log(greet()); //o/p - Hello, World!
    
    
    // d. Date
    let currentDate = new Date(); // current date and time
    let specificDate = new Date('2024-01-01'); // specific date 
    // e. RegExp
    let pattern = /ab+c/; // regular expression literal
    let regex = new RegExp('ab+c'); // regular expression using constructor
    // f. Map (ES6)
    let map = new Map();
    map.set('key1', 'value1');  
    map.set('key2', 'value2');
    // g. Set (ES6)
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(2); // duplicate value, will be ignored
    // h. WeakMap (ES6)
    let weakMap = new WeakMap();
    let objKey = {};
    weakMap.set(objKey, 'some value');
    // i. WeakSet (ES6)
    let weakSet = new WeakSet();
    let objValue = {};
    weakSet.add(objValue);
    