//this is used in the method to refer to the current object and it is used to access the properties of the current object. also it is used to distinguish between local variables and object properties when they have the same name.

 var Student=function(fname,lname){
     this.fname=fname;
     this.lname=lname;
 }  
    Student.prototype.getFullName=function(){
        return this.fname + " " + this.lname;
    }   
    var student1=new Student("John","Doe");
    console.log(student1.getFullName());

    // in the above example we have used this keyword to access the properties fname and lname of the current object student1. and we have used prototype to add the method getFullName to the Student constructor function. and we have created an instance of Student called student1 and called the getFullName method on it.