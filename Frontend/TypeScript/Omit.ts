interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

// Create a new type by omitting specific properties from User interface
type UserWithoutIdAndEmail = Omit<User, "id" | "email">;

const user: UserWithoutIdAndEmail = {
  name: "John",
  age: 30,
};
