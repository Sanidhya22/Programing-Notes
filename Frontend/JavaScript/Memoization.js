// What do you mean by Memoization ?
// Memoization is a technique for speeding up applications by caching the results of
// Expensive function calls and returning them when the same inputs are used again.

const calculate = (n) => {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

const cache = {};
const memoize = (func) => {
  return function (...args) {
    const n = args[0];
    if (n in cache) {
      console.log("Cache Used");
      return cache[n];
    } else {
      console.log("calculateulating for the First Time");
      const sum = func(n);
      cache[n] = sum;
      console.log(cache);
      return result;
    }
  };
};

console.time();
const check1 = memoize(calculate);
console.log(check1(5));
console.timeEnd();

console.time();
const check2 = memoize(calculate);
console.log(check2(5));
console.timeEnd();
