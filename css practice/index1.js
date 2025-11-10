// calculate student percentage 
/*
function calGrade(marks, totalmarks) {
  
  let percentage = (marks / totalmarks) * 100;
  let grade;

    if (marks >= 90) {
        grade = 'A';
    }
    else if (marks >= 80) {
        grade = 'B';
    }
    else if (marks >= 70) {
        grade = 'C';
    }
    else if (marks >= 60) {
        grade = 'D';
    }
    else if (marks <=35) {    
        grade = 'F';
    }
    else{
        grade = 'Fail';
    }
    console.log(grade); 
}  
calGrade(60,100);
calGrade(50,100);
calGrade(70,100);
calGrade(10,40);
calGrade(100,100);
calGrade(80,100); 
=============================
function num (totalnumber)
{
 for (let i = 0; i <= totalnumber; i++) {
console.log("number of i ="+ i);
 }
}
num(6); 
=====================================
function num(totalnumber) {
    for (let i = 0; i <= totalnumber; i++) {
        console.log("number of i = " + i);
    }
}

// Call the function
num(6); 


let s ={
    name : "John",
    grade : "A",
    age : "24",

    coding : function () {
        console.log("student is coding...");
    },
    singing : function () {
        console.log("student is singing...");
    },
    dancing : function () {
        console.log("student is dancing...");
    }
}
s.coding();
s.dancing();
console.log(s.name);*/


var arr =[10,23,8,33,3,66,9,7,0,88,77]
var arr2=[];
var arr3=[];


for( var i=0;i<arr.length;i++){

    if(arr[i]>=10){
      arr2.push(arr[i]);
      console.log(arr2);  
    }
    else{
    arr3.push(arr[i]);
    }
}

/*var arr = [10, 23, 8, 33, 3, 66, 9, 7, 0, 88, 77];
var arr2 = [];
var arr3 = [];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] >= 10) {
    arr2.push(arr[i]);
    console.log("arr2:", arr2);
  } else {
    arr3.push(arr[i]); // not [i], you want the value, not the index
  }
}*/

console.log("Final arr2:", arr2);
console.log("Final arr3:", arr3);

