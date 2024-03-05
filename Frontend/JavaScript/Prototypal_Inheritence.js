// What do you mean by Protoypal Inheritance in Javascript ?
// prototypal inheritance is a mechanism where objects inherit properties and methods directly from other
// objects, called prototypes.

// What do you mean by Prototypes in JavaScript?
// Prototypes serve as a mechanism for implementing inheritance and sharing behavior between objects.
// Every object in JavaScript has an internal property called [[Prototype]], which references another object 
// known as its prototype. 

function Emp(name, age, sal, designation) {
  this.name = name;
  this.age = age;
  this.salary = sal;
  this.designation = designation;
}

var e1 = new Emp("Suman", 33, 4500, "Programmer");
var e2 = new Emp("Sujit", 25, 2500, "Manager");
Emp.prototype.company = "EPAM";

console.log(e1);
console.log(e2);

//Adding Properties and Methods to Arrays
Array.prototype.show = function () {
  return this;
};
console.log(cities.show());

const cities = ["Bangalore", "Bokaro", "Nodia"];
Array.prototype.convertIntoObject = function () {
  const newObj = {};
  this.forEach((element) => {
    newObj[element] = element;
  });
  return newObj;
};
console.log(cities.convertIntoObject());

//Object Inheriting Properties and Methods of Another Object
const obj = {
  name: "Sujit Kumar Verma",
  getName: function () {
    return this.name;
  },
};
console.log(obj);
const obj1 = {
  roll: 1,
  __proto__: obj,
};

console.log(obj1);
console.log(obj1.getName());

//Adding a New Property to String as a Prototype for Reversing String
String.prototype.reverseString = function () {
  const reverse = this.split("").reverse().join("");
  return reverse;
};

const PersonName = "Sujit";
const result = PersonName.reverseString();
console.log(result);
