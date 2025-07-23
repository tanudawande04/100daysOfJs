//write a function to convert camelCase to snake_case .

const { useLayoutEffect } = require("react");

const toCamelCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (let i = 1; i < str.length; i++) {
        str[i] = str[i].toUpperCase().charAt(0) + str[i].slice(1);
    }
    str = str.join('');
    return str.charAt(0).toLowerCase() + str.slice(1);

}

console.log(toCamelCase("hello world alpha")); // Output: "helloWorld"

// second method..
const camelcaseconvert = (str) => {
    str = str.trim().split(" ");
    str = str.map((currElem, idx) => {
        if (idx === 0) {
            return currElem.toLowerCase();
        } else {
            return currElem.charAt(0).toUpperCase() + currElem.slice(1).toLowerCase();

        }

    });
    return str.join("");


}
console.log(camelcaseconvert("hello world alpha")); // Output: "helloWorld"

//snake_case to camelCase
const toSnakeCase = (str) => {
    str = str.split('_');

    for (let i = 1; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join('');
}
console.log(toSnakeCase("hello_world_alpha")); // Output: "helloWorld"



// Convert camelCase to snake_case
str = "hello_world_alpha";
str = str.split('_');
console.log(str); // Output: ["hello", "world", "alpha"]
