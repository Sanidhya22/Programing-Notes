class Singleton {
  constructor() {
    if (!Singleton.instance) {
      // If instance doesn't exist, create it
      this.data = "I am the singleton instance.";
      Singleton.instance = this;
    }
    return Singleton.instance; // Return the existing instance
  }

  getData() {
    return this.data;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // Output will be true, since both variables refer to the same instance

console.log(instance1.getData()); // Output will be "I am the singleton instance."
console.log(instance2.getData()); // Output will also be "I am the singleton instance."
