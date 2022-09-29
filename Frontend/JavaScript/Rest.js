/* Rest --
   The rest parameter allows a function to accept an indefinite number of arguments
   as an array. */

   function add(...a){
   var res = 0;
   for(let i=0;i<a.length;i++)
   {
      res += a[i];
   }
     console.log(res);
   }

   add(10,20);
   add(10,20,30);

/* Here value will concat and form array which will be passed as an arugument.
   and Variable length parameter must be specified at the End. */
