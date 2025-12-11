/*
var x= [10,11,13,15,17,18]

var y =x.map((add)=>
   add+2
)

console.log(y);

// define function in java script 

function add(x,y) {
   console.log(x+y);   
}
add(10,12)
add(20,80) 

// parameter function 

function sam(a, b, c) {
   if (c == 'add') {
      console.log(a + b)
   }
   if (c == 'multiple') {
      console.log(a * b)
   }
   if (c == 'devide') {
      console.log(a / b)
   }
   if (c == 'substraction') {
      console.log(a - b)
   }
}
sam(10, 30, 'add');
sam(20, 30, 'multiple')


var a = [10, 20, 30, 40, 50]
console.log(a);


a.splice(3, 3, 100)

console.log(a);


/// flat an array 

var arr = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]]


console.log(arr.flat(Infinity));  // conversion of aray 


/// reverese order array 

var fruits = ["apple", "banana", "cherry"]; // 
var reversedFruits = fruits.reverse(); // reverse the array value 
console.log(reversedFruits);


/// reversed array

var numbers = [10, 20, 30, 40, 50, 60, 70]
console.log(numbers);
var reversenumber = numbers.reverse();
console.log(reversenumber);

var index = reversenumber.indexOf(60);
console.log(index);



var maths = [1, 4, 9, 16, 25, 36]
console.log(maths);

var sqroot = maths.map(num => Math.sqrt(num));
console.log(sqroot);

var w= [10,20,40,30]
var e= w.map ((add)=> add+4);

console.log(e);

var q = w.filter((f)=>
f>20
)

console.log(q);

var g = w.reverse();
console.log(g);

*/


// array manipulation methods 
/*
let a =["akash","mohan","roshan","deepak"]

let b =[10,20,30,40,50,60]
// let c1=["ram","shyam",100,200,"Ranjeet"]

console.log(a);

a.unshift("Manoj")  // --- add the variable form left to right initial
console.log(a);
a.shift();     //--- remove the variablr from left to right initial
console.log(a);

a.splice(2,0,"Ram")   // --- delete the array and insert the array splice used like (first = used  for selection  , delete = the value which you want to delete, last = for add the value )
console.log(a);

a.splice(1,1,"Shyam")   
console.log(a);


let newslice =a.slice(1,3)    //-- slice  delete the value of array 
console.log(newslice);



let c= a.concat(b,c1);   // combine the two array in a single aaray 
console.log(c);


let c = a.join(); // default join with comma
console.log(c);

let c1= a.join("-")  //join with oining numbers
console.log(c1);

let c2= a.join(" | ")  // join with Custom separator
console.log(c2);
let c3= a.join("")   // join with no separater
console.log(c3);



let nString = ["apple","banana","kiwi"]

let cString = nString.toString()

console.log(cString);
*/

let  x= [10,20,30,40,100,2000,30000,15]
















