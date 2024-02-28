// What do you mean by function chaining ?
// Function chaining in JavaScript is a technique where multiple function calls are chained together in a
// single statement, typically on the same object or result of a function call.

// Chaining with setter methods
let person = {
  firstName: "",
  lastName: "",
  setFirstName: function (name) {
    this.firstName = name;
    return this; // Return the object itself to enable chaining
  },
  setLastName: function (name) {
    this.lastName = name;
    return this; // Return the object itself to enable chaining
  },
};

person.setFirstName("John").setLastName("Doe");

console.log(person.firstName); // Output: John
console.log(person.lastName); // Output: Doe
