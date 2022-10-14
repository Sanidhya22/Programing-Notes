/* 
    Mixins -
    Mixins can be stated as mixins is a class that contains methods that can be 
    used by other classes without inheriting from that class.


*/

//Simple Mixin in Javascript

const petMixins = {
    printInfo() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


let mycat = new Cat("Sujit", 15);
Object.assign(mycat, petMixins);

mycat.printInfo();