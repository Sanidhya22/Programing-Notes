// Promises -
// The Promise object represents the completion or failure of an asynchronous operation and its resulting
// value. Promises basically returns Promise Objects.

// Why do we need Promises in Javascript ?
// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage
// when dealing with multiple asynchronous operations where callbacks can create callback
// hell leading to unmanageable code.

// const s1 = "EPAM";
// const s2 = "Systems";
// const promise = () => {
//   return new Promise(function (resolve, reject) {
//     if (s1 + s2 == "EPAMSystems") {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// };

// promise().then(
//   () => {
//     console.log("Company Name is Correct");
//   },
//   () => {
//     console.log("Company Name is Incorrect");
//   }
// );

const s1 = "EPAM";
const s2 = "Systems";
const promise = () => {
  return new Promise(function (resolve, reject) {
    if (s1 + s2 == "EPAMSystems") {
      resolve();
    } else {
      reject();
    }
  });
};

promise()
  .then(
    () => {
      console.log("Company Name is Correct");
      throw new Error();
    },
    () => {
      console.log("Company Name is Incorrect");
    }
  )
  .catch(() => {
    console.log("Error Occured");
  });

// Note -
// 1. Inplace of resolve and reject we can specify any name it is not
//    mandatory to specify resolve and reject.

// 2. Catch Block is for handling error not for False condition of
//    Promise

// 3. Most People do not specify false condition function in then method
//    that why catch block will execute

// 4. We can also pass data to then block using arguments in resolve and
//    Reject

// Promise Chaining --
// Promise chaining is a syntax that allows us to chain together multiple asynchronous tasks in a specific
// order.

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        reject("Numbers must be non-negative");
      }
      resolve(a + b);
    }, 2000);
  });
};

add(1, 5)
  .then((sum) => {
    console.log(sum); // Print 3
    return add(sum, 4);
  })
  .then((sum2) => {
    console.log(sum2); // Print 7
  })
  .catch((e) => {
    console.log(e);
  });
