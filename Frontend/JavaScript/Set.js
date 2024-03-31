// Set -
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

const s = new Set();
s.add(1);
s.add(2);
console.log(s);

// Method	    -   Description
// ----------------------------------------
// new Set()	  -   Creates a new Set
// add()	      -   Adds a new element to the Set
// delete()	      -   Removes an element from a Set
// has()	      -   Returns true if a value exists
// clear()	      -   Removes all elements from a Set
// forEach()	  -   Invokes a callback for each element
// values()	      -   Returns an Iterator with all the values in a Set
// keys()	      -   Same as values()
// entries()	  -   Returns an Iterator with the [value,value] pairs from a Set

// Property	          Description
// -------------------------------------------
// size	          -   Returns the number elements in a Set




// Weakset - 
// WeakSet is same like a set but It is a collection of objects only.

const ws = new WeakSet();
const obj1 = { name: "Sujit Kumar Verma" };
const obj2 = { name: "Chandani Kumari" };
ws.add(obj1);
ws.add(obj2);
console.log(ws.length);

// Difference between Set and WeakSet

//                Set                    |                 WeakSet
// --------------------------------------------------------------------------------------------
//  1.A set can contain all types of values.   1.A weakSet can only contain objects.

//  2.Use .size to find the number of          2.Use .length to find the number of elements.
//    elements.

//  3.forEach() is available for iteration.    3.forEach() is not available for iteration.

//  4.Nothing is auto-destroyed.               4.An element object will be auto released to
//                                               the garbage collector if it has no other
//                                               reference left.

//  Different Methods of WeakSet
//  ----------------------------
//  1. add(value):     A new object is appended with the given value to the weakset.
//  2. delete(value):  Deletes the value from the WeakSet collection.
//  3. has(value):     Returns true if the value is present in the WeakSet Collection, false otherwise.
