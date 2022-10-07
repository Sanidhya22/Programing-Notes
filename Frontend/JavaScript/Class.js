/* Types of Programming Language 
1. Object Oriented Programming Language -  C++, Java, C#
2. Functional Oriented Programming Language - JavaScript, Scala
3. Procedural Oriented Programming Language - C 

Class - it is a Blueprint for Creating Objects consisting of data members , methods and 
objects also.

e.g-- */

//Normal Class With Constructor

/* class Emp {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Name" + this.name);
        console.log("Age" + this.age);
    }
}

let e1 = new Emp("Sujit", 22);
e1.display();*/



    //Inheritence in JavaScript 

/* class Emp {
    constructor() {
        console.log("Emp");
    }
}

class Clerk extends Emp {
}

let c1 = new Clerk(); */

/* OUTPUT - Emp


Note--
Here Child class Constructor does not call Parent class Constructor Technically,
Actually Due to inheritance all the Properties, Methods and Constructor of the Parent class is Available
to the Child class so that Why Parent class Contructor is called when we create object of child.

In JavaScript it is not mandatory to specify super keyword in the first Line of the
constructor.

JavaScript cannot have more than one constructor in the same class.
*/

class Emp {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}

class Clerk extends Emp {
    constructor(name, age, salary, designation) {
        super(name,age);
        this.salary = salary;
        this.designation = designation;
    }
    displayAll() {
        super.display();
        console.log("Salary: "+this.salary);
        console.log("Designation: "+this.designation);
    }
}

let c1 = new Clerk("Raju",25,10000,"Clerk");
let c2 = new Clerk("Prakash",33,8000,"Clerk");
c1.displayAll();
c2.displayAll();