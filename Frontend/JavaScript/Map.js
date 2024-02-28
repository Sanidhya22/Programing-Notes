// Map - 
// The map() method creates a new array by performing a operation on each array element.
// Map is also a Higher Order Function.

arr = [11, 12, 13, 14, 15];
const output = arr.map(function binary(x) {
  return x.toString(2);
});

console.log(output);
