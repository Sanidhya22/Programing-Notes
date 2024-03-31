class ObjectPool {
  constructor() {
    this.pool = [];
  }

  // Initialize the pool with a specified number of objects
  initialize(size) {
    for (let i = 0; i < size; i++) {
      this.pool.push(this.createObject());
    }
  }

  // Method to create a new object
  createObject() {
    return {}; // In a real-world scenario, you might create more complex objects
  }

  // Method to acquire an object from the pool
  acquire() {
    if (this.pool.length > 0) {
      return this.pool.pop(); // Retrieve an object from the pool
    } else {
      return this.createObject(); // If the pool is empty, create a new object
    }
  }

  // Method to release an object back to the pool
  release(object) {
    this.pool.push(object); // Return the object to the pool
  }
}

// Example usage:
const pool = new ObjectPool();
pool.initialize(5);

const obj1 = pool.acquire();
console.log(obj1); // Output: {}

const obj2 = pool.acquire();
console.log(obj2); // Output: {}

pool.release(obj1); // Release obj1 back to the pool

const obj3 = pool.acquire();
console.log(obj3); // Output: {} (obj1 is reused)

const obj4 = pool.acquire();
console.log(obj4); // Output: {} (obj2 is reused)
