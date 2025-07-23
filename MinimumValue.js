// find the minimum value in an array

const findMinimumValue = (arr) => {
    let minVal = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return minVal;

}

console.log(findMinimumValue([5, 3, 0, 8, 10, 2])); // Output: 2


//second methd 
const findMin = (arr) => {
    return Math.min(...arr);
}
console.log(findMin([5, 3, 0, 8, 10, 2])); // Output: 0


//third method 
const findMinimum = (arr) => {
    arr = arr.sort((a, b) => {
        if (b > a) return -1;
    });
    return arr[0];
}

console.log(findMinimum([5, 3, 0, 8, 10, 2, -3])); // Output: undefined (this method is incomplete)
