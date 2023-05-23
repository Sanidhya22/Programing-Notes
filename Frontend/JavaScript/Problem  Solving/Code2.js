// 1. Program to find Maximum Element of an Array and Minimum Element of an Array

/* const arr = [9, 8, 7, 6, 5, 4];

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
console.log("Minimum Element of the Array is  " + arr[0]); */
/* OUTPUT -
Maximum Element of the Array is 9 
Minimum Element of the Array is 4 */


// 2. Program to find the kth Maximum and Minimum Elment of the Array

/* const arr = [9, 8, 7, 6, 5, 4];

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
console.log("kth Maximum Element of the Array " + arr[(arr.length-1) - (k - 1) ]);
console.log("kth Minimum Element of the Array is " + arr[0 + k -1]); */
/* OUTPUT -  
kth Maximum Element of the Array 7
kth Minimum Element of the Array is 7 */


// 3. Program to find the Unique Elements of the Array 

/* const arr = [9, 8, 8, 6, 6, 4, 4, 2, 1];
const uniqueArray = [...new Set(arr)]
console.log(uniqueArray); */
//OUTPUT - [ 9, 8, 6, 4, 2, 1 ]


// 4. Program to Print Duplicate ELements in an Array

/* const arry = [1,1,2,3,2,5,5,6,7,1];
const duplicateElements = [...new Set(arry.filter((item, index) => arry.indexOf(item) !== index))];
console.log(duplicateElements); */
//OUTPUT - [ 1, 2, 5 ]


// 5. Program to find the Intersection of the Two Arrays 

/* const arr1 = [1,2,3,3,4,5,4,6,7];
const arr2 = [1,2,3,5,6];
const uniqueArray1 = [...new Set(arr1)];
const uniqueArray2 = [...new Set(arr2)];
const arr = []
if(uniqueArray1.length > uniqueArray2.length){
    for(let element of uniqueArray2){
        if(uniqueArray1.includes(element)){
            arr.push(element);
        }
    }
}
else{
    for(let element of uniqueArray1){
        if(uniqueArray2.includes(element)){
            arr.push(element);
        }
    }
}
console.log(arr); */
//OUTPUT - [ 1, 2, 3, 5, 6 ]

// 6. Progarm to find the Union of the Two Arrays

const arr1 = [1,2,2,3,3,4,4,5,5];
const arr2 = [5,5,6,6,7,8,9,10];
const makeUnique1 = [...new Set(arr1)];
const makeUnique2 = [...new Set(arr2)];
const arr = makeUnique1.concat(makeUnique2);
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);
//OUTPUT - [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]


// 7. Program to find Maximum Occurance ELement in an Array

/* const arr = [10, 20, 30, 10, 20, 10, 10, 40];
arr.sort();
let max_count = 1,
  curr_count = 1;
let res = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] == arr[i - 1]) {
    curr_count++;
  } else {
    curr_count = 1;
  }
  if (curr_count > max_count) {
    max_count = curr_count;
    res = arr[i - 1];
  }
}
console.log("Maximum Occurance ELement in an Array is " + res);
 */
