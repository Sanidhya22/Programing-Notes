// Async Await -- 
// Async makes a function return a Promise
// Await makes a function wait for a Promise 

// The Purpose of async / await is to simplify the syntax to consume promise-based APIs.
// Async/await is a feature in JavaScript used for handling asynchronous code in a more 
// synchronous-looking manner.

// A Promise
function promise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Promise resolved");
    }, 4000);
  });
}

// const promise = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Resolved");
//       }, 2000);
//     });
//   };

// Async Function
async function asyncFunc() {
  try {
    // Wait Until the promise resolves
    const result = await promise();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// Calling the async function
asyncFunc();
