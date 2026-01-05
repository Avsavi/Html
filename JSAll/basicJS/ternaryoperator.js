// ternary operator is a shorthand for if-else statement
let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.

// Another example

let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); // Output: Even        

// Nested ternary operator example

let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" :
            (score >= 60) ? "D" : "F";

console.log(grade); // Output: B

let Age = 17;
let isAdult = (Age >= 18) ? "Adult" : (Age>60)?"senior citizen":"minor";
console.log(isAdult); // Output: minor