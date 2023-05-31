/* Bind --

The bind() method allows an object to borrow a method from another
object without making a copy of that method. This is known as 
function borrowing in JavaScript.
It accepts agruments seperately
*/

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function (age) {
        return this.firstName + " " + this.lastName + " " + age;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

fullname = person.fullName.bind(member);  //fullname = person.fullName.bind(member,21);
console.log(fullname(21));


/* Diffrence between Apply and Bind
   
   Apply(): Invokes the function and allows us to pass arguments as an array. 
   Bind():   returns a new function, allows us to pass any number of arguments.
   Call():   Invokes the function  and allows us to pass any number of arguments.
*/ 
