//write a function to revrse a string without using built-in methods.
const reverseString = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); // Output: "olleh"

console.log(reverseString("world")); // Output: "dlrow"
