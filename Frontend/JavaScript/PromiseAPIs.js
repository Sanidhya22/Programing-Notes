// What are the different Promise APIs ?
// The different common Promise APIs are as follows -
// 1. Promise.resolve()
// 2. Promise.reject()
// 3. Promise.all()
// 4. Promise.race()
// 5. Promise.allSettled()
// 6. Promise.any()

// Promise.resolve() -
// Creates a resolved promise with the specified value. This method is useful for converting non-promise
// values into promises.

const resolvedPromise = Promise.resolve("Resolved value");

// Promise.reject() -
// Creates a rejected promise with the specified reason. This method is useful for creating a promise that
// is immediately rejected with an error.

const rejectedPromise = Promise.reject(new Error("Reason for rejection"));

// Promise.all() -
// Takes an array of promises and returns a single promise, it resolves when all of the input promises have
// resolved, or rejects if any of the input promises reject. It is useful for executing multiple asynchronous
// operations concurrently and waiting for all of them to complete.

var promises = [promise1, promise2, promise3];
Promise.all(promises)
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });

// Promise.any() -
// Takes an array of promises and returns a single promise it resolves as soon as one of the input promises
// resolves, or rejects if all of the input promises reject. It is useful when you only care about the first
// promise to fulfill successfully.

var promises = [promise1, promise2, promise3];
Promise.any(promises)
  .then((result) => {
    console.log("At least one promise resolved:", result);
  })
  .catch((error) => {
    console.error("All promises rejected:", error);
  });

// Promise.allSettled() -
// Takes an array of promises and returns a single promise it resolves after all of the input promises have
// settled (either resolved or rejected), providing an array of objects representing the fulfillment status
// of each promise.

var promises = [promise1, promise2, promise3];
Promise.allSettled(promises).then((results) => {
  console.log("All promises settled:", results);
});

// Promise.race() -
// Takes an array of promises and returns a single promise it resolves or rejects as soon as one of the
// input promises resolves or rejects. It is useful for racing multiple asynchronous operations and
// responding as soon as the first one completes.

const promises = [promise1, promise2, promise3];
Promise.race(promises)
  .then((result) => {
    console.log("First promise resolved:", result);
  })
  .catch((error) => {
    console.error("First promise rejected:", error);
  });
