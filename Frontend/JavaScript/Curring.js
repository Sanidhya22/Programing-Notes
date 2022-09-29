
/* What do you mean by Curring in JavaScript ?
-> Currying simply means evaluating functions with multiple arguments by decomposing
   them into a sequence of functions with a single argument. 

   Currying is an advanced technique of working with functions. It’s used not only in
   JavaScript, but in other languages as well.

   Currying is a transformation of functions that translates a function from callable 
   as f(a, b, c) into callable as f(a)(b)(c).*/

  /*  Advantages of Curring in Javasript
   ----------------------------------
   1. It helps to create a higher-order function.
   2. It’s easier to read the code and understand what it’s doing using Curring.
   3. Currying will make our code easier to refactor. Currying also creates a more
      declarative code base.
 */


//Normal way of calling function
function addition(a, b, c) {
    return a + b + c;
}
console.log(addition(12, 34, 67));



//Another way of Caling Function
function Sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
let res = Sum(13);
let data = res(14);
let ans = data(15);
console.log(ans);



//Curring in Function
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
let result = add(45)(75)(100);
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