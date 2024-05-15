// Call --

// The call() method is a predefined JavaScript method Using which an object can use a 
// method belonging to another object

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.fullName.call(person1, "Oslo", "Norway"));
