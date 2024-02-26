const height = [10, 23, 32, 43, 52, 29, 60, 78, 90, 500];

function getMaxHeight(numbers) {
    let maxHeight = 0;
    for(const num of numbers) {
        if(num > maxHeight) {
            max = num;
        }
    }
    return max;
}
const maxHeight = getMaxHeight(height);
// console.log("The height value is: ", maxHeight);


//  Find Numbers and how many
function countOnesInRange(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        const digits = i.toString().split('');
        count += digits.filter(digit => digit === '1').length;
    }
    return count;
}

const numberOfOnes = countOnesInRange(0, 100);
console.log("Number of 1s from 0 to 100:", numberOfOnes); // 21

