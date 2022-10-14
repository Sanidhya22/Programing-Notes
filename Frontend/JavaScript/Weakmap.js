/* 
WeakMap - A WeakMap is a collection of key/value pairs whose keys must be objects
          and values can be of any datatype. 

Diffrence between WeakMap and Map

               Map                    |                 WeakMap 
--------------------------------------------------------------------------------------------
 1.A Map an accept primitive datatype       1.A weakMap can accept objects as keys.
   as keys.
 2.Use .size to find the number of          2.Use .length to find the number of elements.
   elements.

 3.forEach() is available for iteration.   3.forEach() is not available for iteration.
                                            
 4.Nothing is auto-destroyed.               4.An element object will be auto released to
                                              the garbage collector if it has no other 
                                              reference left.


Different methods of WeakMap
-----------------------------
1.get(value) -     Gets the value of the specified key from the Weakmap.
2.set(key,value) - Sets the Specified value with the specified key in
                   the set Method in Weakmap.                    
3.delete(key) -    Deletes the value of the specified key from the Weakmap.
4.has(key)  -      Returns true if an element is present with the specified
                   key in the Weakmap otherwise returns false.                   

*/


let wm = new WeakMap();
var obj1 = {roll:1};
var obj2 = {roll:2};
wm.set(obj1,"Sujit Kumar Verma");
wm.set(obj2,"Chandani Kumari");
console.log(wm);