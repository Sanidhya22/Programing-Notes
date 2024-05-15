// There are two types of Copy 

// 1. Shallow Copy - 
//    Shallow copying creates a new object or array and copies the references of the original elements into the new
//    object or array.
//    Shallow copy can be achieved using methods like Object.assign() or the spread operator (...) for objects, and
//    slice() or concat() for arrays.

// 2. Deep Copy -
//    Deep copying creates a new object or array and recursively copies all nested elements into the new structure.
//    Changes made to the elements in the deep copy do not affect the original, and vice versa.   


// Original object
const originalObj = {
    name: "John",
    age: 30,
    hobbies: ["reading", "coding"]
  };
  
  // Shallow copy using spread operator
  const shallowCopy = { ...originalObj };
  
  // Deep copy using JSON methods
  const deepCopy = JSON.parse(JSON.stringify(originalObj));
  
  // Modifying the shallow copy
  shallowCopy.hobbies.push("cooking");
  
  // Modifying the deep copy
  deepCopy.age = 35;
  
  console.log(originalObj); // Original object remains unchanged
  console.log(shallowCopy); // Shallow copy affects nested array in original object
  console.log(deepCopy); // Deep copy does not affect original object
  