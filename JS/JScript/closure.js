
// this is closure function :

 function outer(){
    let count=0;

    function inner(){
        count++;
        console.log(count);
        
    }
    return inner;
 }

 const closurefunc = outer();

 
 closurefunc();
 closurefunc();
 closurefunc();
 closurefunc();
 
 