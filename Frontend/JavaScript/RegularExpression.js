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
1. + - Plus -          We put an asterisk * after a character to indicate that the character may either not match at
                       all or can match many times.
2. * - Asterisk -      To indicate that a character can occur one or more times, we put a plus sign + after 
                       a character. 
3. {n} -  Qauntifier - To express a certain number of occurrences of a character, at the end we write curly 
                       braces {n} along with how many times we want it to occur.
                       Note - 
                       be{1,3}r - Here e can occur between 1 to 3 times.
                       be{1,}r - Here e can occur atleast one time or more than one time. 
4. ? - Optional -      To indicate that a character is optional, we put a ? question mark after a character.
5. | - Alternation -   It allows to specify that an expression can be in different expressions. Thus, all 
                       possible statements are written separated by the pipe sign |. 


Groups and References
1. () - Group - Using Group we can group an expression and use these groups to reference a string.
2. (?:) - Not Capturing Group - we ignore the specified group


Metacharacters 
------------------
These are the Characters with the special meaning

\d - Find a digit	
\s - Find a whitespace character
\w - The expression \w is used to find letters, numbers and underscore characters.  
\W - The expression \W is used to find characters other than letters, numbers, and underscores.
\D - \D is used to find non-numeric characters.
\S - \S is used to find non-space characters.


Character Classes 
1.[abc]  - Character Set  -       Select all the characters specified in the range.
2.[^abc] - Negated Charater Set - Select all the characters expect those which are specified in the 
                                  Character Range.
3.[a-z]  - Range  -               Select all the characters between specified range including both starting 
                                  and Ending value.

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
