// sperad operator (...) in JavaScript used to expand iterable objects into individual elements and to combine arrays or objects. and also used to copy arrays or objects.

// Example 1: Using spread operator to expand an array
const numbers = [1, 2, 3];  
const expandedNumbers = [...numbers, 4, 5, 6];
console.log(expandedNumbers); // Output: [1, 2, 3, 4, 5, 6]

// Example 2: Using spread operator to combine arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: ['a', 'b', 'c', 'd', 'e', 'f']       

// Example 3: Using spread operator to copy an array

const originalArray = [10, 20, 30];
const copiedArray = [...originalArray];
console.log(copiedArray)

const person={
    name:"John",
    age:30
}
const copiedPerson={...person,city:"New York"}
console.log(person)
console.log(copiedPerson)   