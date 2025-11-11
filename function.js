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
*/
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


console.log(arr.flat(Infinity));


/// reverese order array 

var fruits = ["apple", "banana", "cherry"];
var reversedFruits = fruits.reverse();
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



