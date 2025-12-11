function greet(name ="Prince") {
    return`Hello welcome to india,${name}`;
}
console.log (greet());


function movieTicket(name) {
    
    
    let age1 =31;
    let calage =age1>18 ? "adult" : "minor"
    return` welcome to the inox theater:you are ${calage} ${name} and eligible to watch movie, `;
}
console.log(movieTicket ("Preet"));

function students(pass, fail) {
    let s1 =[55,50,55,60,75]
    let s2 =[65,65,65,70,75]
    let s3 = s1.concat(s2)
    let s4 = s3 [1]>40 ? pass: fail
    console.log(s4);
    console.log(s3);
    console.log(s3[1]);
    

    
}
students("deepak","deepa");


let name1="avinash"
let sirName="Shinge"
const z= name1 +" "+sirName
console.log(z);


