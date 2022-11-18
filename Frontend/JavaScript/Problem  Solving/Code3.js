// 1. Progarm to print the Factorial of a Number

/* const number = 7;
let fact = 1;
for (let i = 1; i <= number; i++) {
  fact = fact * i;
}
console.log(fact); */
//OUTPUT - 5040

// 2. Program to find check whether number is prime number or not 

/* const number = 36;
let count = 0
for (let i = 1; i <= number; i++) {
    if(number%i === 0){
        count++;
    }
}

if(count === 2){
    console.log("Number is Prime Number");
}
else{
    console.log("Number is not a Prime Number")
} */
//OUTPUT - Number is not a Prime Number


// 3. Program to find Prime Number Within a given Range

/* const low = 25;
const high = 75;
for (let i = low; i <= high; i++) {
    let count = 0;
  for (let j = 1; j <= i; j++) {
      if(i % j === 0 ){
          count ++;
      }
  }
  if(count === 2){
      console.log(i+" is the Prime Number");
  }
} */
/* OUTPUT - 
29 is the Prime Number
31 is the Prime Number
37 is the Prime Number
41 is the Prime Number
43 is the Prime Number
47 is the Prime Number
53 is the Prime Number
59 is the Prime Number
61 is the Prime Number
67 is the Prime Number
71 is the Prime Number
73 is the Prime Number */


// 4. Program to Print the Fibonacci Series Upto n Numbers 

const number = 15
let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series:');
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;      
}
/* OUTPUT -
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377 */