// Adaptee: The incompatible class
class OldCalculator {
  constructor() {
    this.operations = {};
  }

  setOperation(operator, num1, num2) {
    switch (operator) {
      case "add":
        this.operations[operator] = num1 + num2;
        break;
      case "subtract":
        this.operations[operator] = num1 - num2;
        break;
      default:
        console.log("Invalid operation");
        break;
    }
  }

  getOperation(operator) {
    return this.operations[operator];
  }
}

// Target: The interface expected by the client
class NewCalculator {
  constructor() {
    this.operations = {};
  }

  add(num1, num2) {
    this.operations["add"] = num1 + num2;
  }

  subtract(num1, num2) {
    this.operations["subtract"] = num1 - num2;
  }

  getOperation(operator) {
    return this.operations[operator];
  }
}

// Adapter: Adapts the interface of OldCalculator to NewCalculator
class CalculatorAdapter {
  constructor() {
    this.newCalculator = new NewCalculator();
  }

  operate(operator, num1, num2) {
    if (operator === "add") {
      this.newCalculator.add(num1, num2);
    } else if (operator === "subtract") {
      this.newCalculator.subtract(num1, num2);
    } else {
      console.log("Invalid operation");
    }
  }

  getOperation(operator) {
    return this.newCalculator.getOperation(operator);
  }
}

// Usage
const adapter = new CalculatorAdapter();
adapter.operate("add", 5, 3); // Using old interface via adapter
console.log(adapter.getOperation("add")); // 8
