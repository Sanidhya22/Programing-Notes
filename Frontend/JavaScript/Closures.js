/* Closures - 
It is a Mechanism  to retain a value of a function scope variable
for a long time */

/* function increment(){
    var a = 0;
    a = a+1;
    console.log(a);
}

increment();
increment();
increment();
increment(); */

/* Here we can see the value of a is not changing because the scope of the 
a variable is local so they are getting intialized every time when 
we are calling the function. */



// Normal way of Declaring Closures

function increment() {
    var a = 0;
    var plus = function () {
        a = a + 1;
        console.log(a)
    }
    return plus;
}

incr = increment();
incr();
incr();
incr();
incr();

/*
OUTPUT - 
1
2
3
4 */


/* Here we have declared Inner function inside the function so the memory 
will remain occupied in the stack till we comeout of the outer function
and by using return plus statement we are passing the reference of function
plus.
 */

/* 
By Using Self invoking Functions

var incr = function increment(){
    var a = 0;
    var plus = function(){
        a = a+1;
        console.log(a)
    }
    return plus;
}();

incr();
incr();
incr();
incr(); 

OUTPUT -
1
2
3
4
*/


/* A Closure is the combination of a function bundled together with Reference to its 
   Surrounding state(Lexical Enviroment).
   Closure means that an inner function always has access to the vars and parameters of 
   its outer function, even after the outer function has returned inner function.
   */


function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}

var z = x();
console.log(z);
z();

