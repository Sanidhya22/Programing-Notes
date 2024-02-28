
//    What do you mean by Curring in JavaScript ?
// -> Currying is a functional programming technique in JavaScript where a function with 
//    multiple parameters is transformed into a sequence of functions, each taking a single 
//    parameter.

//   Advantages of Curring in Javasript
//    ----------------------------------
//    1. It facilitates the use of higher-order functions.
//    2. It is easier to read the code and understand what it’s doing using Curring.
//    3. It can simplify unit testing Since curried functions accept their arguments one at a time, 
//       it's easier to provide inputs and test the behavior of the function for various scenarios.



//Normal Function
function addition(a, b, c) {
    return a + b + c;
}
console.log(addition(12, 34, 67));

//Curring Function
function Sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
const res1 = Sum(13);
const res2 = res1(14);
const res3 = res2(15);
console.log(res3);


function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
const result = add(45)(75)(100);
console.log(result);



//Real time use of Curring in JavaScript Using Object
userObj = {
    name: "Sujit",
    age: 28
}
function userInfo(obj) {
    return function (userinfo) {
        return obj[userinfo];
    }
}
let answer = userInfo(userObj);
console.log(answer('name'));