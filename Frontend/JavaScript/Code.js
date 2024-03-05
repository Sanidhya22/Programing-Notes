// There are two types of Code
// 1. Synchronous
// 2. Asynchronous

// Synchronous -
// Synchronous code refers to the execution of code in a sequential manner, where each operation is
// completed before moving on to the next one.

console.log("Start");
function greet(name) {
  return "Hello, " + name + "!";
}
const message = greet("Alice");
console.log(message);
console.log("End");

// Asynchronus -
// Asynchronous code in JavaScript allows operations to be performed concurrently or scheduled to run
// later, without blocking the execution of other code.

console.log("Start");
setTimeout(function () {
  console.log("Async operation completed after 2 seconds");
}, 2000);
console.log("End");
