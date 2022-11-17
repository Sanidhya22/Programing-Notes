/* Lexical Scope-
   Lexical Scope is the Enviroment/Space around a Varible or a Function.
*/


function foo(a) {

    var b = a * 2;

    function bar(c) {
        console.log(a, b, c);
    }

    bar(b * 3);
}

foo(2);


/* 
There are three nested scopes inherent in this code example. It may be helpful to think
about these scopes as bubbles inside of each other.

Bubble 1 encompasses the global scope, and has just one identifier in it: foo.
Bubble 2 encompasses the scope of foo, which includes the three identifiers: a, bar, b.
Bubble 3 encompasses the scope of bar, and it includes just one identifier: c.


In the above code snippet, the Engine executes the console.log(…) statement and goes
looking for the three referenced variables a, b, and c. It starts with innermost 
scope bubble, Bubble 3. It won’t find a there, so it goes up one level, out to the
next nearest scope bubble, Bubble 2. It finds a there, and so it uses that a. Same
thing for b. But c, it does find inside of bar(…), Bubble 3.

The variable c is inside of bar(…) and inside of foo(…), the console.log(…) statement
would have found and used the one in bar(…), never getting to the one in foo(…). */
