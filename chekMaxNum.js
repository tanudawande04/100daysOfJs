//write a function findMaxNum that takes an array of numbers as input and returns the maximum number from the array.

const findMaxNum = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMaxNum([1, 2, 3, 4, 5, 10])); // Output: 5

// second method 

const checkMax = (arr) => {
    return Math.max(...arr);
}

console.log(checkMax([-1, -2, -3, -4, -5, -10])); // Output: 10


// spred-opreator(...) => used in arrays or objects  , shallow copy banata hai and powerfull feature hai jo arrays or objs ko destructure or expend or merge krta hai.

