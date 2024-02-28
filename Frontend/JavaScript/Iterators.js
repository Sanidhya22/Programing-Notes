 
// What do you mean by Iterators in Javascript ?
// An iterator is an object which returns a Sequnce of values.    

// An iterator is any object which implements the Iterator protocol by having
// a next() method that returns an object with two properties:

// value -
// This will return values of the sequence each at a time during iteration.

// done -
// This is true if the last value in the sequence has already been consumed and false if not 
// consumed.

// Once created, an iterator object can be iterated explicitly by repeatedly calling
// next(). Iterating over an iterator is said to consume the iterator, because it is
// generally only possible to do once. After a terminating value has been yielded 
// additional calls to next() should continue to return {done: true}.

   

function fruitsIterator(values) {
  let nextIndex = 0;
  return {
    next: function () {
      if (nextIndex < values.length) {
        return {
          value: values[nextIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

const myArray = ["Apples", "Oranges", "Grapes", "PineApple"];
//Using the Iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
