//Write a function to sort an array of numbers in ascending order..

const sortArray = (arr) => {

    return arr.sort((a, b) => a - b);
}

console.log(sortArray([5, 3, 8, 10, 2])); // Output: [1, 2, 3, 5, 8]
