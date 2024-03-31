// Flyweight class representing shared objects
class Flyweight {
  constructor(intrinsicState) {
    this.intrinsicState = intrinsicState;
  }

  operation(extrinsicState) {
    console.log(
      `Operation with intrinsic state: ${this.intrinsicState} and extrinsic state: ${extrinsicState}`
    );
  }
}

// Flyweight factory to manage and create flyweight objects
class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }

  getFlyweight(key) {
    if (!this.flyweights[key]) {
      this.flyweights[key] = new Flyweight(key);
    }
    return this.flyweights[key];
  }

  getFlyweightsCount() {
    return Object.keys(this.flyweights).length;
  }
}

// Client code
const factory = new FlyweightFactory();

// Use flyweights
const flyweight1 = factory.getFlyweight("shared1");
const flyweight2 = factory.getFlyweight("shared2");
const flyweight3 = factory.getFlyweight("shared1");

flyweight1.operation("state1");
flyweight2.operation("state2");
flyweight3.operation("state3");

console.log("Number of flyweights created:", factory.getFlyweightsCount());
