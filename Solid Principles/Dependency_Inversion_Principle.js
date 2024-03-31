// Low-level module
class Database {
  getData() {
    return "Data from database";
  }
}

// Abstraction
class DataProvider {
  constructor(database) {
    this.database = database;
  }

  fetchData() {
    return this.database.getData();
  }
}

// High-level module
class DataProcessor {
  constructor(dataProvider) {
    this.dataProvider = dataProvider;
  }

  processData() {
    const data = this.dataProvider.fetchData();
    return data.toUpperCase();
  }
}

// Usage
const database = new Database();
const dataProvider = new DataProvider(database);
const dataProcessor = new DataProcessor(dataProvider);

console.log(dataProcessor.processData()); // Output: "DATA FROM DATABASE"
