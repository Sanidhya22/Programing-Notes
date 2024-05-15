// Recurssion - 
// Recurssion is a  programming technique where a function calls itself repeatedly until a certain condition is 
// met. recursive function solves a problem by breaking it down into smaller instances of the same problem.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));
