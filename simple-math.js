const disha = 120;
const nirob = 98;

if(disha > nirob) {
    // console.log("Disha tumi beshi number peyecho");
}
else {
    // console.log("Nirbo tumi beshi number peyecho");
}

// With Function

function getMaxNumber(studen1, studen2) {
    if(studen1 < studen2) {
        return studen1;
    }
    else {
        return studen2;
    }
}

const dekhiKeBeshi = getMaxNumber(40, 51);

console.log(dekhiKeBeshi);
