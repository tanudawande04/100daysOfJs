// Write a function to calulate the median of an array of numbers.



Math.floor() // is used to round down the result to the nearest whole number.
Math.random() // is used to generate a random number between 0 and 1.

const calculateMedianReduce = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    arr = arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        // If the length of the array is even, return the average of the two middle numbers
        return (arr[mid] + arr[mid - 1]) / 2;
    } else {
        return arr[mid];
    }

}
console.log(calculateMedianReduce([1, 2, 4, 3, 5])); // Output: 3
console.log(calculateMedianReduce([10, 20, 30, 40])); // Output: 25