// write a function to check character lower or upper case.

const checkUpperCase = (char) => {

    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        return true;
    } else {
        return false;
    }



}

console.log(checkUpperCase('A')); // Output: true

//second method 
const checkLowerCase = (char) => {
    return char === char.toLowerCase();
}

console.log(checkLowerCase('B')); // Output: false
