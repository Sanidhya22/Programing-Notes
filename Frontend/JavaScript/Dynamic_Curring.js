

// Dynamic Curring - 
// Dynamic currying in JavaScript refers to the process of creating a curried function where the number of 
// arguments it expects can vary dynamically. 


// Dynamic currying function
function dynamicCurry(fn) {
    return function curried(...args) {
      // Check if enough arguments are provided
      if (args.length >= fn.length) {
        // If enough arguments, call the original function
        return fn(...args);
      } else {
        // If not enough arguments, return a partially applied function
        return function(...moreArgs) {
          return curried(...args, ...moreArgs);
        };
      }
    };
  }
  
  // Example function to be curried
  function multiply(a, b, c) {
    return a * b * c;
  }
  
  // Curried version of the multiply function using dynamic currying
  const curriedMultiply = dynamicCurry(multiply);
  
  // Call the curried function with one argument
  const multiplyByTwo = curriedMultiply(2);
  console.log(multiplyByTwo); // Output: [Function (anonymous)]
  
  // Call the partially applied function with two more arguments
  console.log(multiplyByTwo(3, 4)); // Output: 24
  
  // Alternatively, you can directly call the curried function with all arguments
  console.log(curriedMultiply(2)(3, 4)); // Output: 24
  