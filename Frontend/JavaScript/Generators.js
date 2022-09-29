/*  What do you mean by Generators in JavaScript ?
->  A Generators in JavaScript consists of a generator function, which returns an 
    iterable Generator object.    

    When called, generator functions do not initially execute their code. Instead,
    they return a special type of iterator, called a Generator. When a value is
    consumed by calling the generator's next method, the Generator function executes
    until it encounters the yield keyword.

    The function can be called as many times as desired, and returns a new Generator
    each time. Each Generator may only be iterated once.
    generator functions are defined with the * symbol. 
    
    yeild is a special type of return keyword used for generators
    The purpose of generator is to esssentially run some code and return a 
    value and run some more code and return a value and run some code and 
    return a value.

    Generator functions returns a generator object 
    the next function helps us to excute the code inside the generator.
    the object return by the next method consists of two properties value and done
    done equal false specify there is still more code to run and 
    true specify that there is no more code to run.
    value property retuns whatever it executes at yield

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