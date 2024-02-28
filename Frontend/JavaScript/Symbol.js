// Symbol Datatype -
// It is a New Datatype which is added in Ecamscript6.
// It is a Primitive Datatype.
// It Cannot be recreated.
// It is a Unique Identifier.

const s1 = Symbol(); // In the Backend it will create a Unique Identifier like 767hdjbdhb78hj
console.log(s1);
// OUTPUT -
// Symbol()

const s2 = Symbol();
console.log(s1 === s2);
// OUTPUT -
// false 


const s3 = Symbol("Hello");
const s4 = Symbol("Hello");
console.log(s3 === s4);

// Here Both the Symbol Datatype and Value is same but Refernce Id is Different so that why
// it is returning false.

// A Symbol value can be as an Identifier for Object Properties.

const person = {
  name: "Sujit",
  age: 20,
  city: "Bokaro",
};
person.name = "Karan";
console.log(person);

// Here We Person object name property value will get changed.
// but if we want to get the previous value of the property then we can use Symbol Datatype.

const name = Symbol("Person Name");
const person = {
  [name]: "Sujit",
  age: 20,
  city: "Bokaro",
};
person.name = "Karan";
console.log(person);
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
