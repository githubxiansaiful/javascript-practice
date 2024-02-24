// for of loop on array
const numbersAll = [1, 2, 5, 7, 9, 4, 3];

for(const num of numbersAll) {
    // console.log(num);
}

// for of loop on string
const members = ['Umor Ali', 'Ghumor Ali', 'Tumul Ali']

for(const member of members) {
    // console.log(member);
}

// for in loop on Object
const car = {
    brandName: 'BMW',
    price: 9999,
    model: 2012,
    color: 'Red'
}
for(const key in car) {
    const value = car[key];
    // console.log(key, value);
}