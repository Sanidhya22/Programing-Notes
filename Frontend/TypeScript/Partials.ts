interface User {
  name: string;
  age: number;
  email: string;
}

// Create a partial type based on the User interface
type PartialUser = Partial<User>;

const partialUser: PartialUser = {
  name: "John",
  age: 30,
};
