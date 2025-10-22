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
btn1.style.color="white";  */

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
 
    
}