// chaining and nullish coalescing operator

const user = { 
    name: 'Alice',
    address: {  
        street: '123 Main St',
        city: 'Wonderland'
 },
};

// Optional chaining is used to safely access nested properties and methods:

console.log(user?.address?.street); // Output: '123 Main St'

console.log(user?.contact?.phone??9561041238); // Output: undefined (no error thrown)

// Nullish coalescing operator is used to provide default values for null or undefined:

const userAge = null;
const age = userAge ?? 18;  
console.log(age); // Output: 18