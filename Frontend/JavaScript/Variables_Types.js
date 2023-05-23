/* 
There are Three Keywords we use for Declaring variables
1. Var 
2. Let
3. Const 


Var - 
This is a Keyword we use to declare variable.
These variables have global and loca; scope.
These variables can be redeclared in the same scope.
These varibles can be accessed before they are being declared.

Const -
This is a Keyword we use to declare variable.
These variables can have local and global scope.
Variables defined with const Keyword cannot be Redeclared in the sampe scope.
Variables defined with const keyword cannot be Reassigned.
These variables must be declared before they are used.

Let - 
This is Keyword we use to declare variables.
These Variables can have local and global scope.
These Variables can not be Redecalred in the same scope.
These Variables must be decalred before they are used.

If we observe the variables defined with var keyword are stored or attached with
global window object whether In case of let and const they are attached or 
stored in some another Context space.
the variable which are declared without keywords have global scope.

*/



/* 
var a = 20
var a = 30     // Possible
let a = 40;    // Not Possible
const a = 70;  // Not Possible
console.log(a); 
*/


/* 
let b = 20;
let b = 80   // Not Possible
var b = 50;  // Not Possible
const b = 90 // Not Possible
*/


/* 
const b = 20;
const b = 10; // Not Possible
var b = 50;   // Not Possible
let b = 90    // Not Possible
*/
