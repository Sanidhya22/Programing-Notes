class Car {
    constructor(wheels = 4, color = 'black') {
      this.wheels = wheels;
      this.color = color;
    }
  
    describe() {
      return `This car is ${this.color} and has ${this.wheels} wheels.`;
    }
  
    clone() {
      // Create a new instance using the constructor with the same properties
      return new this.constructor(this.wheels, this.color);
    }
  }
  
  // Create an instance using the class
  const carPrototype = new Car();
  
  // Customize the prototype instance
  carPrototype.color = 'blue';
  
  // Create new instances using the prototype
  const car1 = carPrototype.clone();
  const car2 = carPrototype.clone();
  
  // Output descriptions of the cars
  console.log(car1.describe()); // Output: This car is blue and has 4 wheels.
  console.log(car2.describe()); // Output: This car is blue and has 4 wheels.
  