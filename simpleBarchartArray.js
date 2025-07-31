//bar chart from array of data....

//map method = always hame ek array return krta hai 

const createBarcharts = (arr) => {
    let star = "";
    let number = 0;

    const newarr = arr.map((currelem, idx) => {
        while (number < currelem) {
            star = star + "*";
            number++;
        }
        return `${idx++} : ${star}`;
    });
    return newarr.join("\n");


}

console.log(createBarcharts([3, 5, 7, 4]));


// second method.......

const secndmethod = (arr) => {

    return arr.map((currelem, index) => {
        return `${index++} : ${"*".repeat(currelem)}`
    }).join("\n");

}

console.log(secndmethod([4, 6, 7, 8, 9]));
