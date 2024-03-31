// Interface or base class
class Coffee {
  cost() {
    return 5; // Base cost of a simple coffee
  }

  description() {
    return "Coffee";
  }
}

// Decorator
class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost();
  }

  description() {
    return this.coffee.description();
  }
}

// Concrete Decorator 1
class Milk extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  cost() {
    return this.coffee.cost() + 2; // Additional cost for milk
  }

  description() {
    return this.coffee.description() + ", Milk";
  }
}

// Concrete Decorator 2
class Sugar extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  cost() {
    return this.coffee.cost() + 1; // Additional cost for sugar
  }

  description() {
    return this.coffee.description() + ", Sugar";
  }
}

// Usage
let myCoffee = new Coffee();
console.log(myCoffee.description(), "Cost:", myCoffee.cost()); // Output: Coffee Cost: 5

// Adding decorators
myCoffee = new Milk(myCoffee);
console.log(myCoffee.description(), "Cost:", myCoffee.cost()); // Output: Coffee, Milk Cost: 7

myCoffee = new Sugar(myCoffee);
console.log(myCoffee.description(), "Cost:", myCoffee.cost()); // Output: Coffee, Milk, Sugar Cost: 8
