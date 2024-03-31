// Mixins -
// Mixins in JavaScript are a way to extend the functionality of objects or classes by combining multiple sets 
// of properties or methods from different sources. They allow you to "mix in" additional behavior to objects 
// or classes without inheritance.

// Define a mixin object with reusable methods
const myMixin = {
  sayHello() {
    console.log(`Hello, ${this.name}!`);
  },
  sayGoodbye() {
    console.log(`Goodbye, ${this.name}!`);
  },
};

// Define a class
class Person {
  constructor(name) {
    this.name = name;
  }
}

// Assining the methods from myMixin into the Person class prototype
Object.assign(Person.prototype, myMixin);

// Create an instance of Person
const person = new Person("Alice");

// Call methods from the mixin
person.sayHello(); // Output: Hello, Alice!
person.sayGoodbye(); // Output: Goodbye, Alice!
