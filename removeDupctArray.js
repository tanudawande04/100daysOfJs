//Remove duplicates in an Arrays....

const duplicate = (arr) => {
    return [...new Set(arr)];
}

console.log(duplicate([1, 2, 2, 3, 4, 4, 4, 5, 6, 7]));
