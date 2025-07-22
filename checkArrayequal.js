// write a function arrayareEqual that takes two arrays as input and returns true if they are equal (i.e., have the same elements in the same order) and false otherwise.

const checkArrayEqual = (arr1, arr2) => {
    if (arr1.length === 0 && arr2.length === 0) {
        return true; // Both arrays are empty
    }

    if (arr1.length !== arr2.length) {
        return false; // Arrays have different lengths
    }
    return arr1.every((element, idx) => {
        return element === arr2[idx];

    })
}
console.log(checkArrayEqual([1, 5, 4], [1, 5, 4])); // Output: true
