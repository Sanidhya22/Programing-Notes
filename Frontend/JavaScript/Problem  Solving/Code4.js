/* 1. Find Odd and Even numbers from an array  */

//Approach 1
var x = [2, 3, 4, 5, 6, 7, 8];
var res1 = x.filter((data) => data % 2 === 0);
var res2 = x.filter((data) => data % 2 !== 0);
console.log("Even " + res1);
console.log("Odd " + res2);

//Approach 2
var x = [2, 3, 4, 5, 6, 7, 8];
const result = x.reduce(
  (obj, data) => {
    if (data % 2 === 0) {
      obj.even.push(data);
    } else {
      obj.odd.push(data);
    }
    return obj;
  },
  { even: [], odd: [] }
);
console.log(result);
//OUTPUT - { even: [ 2, 4, 6, 8 ], odd: [ 3, 5, 7 ] }

/* 2. Write a Function that will resolve if number is Even and reject when it is Odd */

const acceptEven = (x) => {
  return new Promise((resolve, reject) => {
    if (x % 2 === 0) {
      //return resolve("Even");
      resolve("Even");
      console.log("Executed");
    } else {
      reject("odd");
      console.log("Executed");
    }
  });
};

acceptEven(2)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

/* Program to find the first Element of both the Arrays which are not Present in each other */

function uniqueDistinct(arr1, arr2) {
  return [
    ...[...new Set(arr1)].filter(
      (value) => ![...new Set(arr2)].includes(value)
    ),
    ...[...new Set(arr2)].filter(
      (value) => ![...new Set(arr1)].includes(value)
    ),
  ];
}
let arr1 = [
  1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 1, 8, 8,
];
let arr2 = [
  1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 1, 8, 8, 9, 9, 9,
  9,
];
let res = uniqueDistinct(arr1, arr2); // o/p: [7, 9]
console.log(res);
