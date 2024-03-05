// 1. Program to find Maximum Element of an Array and Minimum Element of an Array (Bubble Sort)

arr = [9, 8, 7, 6, 5, 4];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log("Maximum Element of the Array is " + arr[arr.length - 1]);
console.log("Minimum Element of the Array is  " + arr[0]);
// OUTPUT -
// Maximum Element of the Array is 9
// Minimum Element of the Array is 4

// 2. Program to find the kth Maximum and Minimum Elment of the Array (Bubble Sort)

arr = [9, 8, 7, 6, 5, 4];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
const k = 3;
console.log(
  "kth Maximum Element of the Array " + arr[arr.length - 1 - (k - 1)]
);
console.log("kth Minimum Element of the Array is " + arr[0 + k - 1]);
// OUTPUT -
// kth Maximum Element of the Array 7
// kth Minimum Element of the Array is 7

// 3. Program to find the Unique Elements of the Array

arr = [9, 8, 8, 6, 6, 4, 4, 2, 1];
const uniqueArray = [...new Set(arr)];
console.log(uniqueArray);
//OUTPUT - [ 9, 8, 6, 4, 2, 1 ]

// 4. Program to Print Duplicate ELements in an Array

arr = [1, 1, 2, 3, 2, 5, 5, 6, 7, 1];
const duplicateElements = [
  ...new Set(arr.filter((item, index) => arr.indexOf(item) !== index)),
];
console.log(duplicateElements);
//OUTPUT - [ 1, 2, 5 ]

// 5. Program to find the Intersection of the Two Arrays

arr1 = [1, 2, 3, 3, 4, 5, 4, 6, 7];
arr2 = [1, 2, 3, 5, 6];
const uniqueArray1 = [...new Set(arr1)];
const uniqueArray2 = [...new Set(arr2)];
arr = [];
if (uniqueArray1.length > uniqueArray2.length) {
  for (let element of uniqueArray2) {
    if (uniqueArray1.includes(element)) {
      arr.push(element);
    }
  }
} else {
  for (let element of uniqueArray1) {
    if (uniqueArray2.includes(element)) {
      arr.push(element);
    }
  }
}
console.log(arr);
//OUTPUT - [ 1, 2, 3, 5, 6 ]

// 6. Progarm to find the Union of the Two Arrays

const arr1 = [1, 2, 2, 3, 3, 4, 4, 5, 5];
const arr2 = [5, 5, 6, 6, 7, 8, 9, 10];
const arr = arr1.concat(arr2);
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);
//OUTPUT - [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// 7. Program to find Maximum Occurance ELement in an Array

function findMaxOccurringElement(arr) {
  const frequencyMap = {};
  arr.forEach((element) => {
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }
  });
  let maxFrequency = 0;
  let maxOccurringElement = null;
  for (const element in frequencyMap) {
    if (frequencyMap[element] > maxFrequency) {
      maxFrequency = frequencyMap[element];
      maxOccurringElement = element;
    }
  }
  return maxOccurringElement;
}

arr = [1, 2, 3, 4, 5, 2, 2, 3, 3, 3];
const maxOccurringElement = findMaxOccurringElement(arr);
console.log("Maximum occurring element:", maxOccurringElement);
