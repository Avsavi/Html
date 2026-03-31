

// string method in java script

let str =   "Hello , World!";
console.log(str.length); // Length of the string measured in number of characters

console.log(str.toUpperCase()); // Converts the string to uppercase letters

console.log(str.toLowerCase()); // Converts the string to lowercase letters

console.log(str.indexOf("W")); // Returns the index of the first occurrence of "World" in the string.

console.log(str.slice(1, 4)); // Extracts a section of the string from index 1 to 4 (not inclusive) and returns it as a new string.

console.log(str.replace("World", "JavaScript")); // Replaces "World" with "JavaScript" in the string and returns a new string.
const fruits = "apple, banana, cherry";
console.log(fruits.split(", ")); // Splits the string into an array of substrings using ", " as the separator.

let name =["John, Doe, 25"];
console.log(name.toString()); // Converts the array to a string and returns it.

console.log(str.concat(" Welcome to JavaScript.")); // Concatenates " Welcome to JavaScript." to the end of the string and returns a new string.

console.log(str.trim()); // Removes whitespace from both ends of the string and returns a new string.

console.log(str.charAt(4)); // Returns the character at index 4 of the string.

console.log(str.startsWith("Hello")); // Checks if the string starts with "Hello" and returns true or false.

console.log(str.endsWith("!")); // Checks if the string ends with "!" and returns true or false.

console.log(str.includes("World")); // Checks if the string contains "World" and returns true or false.

console.log(str.repeat(2)); // Repeats the string 2 times and returns a new string.

console.log(str.padStart(20, "*")); // Pads the string at the start with "*" until it reaches a total length of 20 characters.

console.log(str.padEnd(20, "-")); // Pads the string at the end with "-" until it reaches a total length of 20 characters.

console.log(str.localeCompare("Hello , World!")); // Compares the string with "Hello , World!" and returns 0 if they are equal. 
