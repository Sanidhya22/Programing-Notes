//    Dyncmaic Scoping - 
//    Dynamic Scoping means functions have access to the variables in the function from which 
//    it is called.
//    JavaScript does not support Dynamic Scoping Concept

function b() {
  console.log(x);
  console.log(y);
  const z = 30;
  console.log(z);
}

function a() {
  const x = 12;
  const y = 24;
  b();
}

a();
