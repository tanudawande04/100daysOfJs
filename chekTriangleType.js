// write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle.the function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

const checkTriangleType = (a, b, c) => {
    if (a === b && b === c && a === c) {
        return "equilateral";
    }
    else if (a === b || b === c || a === c) {
        return "isosceles";
    }
    else {
        return "scalene";
    }
}

console.log(checkTriangleType(3, 3, 3)); // "equilateral"
console.log(checkTriangleType(3, 4, 3)); // "isosceles"
console.log(checkTriangleType(3, 4, 5)); // "scalene