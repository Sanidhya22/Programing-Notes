// Complex subsystems
class Subsystem1 {
  operation1() {
    console.log("Subsystem 1: Ready!");
  }
}

class Subsystem2 {
  operation2() {
    console.log("Subsystem 2: Ready!");
  }
}

class Subsystem3 {
  operation3() {
    console.log("Subsystem 3: Ready!");
  }
}

// Facade
class Facade {
  constructor() {
    this.subsystem1 = new Subsystem1();
    this.subsystem2 = new Subsystem2();
    this.subsystem3 = new Subsystem3();
  }

  operate() {
    console.log("Facade is coordinating the subsystems:");
    this.subsystem1.operation1();
    this.subsystem2.operation2();
    this.subsystem3.operation3();
  }
}

// Usage
const facade = new Facade();
facade.operate();
