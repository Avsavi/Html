// Higher order functions of array -- for each, map, filter, sort, to sorted, every, some, reduce, reduce right 


/*map method ---------------------------

var X= [10,20,30,40,50,60,70,80,90,100]

console.log(X);

var Y=X.map((add)=>add +2)
console.log(Y);

var z= Y.map(mul=>mul*2)
console.log(z);


//for each method ---------------------------

var x= [10,20,30,40,50,60]
 var y=[]
x.forEach((x)=>{
    y.push(x)
})
console.log(y);



// for filter method 

var x= [10,20,30,40,70,66,44,55,66,66,80,90]
var x11=[21,14,76,34,47,79,97,0]
var f= ["apple","banana","Peru", "kaju", "anjeer"]
var df =[12,13,61,14,15,18,77,89,90,76,52,33, 45,40, 60,13,22,34,]
var print =["Rohit","Kala","Gajini","Rajini","Mohit"]


var y=x.map(add=>add*3)  // modified array with map method
var z=x.filter(add1=>add1>20) //filter the array with the condition
let z1=x.reduce((a,b)=>a+b)  // reduce the array with reduce method
let z2 =x.reduceRight((a1,b1)=>a1*b1) //work same as the reduce method
let s1=x11.sort(); // sort the aaray
let a1=x11.toSorted() // to make the copy of the array
let a12=x.every((arr)=>arr>90) // check the whole array is 
let arr1=x11.some((fn)=>fn>60)  // some of the pass the conditions
let fi = x11.indexOf(47)  // index of 
let li =x.lastIndexOf(66) // last index of 
var fin = f.findIndex(nm=> nm == "anjeer")  // find index using find index method
var ff = df.find (na=> na >50) // find the - for the first element in the array with com
var findL =df.findLast((naa)=>naa> 15) //Returns the last element that satisfies a condition
var findLI =df.findLastIndex((LIN)=> LIN> 40) // Returns the last index that satisfies a condition
print.push("Deepak","Manat","Ayesha","Noor")

var pp=print.pop()




console.log(x);
console.log(y);
console.log(z);
console.log(z1);
console.log(z2);
console.log(s1);
console.log(a1);
console.log(a12);
console.log(arr1);
console.log(fi);
console.log(li);
console.log(fin);
console.log(ff);
console.log(findL);
console.log(findLI);
console.log(print)
console.log(pp);

*/










// Array methods : push,pop,shift,unshift,slice,spilce,to splice,concat, join, To string, includes, fill,flat, flat map, at,length, delete,reverse, to reverse, array of, array.from, array.is array, value, within

