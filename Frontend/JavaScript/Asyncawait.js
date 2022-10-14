/* Async Await -- 
Async makes a function return a Promise
Await makes a function wait for a Promise 

The Purpose of async / await is to simplify the syntax necessary to consume promise-based
APIs.*/

// A Promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise resolved')
    }, 4000);
});

// Async Function
async function asyncFunc() {

    try {
        // Wait Until the promise resolves 
        let result = await promise;

        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

// Calling the async function
asyncFunc()