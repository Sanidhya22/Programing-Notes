
/* Dyncmaic Scoping - 
   In dynamic scoping, we search in the local function first, then you search in the 
   function that called the local function, then you search in the function that called 
   that function, and so on, up the call-stack. */



function a() {
    var x = 12;
    var y = 24
    b()
    function b() {
        console.log(x);
        console.log(y);
        var z = 30;
        console.log(z);
        c();
        function c() {
            console.log(z);
            console.log(x+y+z);
        }
    }
}

a();


