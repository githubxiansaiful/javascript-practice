let a = 5;
let b = 'Hello';

// Using destructuring to swap values
[b, a] = [a, b];

console.log("A soman soman: ", a); 
console.log("B soman soman: ",b); 

const nullValue = null;

console.log(typeof nullValue);


// How can you convert a string to an integer in JavaScript? 

const stringValue   = "52";
const integerValue  = parseInt(stringValue);
console.log(typeof integerValue , integerValue);