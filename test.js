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

 */



 




