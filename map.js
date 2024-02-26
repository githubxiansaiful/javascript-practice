const myfriends = ['Balim', 'Dalim', 'Kalim', 'Tamim', 'Lamim', 'Amir']

// Get first letter of the name
const getFirstL = myfriends.map(friend => friend[0]);
// Get name length
const getLength = myfriends.map(lng => lng.length)

console.log(getFirstL);
console.log(getLength);