// Overridng - 
// Overriding typically refers to the ability of a subclass (derived class) to provide a new implementation 
// for a method that is already defined in its superclass (base class). This allows the subclass to 
// customize or extend the behavior of the inherited method.
// In overriding method names, arguments and signature must be same.

class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }

  display() {
    console.log("Name is " + this.name);
    console.log("Roll is " + this.roll);
  }
}

class Oec extends Student {
  display() {
    console.log("Name of OEC Student is " + this.name);
    console.log("Roll of OEC Student is " + this.roll);
  }
}

const res = new Oec("Sujit", 23);
res.display();
