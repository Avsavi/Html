
// array method using arrow method.

var x=[10,20,40,50,121,666,234,443,552,1332,5241];

var y=[];

var z = x.map((mod)=>
    mod *5/10
)
console.log(x);
console.log(z);

// for each loop 
var duim
x.forEach((XX)=>{
    duim=XX *5  ;
   // document.write("<h1>" +duim  +"</h1>")
}
    

// y.push(XX)
)
console.log(y);

// Array filter method

var a =x.filter((f)=>
    f>500
)
console.log(a);

var age = [18,5,59,75]
 var adult=age.every((assume)=>
 assume >17
)
console.log("They are not minor",adult);

var agecal = age.reduce((ab, ac)=>ab+ac)
var total = agecal/4
console.log(agecal);
console.log(total);


var s1=[36,40,45,70,90];

var s2=s1.every((pass)=>pass>35)
console.log(s2);
var s3=s1.reduce((a1,b1)=>a1+b1)
console.log(s3);
var par =s3/5
console.log(par);

document.write("studet is pass:" + s2+"<br>")
document.write("total marak studet:" + s3+"<br>")
document.write("Percentage studet :" + par+"<br>")





