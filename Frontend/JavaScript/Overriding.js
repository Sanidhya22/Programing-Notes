/* Overridng 
Whatever the Parent has by default available to the Child through inheritance, if
the Child is not satisfied with Parent class method implementation then Child is
allowed to redefine that Parent class method in Child class in its own way this
process is called overriding.

In overriding method names and arguments must be same. That is method
signature must be same.
*/

class Student{
    constructor(name,roll){
        this.name =  name;
        this.roll = roll;
    }

    display(){
        console.log("Name is "+this.name);
        console.log("Roll is "+this.roll);
    }
}

class Oec extends Student{
    display(){
        console.log("Name of OEC Student is "+this.name);
        console.log("Roll of OEC Student is "+this.roll);
    }
}

let res = new Oec("Sujit",23);
res.display();
