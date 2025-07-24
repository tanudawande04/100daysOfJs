//Write a function to count a occurence of each element in an array and store the couts in  an object the keys of the object should be the elements of the array and the values should be the number of times each element appears in the array.

// input // [1, 2, 2, 3, 3, 3]
//output // {'1': 1, '2': 2, '3': 3}
const countOccurrence = (arr) => {

    let counts = {};
    for (const elem of arr) {
        counts[elem] = (counts[elem] || 0) + 1;

    }
    return counts;


}
console.log(countOccurrence([1, 2, 2, 3, 3, 3])); // Output: { '1': 1, '2': 2, '3': 3 }
