// What do you mean by Memoization ?
// Memoization is a technique for speeding up applications by caching the results of
// Expensive function calls and returning them when the same inputs are used again.

const calc = (n) => {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

var cache = {};
const memoize = (func) => {
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("Cache Used");
      return cache[n];
    } else {
      console.log("Calculating for the First Time");
      let result = func(n);
      cache[n] = result;
      console.log(cache);
      return result;
    }
  };
};

console.time();
const check = memoize(calc);
console.log(check(5));
console.timeEnd();

console.time();
const check1 = memoize(calc);
console.log(check1(5));
console.timeEnd();
