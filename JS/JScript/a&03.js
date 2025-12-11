/*
// call object by using the function 

 let employee ={ ename:"avinash",ecode:123,edes:"developer",
    employeeContact:{ city:"pune",address:"123 aveneus pune"}

}

function getemployeeDetails(emp){
 return`my name is : ${emp.ename}, my employeecode is: ${emp.ecode}, my profession is :${emp.edes}`
}
console.log(getemployeeDetails(employee));

*/


let obj= { cname:"Info", Cadd: "Pune,chakan",
    cincome: 184000, temp:900
}

let b=obj;  // shalow copy 

console.log(b);
b.cname="ram";

console.log(b)
console.log(obj)


let c = structuredClone(obj);    // deep copy 
c.cname ="Techm";

console.log(c);
console.log(obj);


let dcopyjson = JSON.parse(JSON.stringify(obj));

dcopyjson.temp=7000;

console.log(dcopyjson);
console.log(obj);

