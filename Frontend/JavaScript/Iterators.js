/*  
    What do you mean by Iterators in Javascript ?
->  JavaScript an iterator is an object which defines a sequence and potentially a
    return value upon its termination.    

    An iterator is any object which implements the Iterator protocol by having
    a next() method that returns an object with two properties:

    value
    The next value in the iteration sequence.

    done
    This is true if the last value in the sequence has already been consumed. If value
    is present alongside done, it is the iterator's return value.

    Once created, an iterator object can be iterated explicitly by repeatedly calling
    next(). Iterating over an iterator is said to consume the iterator, because it is
    generally only possible to do once. After a terminating value has been yielded 
    additional calls to next() should continue to return {done: true}.

    */

function fruitsIterator(values) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

const myArray = ['Apples','Oranges',"Grapes","PineApple"]
//Using the Iterator 
const fruits = fruitsIterator(myArray);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());