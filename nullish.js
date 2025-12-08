

// nullish operator 

let student = {
    sname: "Ramya",
    ssirname : "Sen",
    sclass : "MBA",

    sadd:{
        road:" fc road pune",
        city:"pune",
        pincode: 411011,
    },
    scom:{
        email:"student123@gmail.com",
    }
}

let x=student.sadd?.hosuename;  // this is for the nullish operator  
let y = student?.rollnumber ?? 123; //?? this is for the chaining optional 
let add= student.scom?.mobilenumber??9561041238;


// let x=student.sadd.hosuename;  
// let y = student.rollnumber ;
// let add=student.scom.mobilenumber;

console.log(x);
console.log(y);
console.log(add);

