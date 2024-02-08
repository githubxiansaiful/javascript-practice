// 12 inch = 1 feet

function inchToHeight(inch) {
    const feet = inch / 12;
    return feet;
}

const sumurHeight = inchToHeight(50);

console.log(sumurHeight);
console.log("------------------------------------");

// Km to Mile

function kmToMile(km) {
    const miles = km * 0.621371;
    const showHobe = miles + ' Dhaka theke coxbazarer durotto'
    return showHobe;
}

const dhakaToCoxs = kmToMile(480);

console.log(dhakaToCoxs);