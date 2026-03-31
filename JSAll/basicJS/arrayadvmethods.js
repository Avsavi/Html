// adavance array methods : slice and splice and concat and flatten and spread operator and destructuring of arrays

// slice method example :
// slice method is used to extract a portion of an array and returns a new array without modifying the original array. it takes two arguments: the start index (inclusive) and the end index (exclusive).
// it is also called as deep copy method because it creates a new array that is a shallow copy of a portion of the original array.

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const citrusFruits = fruits.slice(1, 4); // ['banana', 'cherry', 'date']
console.log(fruits); // original array remains unchanged ['apple', 'banana', 'cherry', 'date', 'elderberry']
console.log(citrusFruits);

// splice method example :
// splice method is used to add or remove elements from an array at a specified index. it modifies the original array and returns an array containing the removed elements (if any). it takes three arguments: the start index, the number of elements to remove, and the elements to add (optional).

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
console.log(colors);    
const removedColors = colors.splice(2, 2, 'orange', 'pink'); // removes 'blue' and 'yellow', adds 'orange' and 'pink'
console.log(colors); // modified original array ['red', 'green', 'orange', 'pink', 'purple']s
console.log(removedColors); // ['blue', 'yellow']

// concat method example :
// concat method is used to merge two or more arrays into a single array. it does not modify the original arrays and returns a new array containing the combined elements.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2); // [1, 2, 3, 4, 5, 6]
console.log(array1); // original array remains unchanged [1, 2, 3]
console.log(array2); // original array remains unchanged [4, 5, 6]
console.log(combinedArray);


// flatten method example :
// flatten method is used to flatten a nested array into a single-level array. it can take an optional depth argument to specify how deep a nested array structure should be flattened. if no depth is provided, it flattens the array by one level.

const nestedArray = [1, [2, [3, 4], 5]];
const flattenedArray = nestedArray.flat(2); // [1, 2, 3, 4, 5
console.log(nestedArray); // original array remains unchanged [1, [2, [3, 4], 5]]
console.log(flattenedArray);

// spread operator example :
// spread operator is used to expand elements of an iterable (like an array) into individual elements. it is often used to create copies of arrays or to merge arrays.

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // creates a shallow copy of originalArray
console.log(originalArray); // original array remains unchanged [1, 2, 3]
console.log(copiedArray); // [1, 2, 3]
const mergedArray = [...originalArray, 4, 5, 6]; // merges originalArray with additional elements
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]


// destructuring of arrays example :
// destructuring is used to unpack values from arrays into distinct variables. it provides a concise way to extract multiple values from an array.
const rgb = [255, 0, 127];
const [red, green, blue] = rgb; // destructures the array into individual variables 
console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`); // Red: 255, Green: 0, Blue: 127
// In this example, the values from the rgb array are unpacked into the red, green, and blue variables using array destructuring.
// more examples of destructuring :

const coordinates = [10, 20];
const [x, y] = coordinates; // x = 10, y = 20
console.log(`X: ${x}, Y: ${y}`); // X: 10, Y: 20
const names = ['Alice', 'Bob', 'Charlie'];
const [firstName, secondName, thirdName] = names; // firstName = 'Alice', secondName = 'Bob', thirdName = 'Charlie'
console.log(`First: ${firstName}, Second: ${secondName}, Third: ${thirdName}`); // First: Alice, Second: Bob, Third: Charlie
// In this example, the values from the coordinates and names arrays are unpacked into individual variables using array destructuring.

// These advanced array methods and techniques enhance the ability to manipulate and work with arrays in JavaScript, making code more efficient and readable.

//destructuring with rest operator:
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers; // first = 1, second = 2, rest = [3, 4, 5]
console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`); // First: 1, Second: 2, Rest: 3,4,5
// In this example, the first two elements of the numbers array are unpacked into the first and second variables, while the rest operator (...) collects the remaining elements into the rest array.

// destructuring with default values:
const settings = [10,20,30];
const[first1,second2, third]=settings; // first=10, second=20, third=30
console.log(first1,second2,third); //10