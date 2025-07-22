// write a function that takes a number  as input and returns the sum of its digits.

const sumOfDigits = (num) => {
    let arr = Array.from(String(num), Number);
    console.log(arr);

    return arr.reduce((acc, currelem) => acc += currelem, 0);
}

console.log(sumOfDigits(12345)); // Output: 15

// this function calculates the sum of digit without converting to string or array
const sumdigits = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10; // get the last digit
        num = Math.floor(num / 10); // remove the last digit
    }
    return sum;

}
console.log(sumdigits(6666)); // Output: 15