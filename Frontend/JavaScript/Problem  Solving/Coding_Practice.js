/* 1. Find Odd and Even numbers from an array  */

//Approach 1
var x = [2, 3, 4, 5, 6, 7, 8];

var res1 = x.filter((data) => data % 2 === 0);
var res2 = x.filter((data) => data % 2 !== 0);
console.log("Even "+res1);
console.log("Odd "+res2);

//Approach 2
even = x.reduce(
  (arr, data) => {
    if (data % 2 === 0) {
      arr.even.push(data);
    } else {
      arr.odd.push(data);
    }
    return arr;
  },
  { even: [], odd: [] }
);

console.log(even);


/* Write a Function that will resolve if number is Even and reject when it is Odd */

const acceptEven = (x) => {
    return new Promise ((resolve,reject) => {
      if(x%2 === 0){
        //return resolve("Even");
        resolve("Even");
        console.log("Executed");
      }
      else{
        reject("odd");
        console.log("Executed");
      }
    })
  }
  
  acceptEven(2).then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  })
  

  // Find first elements of both the arrays which are not Present in each other

  




