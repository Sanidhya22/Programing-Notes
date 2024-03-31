// Original class that is open for extension but closed for modification
class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

// Extending the Shape class with new shapes
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  display() {
    console.log(this.width, this.height);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  display() {
    console.log(this.width, this.height);
  }
}

// Usage
const rectangle = new Rectangle(5, 10);
console.log(rectangle.area()); // Output: 50

const circle = new Circle(7);
console.log(circle.area()); // Output: ~153.94
