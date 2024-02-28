//    What do you mean by Destructuring in JavaScript ?
// -> Destructuring is an efficient way to extract multiple values from data that is stored in 
//    arrays or objects. 

// Example 1
arr = ["Hello", "World"];
const [first, second] = arr;
console.log(first); // Hello
console.log(second); // World

//Example 2
const colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

const [color1, color2, color3] = colors;
console.log(color1); // Violet
console.log(color2); // Indigo
console.log(color3); // Blue

const [a, b, ...args] = colors;
console.log(a); // Violet
console.log(b); //Indigo
console.log(args); //["Blue", "Green", "Yellow", "Orange", "Red"]

//Example 3
const obj = { num1: 1, num2: 2 };
const { num1, num2 } = obj;
console.log(num1); // 1
console.log(num2); // 2
