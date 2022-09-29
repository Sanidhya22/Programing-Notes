/* Callback functions -- Callback functions are the functions which is to
be executed after another function has finished.

Callback functions are the functions which are being passed as an argument to  
another function.

In other terms the functions which are passed as an argument to another
function  */

/* Asynchronous - Asynchronous Code allow the Program to be executed 
Immediately.
Synchronous - Synchronous Code Will block further exceution of the 
remaining Code until it finishes the current one. */

/* 
//Example 1

var abc = function () {
    console.log("Function ABC");
}
var xyz = function () {
    console.log("Function XYZ");
}
function demo(...func) {
    for (let i = 0; i < func.length; i++) {
        func[i]();
    }
}

demo(abc, xyz);
 */

//Example 2

  function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  myCalculator(5, 5, myDisplayer);




