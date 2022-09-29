/* Async Await -- 
Async makes a function return a Promise
Await makes a function wait for a Promise 

The Purpose of async / await is to simplify the syntax necessary to consume promise-based
APIs. The behavior of async / await is similar to combining generators and promises. Async
functions always return a promise.*/

/* function data() {
    return "Sujit";
}

async function getusers() {
    const metadata = await data();
    console.log("Bokaro");
    return metadata;
}

//console.log("Welcome");
const user = getusers();
//console.log(user);
user.then((data)=>{
    console.log(data);
})
console.log("Bye");
 */



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