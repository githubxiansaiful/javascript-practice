// Get max number
const max = Math.max(7, 9, 12, 43, 76, 98);

// Get max number from Array
const numbers = [10, 29, 24, 54, 34, 87, 67];
// const arrayMaxNum = Math.max(numbers); wrong method
const arrayMaxNum = Math.max(...numbers); // correct method

console.log(arrayMaxNum);

