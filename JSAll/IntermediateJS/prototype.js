// what are the prototype in javascript?
// In JavaScript, every object has a prototype. A prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.and prototype is a mechanism by which JavaScript objects can inherit features from one another.and prototype is used to add new properties and methods to existing object types.

// Example of prototype in JavaScript:

// Creating a constructor function

function person(name, age) {
    this.name = name;
    this.age = age;
}
// Adding a method to the prototype of person   

person.prototype.getname = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
}  
// Creating an instance of person       
var john = new person("John", 30);
john.getname(); // Output: Hello, my name is John and I am 30 years old.

// In this example, we created a constructor function called person. We then added a method called getname to the prototype of person. When we create an instance of person (john), it can access the getname method through its prototype.

//another example of prototype in JavaScript:

function Car(name,model){
    this.name=name;
    this.model=model;
}
Car.prototype.getDetails=function(){
    console.log(
        "car name is: " + this.name + " and model is: " + this.model
    )
}
var myCar= new Car("Toyato",2025);
myCar.getDetails();

// prototype chain in JavaScript    
// The prototype chain is a series of links between objects that allows JavaScript to look up properties and methods. When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks at the object's prototype, and then the prototype's prototype, and so on, until it reaches the end of the chain (usually Object.prototype).

// Example of prototype chain in JavaScript:

const animal={
    eats: true
}
const dog ={
    bark: true
}
dog.__proto__ = animal;
console.log(dog.eats);
console.log(dog.bark);

// In this example, we have two objects: animal and dog. The dog object has a prototype link to the animal object. When we try to access the eats property on the dog object, JavaScript looks for it on the dog object first. Since it doesn't find it there, it looks at the animal object (the prototype of dog) and finds the eats property there.

// prototype example

function Student(fname,lname){
    this.fname=fname;
    this.lname=lname;
}
Student.prototype.getFullName= function(){
    console.log("My Full name is "+ this.fname + " " + this.lname);

}
var student1= new Student("Aviansh","Shan");
student1.getFullName();