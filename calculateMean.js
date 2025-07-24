//Write a function to cakculate the mean of an array of numbers.

const calculateMean = (arr) => {
    if (arr.length == 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    return sum / arr.length;

}

console.log(calculateMean([1, 2, 3, 4, 5])); // Output: 3
console.log(calculateMean([10, 20, 30, 40])); // Output: 25

//second method using reduce

const calculateMeanReduce = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    const sum = arr.reduce((acc, currElem) => acc + currElem, 0);

    return sum / arr.length;
}

console.log(calculateMeanReduce([1, 2, 3, 4, 5])); // Output: 3
