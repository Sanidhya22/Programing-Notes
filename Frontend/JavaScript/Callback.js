// Callback functions --
// Callback functions are the functions which are being passed as an argument to
// another function.


//Example 1

// const abc = function () {
//   console.log("Function ABC");
// };
// const xyz = function () {
//   console.log("Function XYZ");
// };
// function demo(...func) {
//   for (let i = 0; i < func.length; i++) {
//     func[i]();
//   }
// }
// demo(abc, xyz);

//Example 2

function myDisplayer(sum) {
  console.log(sum);
}

function myCalculator(num1, num2, myCallback) {
  const sum = num1 + num2;
  myCallback(sum);
}
myCalculator(5, 5, myDisplayer);
