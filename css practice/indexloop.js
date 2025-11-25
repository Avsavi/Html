/*var ind=[10,20,30,40,50,50,50,50];

var ind2=[];
var ind3=[];
var ii =[];
console.log(ind);

var ind2=ind.indexOf(40);
console.log(ind2);


var ind3=ind.lastIndexOf(50);
console.log(ind3);

for ( var i=0;i<=ind.length;i++){
    if( ind[i]===20){
        // console.log (i);
        ii.push(i);
        console.log(ii);
        
        // console.log(i);
    }
}*/

var fruits =["apple", "banana", "kiwi", "onone", "ibibo", "grapes"]

fruits.unshift("Peru")

var froot =[];

console.log(fruits);

for ( var i=0;i<=fruits.length;i++){
    if(fruits[i]=== "kiwi"){
         console.log(i);
        froot.push(i);
        console.log(froot);
        
    }
}
