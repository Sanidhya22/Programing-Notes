/*  What do you mean by Generators in JavaScript ?
->  A Generators in JavaScript consists of a generator function, which returns an 
    iterable Generator object.    

    When called, generator functions do not initially execute their code. Instead,
    they return a special type of iterator, called a Generator object. we can consume the 
    value of geneartor function by calling next method on generators object, the Generator 
    function executes until it encounters the yield keyword.

    The function can be called as many times as desired, and returns a new Generator object
    each time. Each Generator object may only be iterated once.
    generator functions are defined with the * symbol. 
    
    yeild is a special type of return keyword used for generators
    The purpose of generator is to esssentially run some code and return a 
    value and run some more code and return a value and run some code and 
    return a value.

    1. Generator functions returns a generator object 
    2. the next function helps us to excute the code inside the generator.
    3. next method returns generator object consisting of two properties value and done
    4. done property equals false specify there is still more code to run and true specify that there 
       is no more code to run.
    5. value property retuns whatever it executes at yield

    */




function* simpleGenerator(){
    console.log("Before 1");
    yield 1
    console.log("After 1");
    console.log("Before 2");
    yield 2
    console.log("After 2");
    console.log("Before 3");
    yield 3
    console.log("After 3");
}

const generatorObject = simpleGenerator();
const obj = generatorObject.next();
console.log(obj);
const generatorObject2 = simpleGenerator();
const obj_2 = generatorObject2.next();
console.log(obj_2);
const obj1 = generatorObject.next();
console.log(obj1);
const obj2 = generatorObject.next();
console.log(obj2);
const obj3 = generatorObject.next();
console.log(obj3);