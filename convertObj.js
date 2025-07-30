// convert object to arrays.....

const dictionary = {
    name: "tanu",
    age: 21,
    city: "pune"
}

// convert object to arrays.......


const entries = Object.entries(dictionary);
console.log(entries);
console.log(entries.flat());


// return convert arrays to object......

let newObj = Object.fromEntries(entries);
console.log(newObj);
