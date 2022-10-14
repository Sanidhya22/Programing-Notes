/* 
Weakset - WeakSet is same like a set but It is a collection of objects only.

Difference between Set and WeakSet

               Set                    |                 WeakSet 
--------------------------------------------------------------------------------------------
 1.A set can contain all types of values.   1.A weakSet can only contain objects.

 2.Use .size to find the number of          2.Use .length to find the number of elements.
   elements.

 3.forEach() is available for iteration.   3.forEach() is not available for iteration.
                                            
 4.Nothing is auto-destroyed.               4.An element object will be auto released to
                                              the garbage collector if it has no other 
                                              reference left.

                                              
 Different Methods of WeakSet 
 ----------------------------
 1. add(value): A new object is appended with the given value to the weakset.
 2. delete(value): Deletes the value from the WeakSet collection.     
 3. has(value):   Returns true if the value is present in the WeakSet Collection, false otherwise.
 4. length(): Returns the length of weakSetObject.                                          

*/


let ws = new WeakSet();
var obj1 = { name: "Sujit Kumar Verma" };
var obj2 = { name: "Chandani Kumari" };
ws.add(obj1);
ws.add(obj2);
