// Mixins -
// Mixins in JavaScript refer to a pattern where objects can borrow (or mixin) methods and properties
// from other objects, allowing for code reuse and composition without inheritance.

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
