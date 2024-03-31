// Class with Single Responsibility
class UserRepository {
  constructor() {
    this.users = [];
  }

  // Responsibility: Manage user data
  addUser(user) {
    this.users.push(user);
  }

  // Responsibility: Retrieve user data
  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }

  // Responsibility: Update user data
  updateUser(id, newData) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...newData };
    }
  }

  // Responsibility: Delete user data
  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

// Usage
const userRepository = new UserRepository();
userRepository.addUser({ id: 1, name: "John" });
userRepository.updateUser(1, { name: "Jane" });
console.log(userRepository.getUserById(1)); // { id: 1, name: "Jane" }
userRepository.deleteUser(1);

// In this example, the UserRepository class has a single responsibility, which is to manage user data. It
// encapsulates methods for adding, retrieving, updating, and deleting users. Each method focuses on a specific
// aspect of user data management, adhering to the SRP.
