//write a function  factorial that takes a non-negative integer num as input and returns the factorial. the factorial of a non-negative integer n is the product of all positive integers less than or equal to n. for example, 0 is defined as 1.

const factorial = (num) => {
    if (num < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if (num === 0 || num === 1) {
        return 1;

    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // Output: 120


// second method using recursion

const factorialRecursive = (num) => {
    {
        if (num < 0) {
            return "Factorial is not defined for negative numbers";
        }
        if (num === 0 || num === 1) {
            return 1;
        }
        return num * factorialRecursive(num - 1);

    }
}