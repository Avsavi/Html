// objects destructring 

const person={
    Fname:"Avinash",
    Lname:"Shinge",
    age:23,
    contact:9561041238,
    location:{
        city:"Pune",
        state:"Maharashtra",
        // con: "India"
    },
};

// destructring the object in javascript

const{Fname,Lname,contact}=person;
console.log(Fname,Lname,contact); // output: avinash shinge 9561041238

// nested object destructring

const{location:{city,state}}=person;
console.log(city,state); // output: pune maharashtra INDIA

// function parameter destructring  

function display({Fname,Lname,age}){
    console.log(`First Name: ${Fname}, Last Name: ${Lname}, Age: ${age}`);
}   
display(person); // output: First Name: Avinash, Last Name: Shinge, Age: 23

