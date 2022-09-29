/* Hoisting --
   Hoisting is JavaScript default behaviour of moving declaration to the 
   Top.
   Here a variable or function can be used before they are being declared.

   Note - 
   1. Hoisting is the one who is taking care of memory allocation.
   2. TDZ(Temporal Dead Zone) - The Time difference between allocation
   of a variable and assignment of a variable(Memory usuage of the 
    Variable) or Initialization of the variable.
    
   3. Using let const is better than var for programming for hoisting
   concept it will trigger error and help us to skip getting
   unusual results*/

/* Important Point --
   What is the Difference between not defined and undefined ? 
-> While Accesing Variable value In Case of Hoisting 
   We get variable undefined when memory is allocated for a variable and   
   but variable is not intialised.

   We get Variable not defined when memory is not allocated for a variable 
   
   Are the let and const are hoisted in Javascript ?
-> Variables declared with let and const are also hoisted but, unlike var , are not
   initialized with a default value. An exception will be thrown if a variable 
   declared with let or const is read before it is initialized.   
   
   */


b = 20;
console.log(b);
var b;

abc();

function abc(){
   console.log("ABC");
}
