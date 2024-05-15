// Rest --
// It is a feature introduced in ES6 and it allows a function parameter to accept an 
// indefinite number of arguments as an array. 

function add(...a) {
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    res += a[i];
  }
  console.log(res);
}

add(10, 20);
add(10, 20, 30);

