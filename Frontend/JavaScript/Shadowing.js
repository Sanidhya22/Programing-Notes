let x = 10;

function foo() {
  let x = 20; // This variable shadows the outer variable x
  console.log(x); // Output: 20
}

foo(); // Calling the function
console.log(x); // Output: 10 (outer variable x remains unchanged)
