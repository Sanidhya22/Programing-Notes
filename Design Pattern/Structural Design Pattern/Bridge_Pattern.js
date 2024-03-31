// Abstraction
class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color.getColor();
  }

  draw() {
    console.log(`Drawing ${this.getColor()} shape`);
  }
}

// Implementor
class Color {
  constructor(value) {
    this.value = value;
  }

  getColor() {
    return this.value;
  }
}

// Concrete Implementor 1
class RedColor extends Color {
  constructor() {
    super("red");
  }
}

// Concrete Implementor 2
class BlueColor extends Color {
  constructor() {
    super("blue");
  }
}

// Usage
const redColor = new RedColor();
const blueColor = new BlueColor();

const redCircle = new Shape(redColor);
const blueSquare = new Shape(blueColor);

redCircle.draw(); // Drawing red shape
blueSquare.draw(); // Drawing blue shape
