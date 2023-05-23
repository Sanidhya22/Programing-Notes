
/*  What do you mean by Protoypal Inheritance in Javascript ?
->  The Prototypal Inheritance is a feature in javascript which is used to add methods
    and properties in objects and It can also be used to inherit properties and
    methods of another object. 

    Whenever we create Object and Array then behind the scene Javascript
    creates an object and put all the properties and methods inside it related to
    that instance.
    It attaches that object with our Original Object. 
    so in that way all the properties and methods are available to them.
*/


/*  What do you mean by Prototypes in JavaScript?
    Prototypes is a feature in javascript using which javaScript objects inherit 
    features from one another.
    The prototype property allows us to add properties and methods to any object (Number, 
    Boolean, String and Date, etc).
    
    e.g --
    
    function Emp(name,age,sal,designation)
    {
       this.name = name;
       this.age =  age;
       this.salary = sal;
       this.designation = designation;
    }
    
    var e1 = new Emp("Suman",33,4500,"Programmer");
    var e2 = new Emp("Sujit",25,2500,"Manager");
    Emp.prototype.company = "EPAM";
    
    console.log(e1);
    console.log(e2);
 */    


//Adding Properties and Methods to Arrays

/*  
Array.prototype.show = function () {
    return this;
}
console.log(cities.show()); */


/* const cities = ["Bangalore", "Bokaro", "Nodia"];
Array.prototype.convertIntoObject = function () {
    let newObj = {};
    this.forEach((element) => {
        newObj[element] = element;
    })
    return newObj;
}

console.log(cities.convertIntoObject()); */



//Object Inheriting Properties and Methods of Another Object 

const obj = {
    name: "Sujit Kumar Verma",
    getName: function () {
        return this.name;
    }
}
console.log(obj);


const obj1 = {
    roll: 1,
    __proto__: obj
}

console.log(obj1);
console.log(obj1.getName());

//Adding a New Property to String as a Prototype for Reversing String 

String.prototype.reverseString = function(){
    let reverse = this.split("").reverse().join("");
    return reverse;
}

let sample = "Sujit";
let result = sample.reverseString();
console.log(result);
