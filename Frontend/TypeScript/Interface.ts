interface Person {
  name: string;
  age: number;
  email?: string; // Optional property
}

const person: Person = {
  name: "John",
  age: 30,
  email: "john@example.com",
};
