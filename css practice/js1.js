 //Array

var arr =[10,23,8,33,3,66,9,7,0,88,77]
var arr2=[];
var arr3=[];


for( var i=0;i<arr.length;i++){

    if(arr[i]>=10){
      arr2.push(arr[i]);
    //   console.log(arr2);  
    }
    else{
    arr3.push(arr[i]);
    }
}
console.log("arr of arr2" ,arr2);
console.log("arr of arr2" ,arr3);


//=========================== replace array value=========


var a =10;
var b= 20;
var  temp =a;
a=b;
b=temp;

console.log(a);
console.log(b);


var x= [10, 50,8,6,15,1,33];
var result =[];
var index =[];

for ( var i=0; i<=x.length;i++){
if (x[i]%5===0){
    result.push(i);
    // index.push(i);
}
}
console.log(result);
// console.log("index of array",index);


var add =[];







