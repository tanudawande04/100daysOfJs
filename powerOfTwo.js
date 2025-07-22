//Write a function called isPowerOfTwo that takes a number as input and returns true if the number is a power of two, and false otherwise.


const isPowerOfTwo = (num) => {

    if (num <= 0) {
        return false;

    }
    while (num > 1) {
        if (num % 2 !== 0) {
            return false;
        }
        num = num / 2;

    }
    return true;

}

console.log(isPowerOfTwo(16));


console.log(2 ** 5); // 2 tto the power 5

//second method

const isPowerOfTwoBitwise = (num) => {
    let op = false;
    for (let i = 1; i < num; i++) {
        if (2 ** i === num) {
            op = true;;
        }
    }
    return op;
}

console.log(isPowerOfTwoBitwise(10)); // Output: true