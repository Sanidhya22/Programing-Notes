/* Apply--
The Apply() method is a predefined JavaScript method Using which an object can use a 
method belonging to another object.

Note --
The call() method takes arguments separately.
The apply() method takes arguments as an array.*/

// Using Apply Function 
const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));

//Using Call Function
/* const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person.fullName.call(person1, "Oslo", "Norway"));
 */

