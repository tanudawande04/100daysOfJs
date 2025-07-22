//write a function that takes array of integer as input and remove duplicate elements and returning a new array  with inly the unique elemnets.

const removeDuplicates = (arr) => {
    let newArr = [...new Set(arr)]; // spreads the elements of the Set into a new array
    return newArr
}

console.log(removeDuplicates([1, 3, 2, 3, 4, 5, 5, 6, 7, 8, 8])); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


// Set() method in javascript create a new set object . A set object is collection of unique value. it can store any type of values wheter primitive value or object refrences.

