// 1. Progarm to print the factorial of a Number

number = 7;
let fact = 1;
for (let i = 1; i <= number; i++) {
  fact = fact * i;
}
console.log(fact);
//OUTPUT - 5040

// 2. Program to find check whether number is prime number or not

number = 36;
let count = 0;
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    count++;
  }
}

if (count === 2) {
  console.log("Number is Prime Number");
} else {
  console.log("Number is not a Prime Number");
}
//OUTPUT - Number is not a Prime Number

// 3. Program to find Prime Number Within a given Range

const low = 25;
const high = 75;
for (let i = low; i <= high; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log(i + " is the Prime Number");
  }
}
/* OUTPUT - 
29 is the Prime Number
31 is the Prime Number
37 is the Prime Number
41 is the Prime Number
43 is the Prime Number
47 is the Prime Number
53 is the Prime Number
59 is the Prime Number
61 is the Prime Number
67 is the Prime Number
71 is the Prime Number
73 is the Prime Number */

// 4. Program to Print the Fibonacci Series Upto n Numbers

const number = 15;
let n1 = 0;
let n2 = 1;
let nextTerm;
console.log("Fibonacci Series:");
for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
/* OUTPUT -
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377 */

// 5. Write a function to perform this
// const fn  = doSomething(100)
// fn(200) // o/p- 200
// fn(400) // o/p- 400

function doSomething(intialValue) {
  let max = intialValue;
  function findMax(value) {
    max = Math.max(value, max);
    return max;
  }
  return findMax;
}

const fn = doSomething(100);
console.log(fn(200));
console.log(fn(400));

// 6. Write a program to do addition of the numbers present in the string
// const str = "AB_12_CD_23_EF_20";
// OUTPUT = 12+23+20 = 55

str = "AB_12_CD_23_EF_20";
const numbers = str.match(/\d+/g);
let sum = 0;
if (numbers) {
  numbers.forEach((number) => {
    sum = sum + parseInt(number);
  });
}
console.log("Sum of numbers:", sum);

// 7. Write a program find characters present in the string
// const str = "AB_12_CD_23_EF_20";
// OUTPUT = ['A','B','C','D','E','F']

str = "AB_12_CD_23_EF_20";
characters = [];
for (let i = 0; i < str.length; i++) {
  const char = str.charAt(i);
  if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
    characters.push(char);
  }
}
result = [...new Set(characters)];
console.log(result);

// Write a program to longest Subarray Whose Sum is equal to target sum

function longestSubarrayWithTargetSum(arr, target) {
  let maxLength = 0;
  let startIdx = -1;
  let endIdx = -1;

  // Iterate through all possible subarrays
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      // Check if the current subarray has the target sum
      if (currentSum === target) {
        let currentLength = j - i + 1;
        // Update maxLength and indices if this subarray is longer
        if (currentLength > maxLength) {
          maxLength = currentLength;
          startIdx = i;
          endIdx = j;
        }
      }
    }
  }

  // Return the longest subarray indices
  return [startIdx, endIdx];
}

const arr = [1, 2, 3, 4, 5, 2];
const targetSum = 9;
const longgestSubarray = [];
const [startingIndex, endingIndex] = MaxSumArray(arr, targetSum);
if (startingIndex == -1 && endingIndex == -1) {
  console.log("No subarray found with the target sum.");
} else {
  for (let k = startingIndex; k <= endingIndex; k++) {
    longgestSubarray.push(arr[k]);
  }
  console.log(longgestSubarray);
}
