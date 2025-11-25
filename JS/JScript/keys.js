
var x =[10,30,40,50, 60,70,80,90,100]

 //print index and values.of the above array.

 var y =x.some((bag)=>
    bag>60
 )

 console.log(y);
 

 var i=x.keys()
 console.log(i);
 i.forEach(aa => {
    console.log(aa);
    
 });

 var v=x.values()

 v.forEach(xx=>{
    console.log(xx);
    
 })

 console.log(v);

 var p =x.entries()

 p.forEach(dd =>{
    console.log(dd)
 })
 console.log(p);
 
 
 