// 1. Progarm to Print the words of a String in Reverse Order */

//Approach 1
const string1 = "Sujit is a good Boy";
words = string1.split(" ");
reverseString = "";
for (let i = words.length - 1; i >= 0; i--) {
  reverseString = reverseString + " " + words[i];
}
console.log(reverseString.trimStart());
//OUTPUT - Boy good a is Sujit

//Approach 2
const string2 = "Sujit is a good Boy";
words = string2.split(" ");
reverseString = words.reverse().join(" ");
console.log(reverseString);
//OUTPUT - Boy good a is Sujit

// 2. Program to Reverse each Character of a String

const string3 = "Sujit Works in EPAM Systems";
reverseString = string3.split("").reverse().join("");
console.log(reverseString);
//OUTPUT - smetsyS MAPE ni skroW tijuS

// 3. Program to print each Word of a String in Reverse Order

const string4 = "Sujit got Job in United States of America";
words = string4.split(" ");
reverseString = "";
for (let word of words) {
  reverseString = reverseString + " " + word.split("").reverse().join("");
}
console.log(reverseString.trimStart());
//OUTPUT - tijuS tog boJ ni detinU setatS fo aciremA

// 4. Program to check whether given String is Pallindrome or not

const string5 = "OCOCO";
const reverseword = string5.split("").reverse().join("");
if (string5 === reverseword) {
  console.log("Given String is Pallindrome");
} else {
  console.log("Given String is not a Pallindrome");
}
//OUTPUT - Given String is Pallindrome

// 5. Program to find the Duplicate Characters in a String

const string6 = "Sujit Kumar Verma";
const alphabets = string6.split("");
duplicateAlphabets = alphabets.filter(
  (item, index) => alphabets.indexOf(item) !== index
);
duplicateAlphabets = [
  ...new Set(duplicateAlphabets.filter((data) => data !== " ")),
];
console.log(duplicateAlphabets);
//OUTPUT - [ 'u', 'r', 'm', 'a' ]

// 6. Program to find the Unique Characters in a String

const string7 = "Sujit Kumar Verma";
alphabets = string7.split("");
uniqueAlphabets = [...new Set(alphabets.filter((data) => data !== " "))];
console.log(uniqueAlphabets);
//OUTPUT - [ 'S', 'u', 'j', 'i','t', 'K', 'm', 'a','r', 'V', 'e']

// 7. Program Maximum Frequenecy Character in a String

function findMaxOccurringElement(arr) {
  const frequencyMap = {};
  arr.forEach(element => {
      if (frequencyMap[element]) {
          frequencyMap[element]++;
      } else {
          frequencyMap[element] = 1;
      }
  });
  
  let maxFrequency = 0;
  let maxOccurringElement = null;
  for (const element in frequencyMap) {
      if (frequencyMap[element] > maxFrequency) {
          maxFrequency = frequencyMap[element];
          maxOccurringElement = element;
      }
  }
  
  return maxOccurringElement;
}

const string8 = "epam systems is a good company";
characters = string8.split("");
const maxOccurringElement = findMaxOccurringElement(characters);
console.log("Maximum occurring element:", maxOccurringElement);

