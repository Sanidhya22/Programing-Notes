/* 
Regular Expression - 
Regular expressions are patterns used to search specified character combinations 
in strings. */

/*https://regexlearn.com/learn/regex101 */


/* 
Anchors - 
1. ^ - Start of a String Line.
       To find only patterns at the beginning of a line, prefix this expression with the ^ sign.
2. $ - End of a String Line.
       To find only patterns at the endding of a line, prefix this expression with the $ sign.

Flags - 
1. i  - Ignore Case.
2. g  - global.
3. m  - Multiline.


Qauntifiers -
1. + - Plus
2. * - Asterisk
3. {1,2} -  Qauntifier
4. ? - Optional
5. | - Alternation


Groups and References
1. () - Group
2. (?:) - Not Capturing Group


Character Classes 
1.[abc]  - Character Set 
2.[^abc] - Negated Charater Set
3.[a-z]  - Range 

*/


/*Regular Expressions Basics Methods
---------------------------------------*/

/* 
Search - 
The Search method searches a string for a specified value and returns the 
position of the match. 
*/

let text1 = "Visit W3Schools!";
let n = text1.search("W3Schools");
console.log(n);
//OUTPUT - 6

/* 
Replace -
The Replace method replaces a specified value with another value in a
String. 
*/

let text2 = "Visit Microsoft!";
let result1 = text2.replace("Microsoft", "W3Schools");
console.log(result1);
//OUTPUT - Visit W3Schools!


/* 
Test - 
The Test method searches a String for a specified pattern and returns true or false. */

const pattern1 = /e/;
let result2 = pattern1.test("The best things in life are free!");
console.log(result2);
//OUTPUT - true


/* 
Exec - 
The exec method searches a string for a specified pattern and returns the 
found text as an Object. */
const pattern2 = /e/;
let result3 = pattern2.exec("The best things in life are free!");
console.log(result3);
//OUTPUT - 
/* [
    'e',
    index: 2,
    input: 'The best things in life are free!',
    groups: undefined
] */



/* Metacharacters 
------------------
These are the Characters with the special meaning

\d - Find a digit	
\s - Find a whitespace character
\w - The expression \w is used to find letters, numbers and underscore characters.  
\W - The expression \W is used to find characters other than letters, numbers, and underscores.
\D - \D is used to find non-numeric characters.
\S - \S is used to find non-space characters.
 */


/* 
Quantifier
------------
Quantifiers define quantities.

n+ - Matches any string that contains at least one n.
n* - Matches any string that contains zero or more occurrences of n
n? - Matches any string that contains zero or one occurrence of n 
     n is Optional
*/



/* 
Modifiers / Flags
-----------------
Modifiers can be used to perform case-insensitive more global searches.

i - Performs case-insensitive matching.
m - Performs a MutiliMatching 
g - Performs a Global Match. (rather than stopping at first) 
*/


/* 
Regular Expressions Patterns
----------------------------
Barckets are used to find range of Characters

[abc] - Find any of the characters between the brackets
[0-9] - Find any of the digits between the brackets
(x|y) - Find any of the alternatives separated with | 
{}    - To express a certain number of occurrences of a character
*/


/* 
Grouping 
---------
() -  To group an expression, we enclose () in parentheses. 
*/