//write a function to check if a string starts with a specific  substring.

const checkStringSub = (str, substr) => {
    if (str.startsWith(substr)) {
        return true;
    } else {
        return false;
    }
}


console.log(checkStringSub("hello world", "hello")); // Output: true
console.log(checkStringSub("hello world", "world")); // Output: false



//second method using regex
const checkStringSubRegex = (str, substr) => {

    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].toLowerCase();
        if (str[i] === substr.toLowerCase()) {
            return true;
        }
        return false;
    }
}
console.log(checkStringSubRegex("hello world", "hello")); // Output: true
console.log(checkStringSubRegex("hello world", "world")); // Output: false
