// Reduce - 
// reduce() is a predefined javascript method runs a function on each array element to produce (reduce it to)
// a single value.


arr = [12, 13, 14, 15, 16, 17, 18];

const output = arr.reduce(function (sum, cur) {
  sum = sum + cur;
  return sum;
}, 0);

console.log(output);

//Real use case of Map, Filter and Reduce ----

const users = [
  { firstName: "Sujit", lastName: "Verma", age: 25 },
  { firstName: "Puja", lastName: "Kumari", age: 31 },
  { firstName: "Anjali", lastName: "Kumari", age: 23 },
  { firstName: "Chandani", lastName: "Kumari", age: 26 },
];

//Display list of full Names
const data = users.map((x) => x.firstName + " " + x.lastName);
console.log(data);

//Display the Different ages with their counts
const data1 = users.reduce(function (acc, cur) {
  if (acc[cur.age]) {
    acc[cur.age] = ++acc[cur.age];
  } else {
    acc[cur.age] = 1;
  }
  return acc;
}, {});

console.log(data1);

//Display the Name of the Peoples who are less than 25 year old
const data2 = users
  .filter((x) => x.age < 25)
  .map((x) => x.firstName + " " + x.lastName);
console.log(data2);
