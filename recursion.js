//write a function factorial that takes a number as input and returns the factorial of that number.

const factorial = (n) => {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(3)); // Output: 120
