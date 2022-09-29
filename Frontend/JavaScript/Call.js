/* Call Function --

The call() method is a predefined JavaScript method Using which an object can use a 
method belonging to another object */

const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

person2.fullName = person.fullName;
console.log(person2.fullName());

console.log(person.fullName.call(person1));
