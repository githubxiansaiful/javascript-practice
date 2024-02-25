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
console.log("The height value is: ", maxHeight); // The height value is:  500