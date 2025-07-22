//write a function called calculateAverage that takes an array of numbers as input and returns the average of the numbers in the array.

const calculateAverage = (arr) => {
    if (arr.length === 0) {
        return 0;

    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    return sum / arr.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5])); // Output: 3


//second method using reduce..

const calculateAverageReduce = (arr) => {
    {
        if (arr.length === 0) {
            return 0;
        }
        const sum = arr.reduce((acc, currElem) => acc + currElem, 0);
        console.log(sum);
        return sum / arr.length;
    }
}

console.log(calculateAverageReduce([1, 2, 3, 4, 5])); // Output: 3

