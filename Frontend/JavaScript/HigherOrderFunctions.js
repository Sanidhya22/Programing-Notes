/*  
 What do you mean by Higher Order Functions ?
-> The Functions which accept another function as an argument or return a
 function from it is are known Higher Order Functions.
 The function which is passed as an argument to Higher Order function is known as 
 Callback Function.
*/

const radius = [3, 2, 1, 4]

/* //Calculating Area of the Circle
const calculateArea = function (radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI *radius[i] * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));


//Calculating Circumference of the Circle 
const calculateCircumference = function (radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(2 * Math.PI *radius[i]);
    }
    return output;  
}
console.log(calculateCircumference(radius));


//Calculating Diatmeter of the Circle
const calculateDaimeter = function (radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(2 * radius[i]);
    }
    return output;  
}
console.log(calculateDaimeter(radius));
 */


//Optimizing the Code with the Higher Order Function Concept

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));