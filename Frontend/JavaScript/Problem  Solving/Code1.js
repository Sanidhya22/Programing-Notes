/* Progarm to Print the String in Reverse Order */

//Approach 1
/* const string1 = "Sujit is a good Boy";
let words = string1.split(" ");
reverseString = "";
for (let i = words.length - 1; i >= 0; i--) {
  reverseString = reverseString + " " + words[i];
}
console.log(reverseString.trimStart()); */

//Approach 2
/* const string2 = "Sujit is a good Boy";
const words = string2.split(" ");
reverseString = words.reverse().join(" ");
console.log(reverseString); */

/* Program to Reverse String */
/* const string3 = "Sujit Works in EPAM Systems";
reverseString = string3.split("").reverse().join("");
console.log(reverseString); */

/* Program to print each Word of a String in Reverse Order */
/* const string4 = "Sujit got Job in United States of America";
words = string4.split(" ");
reverseString = " ";
for (let word of words) {
  reverseString = reverseString + " " + word.split("").reverse().join("");
}
console.log(reverseString.trimStart()); */


/* Program to check whether given String is Pallindrome or not */ 

/* const string5 = "OCOCO";
const reverseword = string5.split("").reverse().join("");
if(string5 === reverseword){
  console.log("Given String is Pallindrome");
}
else{
  console.log("Given String is not a Pallindrome");
} */


/* Program to find the Dupliacte Characters in a String */ 
/* const string6 = "Sujit Kumar Verma";
const alphabets = string6.split("");
duplicateAlphabets = alphabets.filter((item,index) => alphabets.indexOf(item) !== index );
duplicateAlphabets = duplicateAlphabets.filter((data) => data !== ' ' )
console.log(duplicateAlphabets); */

/* Program to find the Unique Characters in a String */ 
/* const string7 = "Sujit Kumar Verma";
const alphabets = string7.split("");
uniqueAlphabets = [...new Set(alphabets)].filter((data) => data !== ' ');
console.log(uniqueAlphabets); */

/* Program Maximum Frequenecy Character in a String */ 

const string8 = "epam systems is a good company"
characters = string8.split("");
x = characters.filter((data) => data !== ' ');
y = x.sort();

let max_count = 1,
  curr_count = 1;
let res = y[0];
for (let i = 1; i < y.length; i++) {
  if (y[i] == y[i - 1]) {
    curr_count++;
  } else {
    curr_count = 1;
  }
  if (curr_count > max_count) {
    max_count = curr_count;
    res = y[i - 1];
  }
}
console.log("Maximum Occurance Character in an String is " + res);


