//Write a function to calculate sum of a squares of all elment in an array for example [1, 2, 3] => 1^2 + 2^2 + 3^2 = 14.


const sumOfSquares = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** 2;

    }
    return sum;
}

console.log(sumOfSquares([1, 2, 3])); // Output: 14


//reduce methods 

const sumOfSquaresReduce = (arr) => {
    return arr.reduce((acc, currElem) => acc + currElem ** 2, 0);

}

console.log(sumOfSquaresReduce([2, 4, 6])); // Output: 14
