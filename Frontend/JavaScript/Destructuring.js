/* What do you mean by Destructuring in JavaScript ?
-> Destructuring is an efficient way to extract multiple values from data that is stored in 
   arrays or objects. 
   e.g - */
   var arr = ["Hello", "World"]   
  
   // Destructuring Assignment  
   var [first, second] = arr;   
   console.log(first); // Hello  
   console.log(second); // World  


   var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
  
   //Destructuring Assignment  
   var[color1, color2, color3] = colors;  
   console.log(color1); // Violet  
   console.log(color2); // Indigo  
   console.log(color3); // Blue 


   var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
  
   // Destructuring Assignment  
   var [a,b,...args] = colors;  
   console.log(a);      // Violet
   console.log(b);      //Indigo 
   console.log(args);   //["Blue", "Green", "Yellow", "Orange", "Red"]
