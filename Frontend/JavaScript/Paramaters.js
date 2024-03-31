// Parameters -
// Parameters refers to the variables that are listed as part of a function's definition.

/* Types of JavaScript Parameters -- */

// 1. Required Parameters: --
//    These are parameters that must be provided when calling the function, otherwise an error will occur.

function display(name, age) {
  console.log("Name: " + name);
  console.log("Age: " + age);
}

display("Sujit", 25);

// 2. Default Parameters: --
//    These are parameters that have default values assigned to them. If no value is provided for these 
//    parameters when calling the function, the default value is used.

function display(name, age = 21) {
  console.log("Name: " + name);
  console.log("Age: " + age);
}

display("Sujit", 25);
display("Anjali");
