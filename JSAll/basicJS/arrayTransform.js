// araray trasnformation using for each map, filter, and reduce

// for each method example is below : 
// for each method is used to iterate over each element of an array and perform a specified action.and it does not return a new array. it simply executes a provided function once for each array element.adn it is commonly used for side effects such as logging or updating external variables.

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

fruits.forEach((fruits, index) => console.log(`Item: ${fruits}, Index:${index}`));


// map method example is below :
// map method is used to create a new array by applying a specified function to each element of the original array. it returns a new array containing the results of calling the provided function on every element in the calling array.

const numbers = [1, 2, 3, 4, 5];
const new1 = numbers.map((num) => num * 2); // [2, 4, 6, 8, 10]
console.log(numbers); // original array remains unchanged [1, 2, 3, 4, 5]
console.log(new1);

// filter method example is below :
// filter method is used to create a new array containing only the elements that satisfy a specified condition. it returns a new array with all elements that pass the test implemented by the provided function.

const mixedNumbers = [10, 15, 20, 25, 30, 35];
const filteredNumbers = mixedNumbers.filter((num) => num > 20); // [25, 30, 35]
console.log(mixedNumbers); // original array remains unchanged [10, 15, 20, 25, 30, 35]
console.log(filteredNumbers);

// reduce method example is below :
// reduce method is used to reduce an array to a single value by applying a specified function to each element of the array, accumulating the result. it takes a callback function and an optional initial value as arguments.

const values = [1, 2, 3, 4, 5];
const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 15  
console.log(values); // original array remains unchanged [1, 2, 3, 4, 5]
console.log(sum);
// In this example, the reduce method sums up all the elements in the values array, starting with an initial value of 0.

// sort method example is below :
//  sort method is used to sort the elements of an array in place and returns the sorted array. it can sort elements in ascending or descending order based on the provided compare function.

const unsortedNumbers = [5, 2, 9, 1, 7, 6];
console.log(unsortedNumbers)
unsortedNumbers.sort();
console.log(unsortedNumbers); // [1, 2, 5, 5, 6, 9]

//another example of sort method with compare function

const numbersToSort = [134, 453, 9000, 1341212, 2, 4, 5, 100, 50];
console.log(numbersToSort)
numbersToSort.sort((a, b) => a - b); // ascending order
console.log(numbersToSort); // [2, 4, 5, 50, 100, 134, 453, 9000, 1341212]

// real world example using map, filter, and reduce together :

const students = [{
    name: 'Alice',
    age: 20,
    grade: 85
},
{
    name: 'Bob',
    age: 22,
    grade: 92
},
{
    name: 'Charlie',
    age: 19,
    grade: 78
},
{
    name: 'David',
    age: 21,
    grade: 88
}
];
// 1. Filter students who scored above 80 and map their names:
const topStudentsNames = students
    .filter(student => student.grade > 80)
    .map(student => student.name);

console.log(topStudentsNames); // ['Alice', 'Bob', 'David']

// 2. Calculate the average grade of all students:
const averageGrade = students
    .reduce((total, student) => total + student.grade, 0) / students.length;
console.log(averageGrade); // 85.75