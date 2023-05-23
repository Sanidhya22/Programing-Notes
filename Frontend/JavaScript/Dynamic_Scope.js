
/* Dyncmaic Scoping - 
   In Dynamic Scoping functions have access to the variables in the function from which 
   it is called.
   JavaScript does not support Dynamic Scoping Concept */

function b() {
    console.log(x);
    console.log(y);
    var z = 30;
    console.log(z);
}

function a() {
    var x = 12;
    var y = 24
    b()
}

a();

