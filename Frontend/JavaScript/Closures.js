// Closures -
// Closures is a concept in JavaScript that allow inner function to retains access to parameters of
// its outer function, even if outer function has finished executing or returned inner function.

//Example 1
function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

//Example 2
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

// Here the memory will remain occupied in the stack till we comeout of the outer function and by using 
// return function statement we are passing the reference of function.

