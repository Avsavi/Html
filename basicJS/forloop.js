// types of loops in js     
// for loop 

for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i);
}

// for each loop

let persons = { fname: "John", lname: "Doe", age: 25 };
for(let key in persons) {
    console.log(key + ": " + persons[key]);
}



// for of loop  
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("Color: " + color);
}
// for of loop with string
 const students=[{name:"John",age:22},{name:"Jane",age:23},{name:"Jim",age:24}];
//  for (let student of students){
//     console.log("Student Name: " + student.name + ", Age: " + student.age);
//  }

students.forEach(function(student){
    console.log("Student Name: " + student.name + ", Age: " + student.age);
});