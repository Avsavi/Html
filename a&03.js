 // call object by using the function 

 let employee ={ ename:"avinash",ecode:123,edes:"developer",
    employeeContact:{ city:"pune",address:"123 aveneus pune"}

}

function getemployeeDetails(emp){
 return`my name is : ${emp.ename}, my employeecode is: ${emp.ecode}, my profession is :${emp.edes}`
}
console.log(getemployeeDetails(employee));


