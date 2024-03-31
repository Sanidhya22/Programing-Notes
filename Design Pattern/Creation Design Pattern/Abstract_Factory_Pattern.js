// Abstract factory interface
class AbstractVehicleFactory {
  createCar() {}
  createTruck() {}
}

// Concrete factory 1
class ToyotaFactory extends AbstractVehicleFactory {
  createCar() {
    return new ToyotaCar();
  }
  createTruck() {
    return new ToyotaTruck();
  }
}

// Concrete factory 2
class FordFactory extends AbstractVehicleFactory {
  createCar() {
    return new FordCar();
  }
  createTruck() {
    return new FordTruck();
  }
}

// Abstract product classes
class Car {
  drive() {}
}

class Truck {
  drive() {}
}

// Concrete product classes for Toyota vehicles
class ToyotaCar extends Car {
  drive() {
    console.log("Driving Toyota car");
  }
}

class ToyotaTruck extends Truck {
  drive() {
    console.log("Driving Toyota truck");
  }
}

// Concrete product classes for Ford vehicles
class FordCar extends Car {
  drive() {
    console.log("Driving Ford car");
  }
}

class FordTruck extends Truck {
  drive() {
    console.log("Driving Ford truck");
  }
}

// Example usage:
const toyotaFactory = new ToyotaFactory();
const fordFactory = new FordFactory();

const toyotaCar = toyotaFactory.createCar();
toyotaCar.drive(); // Output: Driving Toyota car

const fordTruck = fordFactory.createTruck();
fordTruck.drive(); // Output: Driving Ford truck
