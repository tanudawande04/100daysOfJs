//write a function to create destructuring.js that demonstrates destructuring in JavaScript.

const numbers = [1, 2, 3, 4, 5];
const [a, b, c] = numbers;
console.log(b); // Output: 2


const person = {
    name: "Tanushree",
    age: 21,
    city: "Pune"
};
const { name, age } = person;
console.log(name); // Output: Tanushree
console.log(age); // Output: 21