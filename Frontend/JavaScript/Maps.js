// Map ----
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.

const m = new Map();
m.set(1, "Sujit Kumar Verma");
m.set(2, "Chandani Kumari");
console.log(m);

// Method	            Description
// new Map()	   -    Creates a new Map object
// set()	       -    Sets the value for a key in a Map
// get()	       -    Gets the value for a key in a Map
// clear()       -  	Removes all the elements from a Map
// delete()	     -    Removes a Map element specified by a key
// has()	       -    Returns true if a key exists in a Map
// forEach()	   -    Invokes a callback for each key/value pair in a Map
// entries()	   -    Returns an iterator object with the [key, value] pairs in a Map
// keys()	       -    Returns an iterator object with the keys in a Map
// values()	     -    Returns an iterator object of the values in a Map

// Property	          Description
// size	         -    Returns the number of Map elements




// WeakMap ----
// A WeakMap is a collection of key/value pairs whose keys must be objects and values can be of any 
// datatype.

// Diffrence between WeakMap and Map

//                Map                        |                 WeakMap
// --------------------------------------------------------------------------------------------

//  1.A Map an accept primitive datatype         1.A weakMap can accept objects as keys.
//    as keys.

//  2.Use .size to find the number of            2.Use .length to find the number of elements.
//    elements.

//  3.forEach() is available for iteration.      3.forEach() is not available for iteration.

//  4.Nothing is auto-destroyed.                 4.An element object will be auto released to
//                                                 the garbage collector if it has no other
//                                                 reference left.

// Different methods of WeakMap
// -----------------------------
// 1.get(key) -       Gets the value of the specified key from the Weakmap.
// 2.set(key,value) - Sets the Specified value with the specified key in
//                    the set Method in Weakmap.
// 3.delete(key) -    Deletes the value of the specified key from the Weakmap.
// 4.has(key)  -      Returns true if an element is present with the specified
//                    key in the Weakmap otherwise returns false.

const wm = new WeakMap();
const obj1 = { roll: 1 };
const obj2 = { roll: 2 };
wm.set(obj1, "Sujit Kumar Verma");
wm.set(obj2, "Chandani Kumari");
console.log(wm);
