// while loop example
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// do...while loop example:
let number = 6; 
do{
    console.log("Number is: " + number);
    number++;
}
while(number < 5);

// The do...while loop will execute the block once before checking the condition.
// Hence, "Number is: 6" will be printed once even though the condition is false.


let password="";
let correctPassword="letmein";
do{
    password=prompt("enter your password:");
}
while(password !==correctPassword);  
console.log("Access granted!");