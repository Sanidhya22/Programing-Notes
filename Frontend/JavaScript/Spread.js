// Spread --
// Spread allows us to expand elements of an iterable into individual elements.  


function display(name, age, salary, designation) {
  console.log(name);
  console.log(age);
  console.log(salary);
  console.log(designation);
}
e1 = ["Kajal", 23, 2400, "Support Analyst"];
display(...e1);
