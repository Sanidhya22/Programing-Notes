/* Program to find the Elements of both the Arrays which are not Present in each other */

function uniqueDistinct(arr1, arr2) {
    return [
      ...[...new Set(arr1)].filter(value => ![...new Set(arr2)].includes(value)),
      ...[...new Set(arr2)].filter(value => ![...new Set(arr1)].includes(value))
    ];
  }
  let arr1 = [1,1,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,1,8,8];   
  let arr2 = [1,1,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,1,8,8,9,9,9,9];
  let res = uniqueDistinct(arr1, arr2); // o/p: [7, 9]
  console.log(res);

  