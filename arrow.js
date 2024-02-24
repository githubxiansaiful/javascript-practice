// Class: 30-4 Arrow Function, Multiple Parameter, Function Body

// function declaration 
function add (a, b) {
    const result = a + b;
    return result;
}
const sum = add(10, 20);
console.log(sum); 


// Another way
function addMoreSum (a, b) {
    return a + b;
}
const addmoresums = addMoreSum(100, 50);
console.log(addmoresums);

//  function expression
const add2 = function(a, b) {
    return a + b;
}
// arrow function
const add3 = (a, b, c) => a + b + c;
const result = add3(1, 1, 1);
console.log(result);

//  30-5 More Arrow Functions And Big Arrow Function
// Single parameter or one parameter
const getAge = (person) => person.region;
const student = {
    name: 'Kamela Khatun',
    age: 63,
    region: 'Bangladesh'
}
const studAge = getAge(student);
console.log(studAge);

// no parameter
const getAPI = () => Math.PI;
console.log(getAPI());