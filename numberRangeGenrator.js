//Write a function called numbergenrator  to genrates an array contains consuctive numbers from a to b (inclusive).

const numberRange = (a, b) => {
    let arr = [];
    while (a <= b) {
        console.log(a);
        arr.push(a);
        a++;

    }
    return arr;


};

console.log(numberRange(0, 5));

// recurson method... pen...