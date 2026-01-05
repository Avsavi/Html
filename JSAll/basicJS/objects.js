//  onjects in the JavaScript language are used to store collections of data and more complex entities.

// objects are containers for named values called properties or methods. each objects have a prototype. a prototype is also an object. all objects inherit their properties and methods from their prototype.each objecta have key value pairs.

// crate an object using object literal syntax

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue',
    // start: function () {
    //     console.log('Car started');
    // },
    // stop: function () {
    //     console.log('Car stopped');
    // }
};
// accessing object properties using dot notation
console.log(car)
console.log(car.make); // Output: Toyota
console.log(car.model); // Output: Camry

// accessing object properties using bracket notation
console.log(car['year']); // Output: 2020

// adding a new property to the object that is not present in the object

car.price = 25000;
console.log(car); // Output: 25000

// modifying an existing property of the object

car.color = 'red';
console.log(car); // Output: red

// deleting a property from the object

delete car.year;
console.log(car); // Output: undefined

// calling object methods

// car.start(); // Output: Car started 
// car.stop(); // Output: Car stopped


// looping through object properties using for...in loop

// for (let key in car) {
//     console.log(key + ': ' + car[key]);
// }


// object entries   

const entries = Object.entries(car);
console.log(entries);