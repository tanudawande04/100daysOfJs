//check onject is empty or not....

const newObj = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return `it's not empty;`
        }
    }
    return `it's empty`;
}

console.log(newObj({ name: "tannu" })); // its empty....
console.log(newObj({}));



// second method.....

const checkobj = (obj) => {
    return Object.keys(obj).length === 0;
}
console.log(checkobj({ keyvalue: null }));
console.log(checkobj({}));
