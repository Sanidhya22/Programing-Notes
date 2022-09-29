
/*  What do you mean by Protoypal Inheritance in Javascript ?
->  The Prototypal Inheritance is a feature in javascript used to add methods and 
    properties in objects. It is a method by which an object can inherit the 
    properties and methods of another object. */


/*  Whenever we create Object, function and Array then behind the scene Javascript
    creates an object and put all the properties and methods inside it.
    It attaches that object with our Original Object. 
    so in that way all the properties and methods are available to them.
    */


/*  What do you mean by Prototypes in JavaScript?
    Prototypes are the mechanism by which javaScript objects inherit features from one another.
    The prototype property allows us to add properties and methods to any object (Number, 
    Boolean, String and Date, etc).
    
    e.g --
    
    <Script>
    function Emp(name,age,sal,designation)
    {
       this.name = name;
       this.age =  age;
       this.salary = sal;
       this.designation = designation;
    }
    
    var e1 = new Emp("Suman",33,4500,"Progammer");
    var e2 = new Emp("Sujit",25,2500,"Manager");
    Emp.prototype.company = "EPAM";
    
    console.log(e1);
    console.log(e2);
    </Script>
 */    


//Adding Propertie and Methods to Objects  
Array.prototype.show = function () {
    return this;
}

const cities = ["Bangalore", "Bokaro", "Nodia"];
console.log(cities.show());


Array.prototype.convertIntoObject = function () {
    let newObj = {};
    this.forEach((element) => {
        newObj[element] = element;
    })
    return newObj;
}

console.log(cities.convertIntoObject());



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