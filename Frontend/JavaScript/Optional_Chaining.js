// Optional chaining -
// Optional chaining is a feature introduced in JavaScript (and supported in TypeScript) that allows you to safely
// access properties of an object without having to explicitly check if each property exists. It's particularly 
// useful when dealing with nested objects or properties that may or may not be present.

// Before optional chaining, accessing properties of nested objects required multiple checks to avoid errors if
// any intermediate property was null or undefined.

if (obj && obj.nested && obj.nested.property) {
    // Do something with obj.nested.property
}

// With optional chaining, you can simplify this syntax using the ?. operator. Here's how it works:

// Using optional chaining
const value = obj?.nested?.property;

// If obj, nested, or property is null or undefined, value will be undefined
