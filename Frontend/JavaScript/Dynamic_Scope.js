
/* Dyncmaic Scoping - 
   In Dynamic Scoping functions have access to the variables in the function from which 
   it is called.
   JavaScript does not support Dynamic Scoping Concept */


var x = 15;

function b() {
    console.log(x);
    console.log(y);
    var z = 30;
    console.log(z);
    c();
    function c() {
        console.log(z);
        console.log(x+y+z);
    }
}

   function a() {
    var x = 12;
    var y = 24
    b()
}

a();

