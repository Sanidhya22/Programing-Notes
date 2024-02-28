// Lexical Scope-
// Lexical Scope is the Enviroment/Space around a Varible or a Function.



function foo(a) {
    const b = a * 2;
    function bar(c) {
        console.log(a, b, c);
    }
    bar(b * 3);
}
foo(2);

