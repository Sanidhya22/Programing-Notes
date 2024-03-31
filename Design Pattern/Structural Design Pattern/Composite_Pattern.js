// Component interface
class Component {
  constructor(name) {
    this.name = name;
  }

  // Common method for both Leaf and Composite
  operation() {
    console.log(this.name);
  }
}

// Leaf
class Leaf extends Component {
  constructor(name) {
    super(name);
  }
}

// Composite
class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  // Operation for composite that delegates to children
  operation() {
    console.log(`Composite: ${this.name}`);
    this.children.forEach((child) => {
      child.operation();
    });
  }
}

// Usage
const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");
const leaf3 = new Leaf("Leaf 3");

const composite = new Composite("Composite 1");
composite.add(leaf1);
composite.add(leaf2);

const composite2 = new Composite("Composite 2");
composite2.add(leaf3);

composite.add(composite2);

// Operation called on composite, which in turn calls operation on children
composite.operation();
