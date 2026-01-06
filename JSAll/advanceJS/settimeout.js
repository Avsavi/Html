// setTimeout is used for the delayed execution of a function after a specified time interval. and it executes only once. not repeatedly. we can stop the execution using clearTimeout() method.
// syntax: setTimeout(function, milliseconds, param1, param2, ...);
//example:

console.log("start");
setTimeout(()=>{
    console.log("execute after 1 seconds");
},1000)  // Note: The time specified in setTimeout is in milliseconds. 1000 milliseconds = 1 second.
console.log("end");

//setTimeout with parameters:
function greet(name){
    console.log("Hello " + name);
}
setTimeout(greet,2000,"John"); // after 2 seconds it will log "Hello John"

//storing the timeout id to clear it later

let timeoutId = setTimeout(()=>{
    console.log("This will not be executed");
},3000);    
clearTimeout(timeoutId);
// In this example, the message "This will not be executed" will not be logged to the console because we cleared the timeout before it could execute.


// example
function delayedMessage(){
    console.log("This message is displayed after 3 seconds");
}
setTimeout(delayedMessage,3000);


// example :

function parampass(name,age){
    console.log(`"my name is: " ${this.name}  "and my age is:" ${this.age} `)
}
setTimeout(parampass.bind({name:"Alice",age:25}),4000); // after 4 seconds it will log "my name is: Alice and my age is: 25"
clearTimeout(parampass());
