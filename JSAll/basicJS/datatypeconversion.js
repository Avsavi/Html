

// data type conversion in JavaScript
// 1. String to Number
let strNum = "123";
console.log(typeof strNum); // "string"
let convertedNum = Number(strNum);  
console.log(convertedNum); // 123
console.log(typeof convertedNum); // "number"

// 2. Number to String
let num = 456;
console.log(typeof num); // "number"
let convertedStr = String(num); 
console.log(convertedStr); // "456"
console.log(typeof convertedStr); // "string"

// 3. Boolean to Number
let boolVal = true;
console.log(typeof boolVal); // "boolean"
let boolToNum = Number(boolVal);
console.log(boolToNum); // 1    
console.log(typeof boolToNum); // "number"

    // false converts to 0
let boolValFalse = false;
let boolToNumFalse = Number(boolValFalse);
console.log(boolToNumFalse); // 0   
console.log(typeof boolToNumFalse); // "number"

// 4. Number to Boolean
let numZero = 0;
console.log(typeof numZero); // "number"
let numToBool = Boolean(numZero);   
console.log(numToBool); // false
console.log(typeof numToBool); // "boolean"

    // Non-zero numbers convert to true

let numNonZero = 42;
let numToBoolNonZero = Boolean(numNonZero);
console.log(numToBoolNonZero); // true
console.log(typeof numToBoolNonZero); // "boolean"

// 5. String to Boolean
let strEmpty = "";  
console.log(typeof strEmpty); // "string"
let strToBoolEmpty = Boolean(strEmpty);
console.log(strToBoolEmpty); // false   
console.log(typeof strToBoolEmpty); // "boolean"

    // Non-empty strings convert to true        

let strNonEmpty = "Hello";
let strToBoolNonEmpty = Boolean(strNonEmpty);
console.log(strToBoolNonEmpty); // true
console.log(typeof strToBoolNonEmpty); // "boolean"
// 6. Boolean to String
let boolTrue = true;
console.log(typeof boolTrue); // "boolean"
let boolToStr = String(boolTrue);
console.log(boolToStr); // "true"
console.log(typeof boolToStr); // "string"
let boolFalse = false;
let boolToStrFalse = String(boolFalse);
console.log(boolToStrFalse); // "false"
console.log(typeof boolToStrFalse); // "string"
// 7. Implicit Conversion
let implicitNum = "5" * 2;
let implicitStr = 10 + "2" ;
console.log(implicitStr); // "102"
console.log(implicitNum); // 10
console.log(typeof implicitNum); // "number"
console.log(typeof implicitStr); // "string"
// Note: Implicit conversion can lead to unexpected results, so it's often better to use explicit conversion.
// 8. Special Cases
let specialStr = "abc";
let specialToNum = Number(specialStr);
console.log(specialToNum); // NaN   
console.log(typeof specialToNum); // "number"
let specialToBool = Boolean(specialStr);
console.log(specialToBool); // true
console.log(typeof specialToBool); // "boolean"
// An empty string converts to false
let emptyStr = "";
let emptyToBool = Boolean(emptyStr);
console.log(emptyToBool); // false
console.log(typeof emptyToBool); // "boolean"
// Summary: JavaScript provides various methods for data type conversion, both explicit and implicit. Understanding these conversions is crucial for effective programming in JavaScript.   
// Always be cautious with implicit conversions to avoid unexpected behavior.

let nu =null;
console.log(nu); // null
console.log(typeof nu); // "object" 
let nuToNum=Number(nu);
let numTb=Boolean(nu);
console.log(numTb); // false

console.log(nuToNum); // 0
console.log(typeof nuToNum); // "number"


