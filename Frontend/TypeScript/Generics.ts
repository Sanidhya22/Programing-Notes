// Define a generic function that takes an argument of type T and returns an array of T

function toArray<T>(arg: T): T[] {
  return [arg];
}

const array1 = toArray<number>(10); // array1 is of type number[]
const array2 = toArray<string>("hello"); // array2 is of type string[]

console.log(array1); // Output: [10]
console.log(array2); // Output: ['hello']
