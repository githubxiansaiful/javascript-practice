const actor = {
    name: 'Sakib Khan',
    age: 35,
    phone: 01640007790,
    money: 15454
}
// Regular method
const actorName = actor.name;
const actorAge = actor.age;
const actormoney = actor.money;

// Object And Array Destructure
const {money, age: boyos} = actor;

// Array Destructure
const numbers = [1, 2];
const [first, second] = numbers;
const [x, y] = [12, 66];

// More 
function doubleThem(a, b) {
    return [a*2, b*2];
}
const [firstDouble, secondDouble] = doubleThem(6, 5);

console.log(firstDouble, secondDouble);