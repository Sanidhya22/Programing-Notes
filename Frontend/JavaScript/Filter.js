/* Filter -
   Filter is a builtin Method in Javascript which is being used for filtering array.
   The filter() method creates a new array with array elements that passes a test.
   Filter is also a Higher Order Function */



arr = [11, 12, 13, 14, 15, 16];

/* function isEven(x) {
    return x % 2 === 0;
}

const output = arr.filter(isEven);
console.log(output); */


const output = arr.filter((data) => data % 2 === 0);
console.log(output);