/*

var status = "Global";

function checkScope() {
    var status = "Local";
    console.log(status); 
}

checkScope();
console.log(status);


////let with example global variable

let status = "Global";

function checkScope() {
    console.log(status); 
    let status = "Local";
}

checkScope();
console.log(status);




//// function scope variable 

function greetUser() {
    var userName="Alice"
    console.log("Hello" + userName);
    
}
greetUser();  // output will be the Hello Alice.
console.log(userName);  // this will cought an refrence error .



function greetUser() {
    let userName="Alice"
    console.log("Hello" + userName);
    
}
greetUser();  // output will be the Hello Alice.
console.log(userName);  // this will cought an refrence error .




//------------block scoped variable----
if(true){
    var x="you are going to concert "
    console.log(x);   
}
console.log(x);



//hoisting var 
 carName ="volvo"

 var carName;
 console.log(carName);
 

 //hoisting vlet 
 carName ="volvo"

 let carName;   
 console.log(carName);  // Cannot access 'carName' before initialization

 // closure 

function outerClosure() {
    
    var outVar ="i am an outer variable";

    function inVar() {
        var d ="firstInner var"
        console.log(outVar);
    }
    
    inVar()
    console.log(outVar)
}
outerClosure()

// when we use set timout in the for loop what happen if  use let or var variable


// using the var variable 
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
  }
//o/p = 3

//---------using let 
  for(let i=0; i<3; i++){
setTimeout(() =>console.log(i),100);    
}

//o/p = 0,1,2


// ----  use an IIFE (Immediately Invoked Function Expression

for (var i = 0; i < 3; i++) {
    (function(j) {
      setTimeout(() => console.log(j), 100);
    })(i);
  }

  //o/p = 0,1,2

   for (var i=1; i<5; i++){

    (function(j){
        setTimeout(()=>console.log(j),100)
    })
(i);
}

o/p = 1,2,3,4

let x=10;

 x--;
 x--

 console.log(x);

 /// logical operator  and (&&)
 
 let username = "Avinash";
 let password = "12345";
 let isAdmin = true;
 
 if (username == "Avinash"  && password === "12345" && isAdmin) {
   console.log("Welcome Admin!");
 } else {
   console.log("Access denied.");
 }

 /// logical operator  or (||)

let userName = "avinash"
let password = "avinash1238"
let isadult = true;

if ((userName == "satish") || (password == 123123123) || isadult) {
    console.log("welcome" +" "+ userName);
}
else {
    console.log("sorry" +" "+ userName);

}


/// logical operator not (!)

let age = 34;
let isAdult =true;

// if(!age>30){
// console.log("he is adult");
// }
// else{
//     console.log("He is Minor");
// }

let result = ! age >30 ? "he is adult" : age >20 ? "He is young" : age < 10 ? "He is an Teenager": "he is none"
console.log(result);


 */

function studentName(name) {
    console.log("My name is " + name )
}
function studentCity(city){
    console.log("my city is " + city);  
}
 let studentAge =21;
 
 let result= !studentAge>30 ? studentName("Mohit") : studentCity("pune");
 






















