// Define a base class
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Method to display vehicle details
  displayInfo() {
    return `${this.make} ${this.model}`;
  }
}

// Define concrete subclasses
class Car extends Vehicle {
  constructor(make, model) {
    super(make, model);
    this.type = "Car";
  }
}

class Truck extends Vehicle {
  constructor(make, model) {
    super(make, model);
    this.type = "Truck";
  }
}

// Define the factory class
class VehicleFactory {
  createVehicle(type, make, model) {
    switch (type) {
      case "car":
        return new Car(make, model);
      case "truck":
        return new Truck(make, model);
      default:
        throw new Error("Invalid vehicle type.");
    }
  }
}

// Example usage:
const factory = new VehicleFactory();

const car = factory.createVehicle("car", "Toyota", "Corolla");
console.log(car.displayInfo()); // Output: Toyota Corolla

const truck = factory.createVehicle("truck", "Ford", "F-150");
console.log(truck.displayInfo()); // Output: Ford F-150
