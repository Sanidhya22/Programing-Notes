//Question 1
function fruit() {
  console.log(name);
  console.log(price);
  var name = "Sujit";
  let price = 20;
}
fruit();

// OUTPUT -
// undefined
// ReferenceError Cannot access before decalartion
// It is giving ReferenceError because of Temporal Dead Zone

//Question 2
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }

// OUTPUT - 3 3 3
// All three setTimeout callbacks are executed after the loop completes, and by that time, the value of i 
// is 3. So, each callback logs the value 3. This behavior is because JavaScript shares the same variable 
// i across all iterations of the loop due to closure.


//Question 3
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

// OUTPUT - 0 1 2
// This happens because let keyword creates a new binding for i in each iteration of the loop, which means
// each iteration has its own i variable. This is unlike var, which creates a single variable for the 
// entire loop.

// let, each iteration of the loop has its own i, and the setTimeout callbacks capture the value of i 
// specific to each iteration at the time they are created. Hence, you get the expected sequence of 
// numbers logged to the console.

//Question 4
console.log(+true);
console.log(typeof +true);
console.log(typeof typeof +true);

// OUTPUT - 1 number string
// The typeof of any datatype is string

//Question 5
console.log(!"Sujit");
console.log(!!"Sujit");
console.log(typeof "Sujit");

// OUTPUT - false true string
// The boolean value of a non empty String is true

//Question 6
const data = "size";
const bird = {
  size: "small",
};

console.log(bird[data]);
console.log(bird["size"]);
console.log(bird.size);
console.log(bird.data);

// OUTPUT - small small small undefined

//Question 7
const c = { name: "Sujit Kumar Verma" };
let d;
d = c;
c.name = "Allu Arjun";
console.log(d);

// OUTPUT - { name: 'Allu Arjun' }
// Here the We are the not copying the value of c into d but here we are assigning
// the Reference of c into d.

//Question 8
var x;
var x = 10;
console.log(x);

// OUTPUT - 10

//Question 9
function fruit() {
  console.log("Woof");
}

fruit.name = "apple";
fruit();

// OUTPUT - woof

//Question 10
function getAge(...args) {
  console.log(args);
  console.log(typeof args);
}
getAge(21);

// OUTPUT - [21] object
// ...args is a rest Operator which accepts infinite no of arguments as an Array.

//Question 11
const sum = eval("10*10+5");
console.log(sum);

// OUTPUT - 105
// eval takes a String and performs the Operation of the Stringified values

//Question 12

const obj = { 1: "a", 2: "b", 3: "c" };
console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty(1));

// OUTPUT - true true
// In hasOwnProperty we can specify the key as both String or as Numberic Value.

//Question 13
const foo = () => console.log("First");
const bar = () => {
  setTimeout(() => {
    console.log("Second");
  });
};
const baz = () => console.log("Third");

bar();
foo();
baz();

// OUTPUT - First Third Second
// No Matter whether we specify the timer in setTimeout or not it will get executed at the End.

//Question 14
function sayHi() {
  return (() => 100)();
}
console.log(typeof sayHi());

// OUTPUT -
// number

//Question 15
const num = [1, 2, 3];
num[9] = 100;
console.log(num);

// OUTPUT -
// [ 1, 2, 3, <6 empty items>, 100 ]

//Question 16
console.log(!!null);
console.log(!!"");
console.log(!!0);
console.log(!!"Sujit");
console.log(!!1);
console.log(!!{});
console.log(!!{ name: "Sujit" });

// OUTPUT -
// false
// false
// false
// true
// true
// true
// true

//Question 17
console.log(
  setInterval(() => {
    console.log("Hi");
  }, 1000)
);
console.log(
  setInterval(() => {
    console.log("Hi");
  }, 1000)
);
console.log(
  setInterval(() => {
    console.log("Hi");
  }, 1000)
);

// OUTPUT -
// 2 3 4 Hi Hi Hi ...

//Question 18
console.log([..."Sujit"]);

// OUTPUT -
// [ 'S', 'u', 'j', 'i', 't' ]
// Here we are using Spread Operator so It will spread the string into indivisual character array.

//Question 19
console.log(3 + 4 + "5");
console.log("5" + 3);
console.log("5" - 3);
console.log(3 - "5");
console.log("5" * 4);
console.log(5 + 4 * "5");

// OUTPUT -
// 75
// 53
// 2
// -2
// 20
// 45

//Question 20
// console.log([2] === [2]);

// OUTPUT- false
// Here both the arrays are having different memory location

//Question 21
(() => {
  let x = (y = 10);
})();
console.log(typeof x);

// OUTPUT -
// undefined
// Here the scope of x is local so that why we will get undefined for x in the global Scope because
// in the global scope value of x is undefined.

//Question 22
(() => {
  let x = (y = 21);
})();
console.log(typeof y);
console.log(y);

// OUTPUT -
// number 21
// Here y is not declared so by default it will get appended to the the global scope.

//Question 23
console.log(!true - true);
console.log(true + 10);

// OUTPUT - -1 11

//Question 24
var x = 100;
(() => {
  var x = 20;
})();
console.log(x);

// OUTPUT - 100
// Here the value of x will be 100 because there will be seprate memory for both inner and outer var x.

//Question 25
var x = 100;
(() => {
  x = 20;
})();
console.log(x);

// OUTPUT - 20
// Here the value of x will be 20 because we are not redeclaring variable with var keyword so the global
// declared var variable will be modified

//Question 26
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);
{
  numbers.push(i + 1);
}
console.log(numbers);

// OUTPUT - [5]
// Here the value of i after for loop completion will be 4

//Question 27

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}

// OUTPUT - 3 3 3
// Here for each iteration of the for loop the setTimeout will be registered in the web API
// and will execute log function after for loop will get finished and i is having global
// scope so the value of i after for iteration will be 3.

// when performing map, filter, reduce, forEach of this array-
// [100, true, 'Hello', false, '', undefined, null, 0, {}, []], what is the o/p?

arr = [100, true, "Hello", false, "", undefined, null, 0, {}, []];
const result1 = arr.map((item) => item);
console.log(result1);
// OUTPUT - [100, true, 'Hello', false, '', undefined, null, 0, {}, []]
const result2 = arr.filter((item) => item);
console.log(result2);
// OUTPUT - [ 100, true, 'Hello', {}, [] ]
const result3 = arr.reduce((accm, item) => item);
console.log(result1);
//OUTPUT - []
const result4 = arr.forEach((item) => {
  return item;
});
console.log(result4);
// OUTPUT - undefined
