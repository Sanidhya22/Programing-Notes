/* Template Literal --

It is a new Feature which is introduced in EcmaScript 6, it provides
an easy way to create Multiline strings and performs string Interpolation. */


var a = 10;
var b = 12;
function add(){
    return a+b;
}

str = `The Addition of ${a} 
and ${b} is ${add(a,b)}`
console.log(str);





