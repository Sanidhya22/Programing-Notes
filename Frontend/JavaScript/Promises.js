/* Promises - 
The Promise object represents the completion or failure of an asynchronous 
operation and its resulting value. 
Promises basically returns Promise Objects*/

 /*Why do we need Promises in Javascript ?
->Promises are used to handle asynchronous operations in JavaScript.Promises are easy to manage 
  when dealing with multiple asynchronous operations where callbacks can create callback 
  hell leading to unmanageable code. */

/* 
var s1 = "EPAM";
var s2 = "Systems";
var promise = new Promise(function (resolve, reject){
    if ((s1 + s2) == "EPAMSystems"){
        resolve();
    }
    else {
        reject();
    }
})

promise.then(
    () => {
        console.log("Company Name is Correct");
    }, () => {
        console.log("Company Name is Incorrect")
    }) */

/* Note - 
1. Inplace of resolve and reject we can specify any name it is not
   mandatory to specify resolve and reject.

2. Catch Block is for handling error not for reject condition of 
   Promise.
   
3. Most People do not specify false condition function in then method
   that why catch block will execute .
   
4. We can also pass data to then block using arguments in resolve and
   Reject*/


/*
var s1 = "EPAM";
var s2 = "Systems";
var promise = new Promise(function (resolve, reject) {
    if ((s1 + s2) == "EPAMSystems") {
        resolve();    }
    else {
        reject();
    }
})

promise.then(
    () => {
        console.log("Company Name is Correct");
        throw new Error;
    }, () => {
        console.log("Company Name is Incorrect");
    })
    .catch(()=>{
        console.log("Error Occured");
    }) */


/* Promise Chaining --
Promise chaining is a syntax that allows us to chain together multiple 
asynchronous tasks in a specific order.  
   */

/* var s1 = "EPAM";
var s2 = "Systems";
var promise = new Promise(function (resolve, reject) {
    if ((s1 + s2) == "EPAMSystems") {
        resolve();
    }
    else {
        reject();
    }
})

promise.then(
    () => {
        console.log("Company Name is Correct");
        //throw new Error;
        // In this case second function of second then is executed
    }, () => {
        console.log("Company Name is Incorrect");
    })
    .then(
        () => {
            console.log("Company is EPAM Systems");
        },
        () => {
            console.log("Company is not EPAM Systems");
        })
    .catch(() => {
        console.log("Error Occured");
    }) */


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                reject('Numbers must be non-negative');
            }
            resolve(a + b)
        }, 2000)
    })
}

add(1, 5).then((sum) => {
    console.log(sum);  // Print 3   
    return add(sum, 4);
}).then((sum2) => {
    console.log(sum2); // Print 7 
}).catch((e) => {
    console.log(e);
}); 


/* 
Promise.any() --

Promise.any() is a static method takes an iterable of promises as input and returns a single Promise. This 
returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value.
It rejects when all of the input's promises reject (including when an empty iterable is passed), with 
an AggregateError containing an array of rejection reasons.

 */

// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
// // setTimeout(callbackfunction, milliseconds, param1, param2 ...)

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

// Expected output: "quick"


/*

Promise.all() --

The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This 
returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. 
It rejects when all of the input's promises reject (including when an empty iterable is passed), with an 
AggregateError containing an array of rejection reasons.


*/

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]






