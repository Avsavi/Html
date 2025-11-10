/*console.log(window);
 alert("welcome to JS");
const form =document.querySelectorAll("studentReg");
console.log(form);
const btn =document.querySelector(".btn");
btn.style.background="red";
btn.style.color="white";
btn.style.border="none";
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("you have clicked");
    console.log(e.target);
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector("body").style.background= "black";
});
const btn1= document.querySelector(".btn1");
btn1.style.background="blue";
btn1.style.color="white";  

const myForm =document.querySelector('.container');
const nameInput =document.querySelector('.studentname');
const emailInput =document.querySelector('.studentemail');
const studentAdd =document.querySelector('.studentAdd');
const msg=document.querySelector('.msg');
const btn =document.querySelector('.btn');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault()
    if (nameInput.value === ''||emailInput.value === '' ||studentAdd.value === '') {
        msg.innerHTML ='Please Enter all the fields';
    } else {
        console.log('success');
    }
 
    
}*/
//------------------if else statement ----------------------------//

/*let age = 21;
if (age<=5) {
    console.log("he is child");
}
    else if( age<=18){
console.log("He is minor")
    }
    else if(age>=60){
        console.log("He is an seniour citizen")
    }
 else {
    console.log("He is adult")
}*/
//------------------------------------switch case break----------------------------------//
let age = 21;
switch (age) {
    case 18: console.log("he is minor")
        break;
    case 21: console.log("He is adult ")
        break;

    case 65: console.log("He is an seniour citizen")
        break;
    default: console.log("He is child");
}

//------------------------------------ for loops-----------------------------------------//

/*let i;

for (i = 1; i <= 5; i++) {
    console.log("*");
}*/


//------------------ do loops------------------------------------------//
 /*i=1;
 while (i<=10){
    console.log("*");
    i++
 }*/

 //------------------------dowhile loop-------------------------------//
 /*i=1;
 do {
    console.log("&");
    i++
 } while (i<=8);*/

 //-------------------------------prog----------------------------//

 let i;
 let j;
 let row;
 let n =5;
 for(i=1;i<=n;i++){
    row="";
    for(j=1;j<=n;j++){
        row=row +"*";
    }
    console.log(row);
 }
