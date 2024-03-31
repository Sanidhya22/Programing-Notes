// Rest --
// Rest parameter allows a function to accept an indefinite number of arguments as an array. 

function add(...a) {
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    res += a[i];
  }
  console.log(res);
}

add(10, 20);
add(10, 20, 30);

