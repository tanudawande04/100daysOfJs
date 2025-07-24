// write a function called  that takes an array of numbers as input and returns the mode of the numbers in the array.

const findMode = (arr) => {
    let maxNum = 0;
    let mode;
    if (arr.length === 0) {
        return 0;
    }
    let counts = {};
    for (let elem of arr) {
        counts[elem] = (counts[elem] || 0) + 1;
        if (counts[elem] > maxNum) {
            maxNum = counts[elem];
            mode = elem;
        }
    }
    console.log(counts);

    return mode;

}

console.log(findMode([1, 1, 2, 2, 2, 3, 3, 4])); // Output: 3
