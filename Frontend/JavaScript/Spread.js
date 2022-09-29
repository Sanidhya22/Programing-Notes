/* Spread --
   It takes in an iterable (e.g an array) and expands it into individual elements. */

   function display(name,age,salary,designation)
   {
     console.log(name);
     console.log(age);
     console.log(salary);
     console.log(designation);
   }
   e1 = ["Kajal",23,2400,"Support Analyst"];
   display(...e1);
   
   //Here it is called spread because value will spread into different parameter
