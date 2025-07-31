// check the range of number in fizz  buzz or fizbuzzz........

const fizBuz = (num1, num2) => {
    let arr = [];
    for (let i = num1; i <= num2; i++) {
        if (i % 3 === 0 && i % 5 == 0) {
            arr.push("fizzzBuzzz");
        }
        else if (i % 3 === 0) {
            arr.push("fizzz");
        }
        else if (i % 5 === 0) {
            arr.push("Buzzz");
        } else {
            arr.push(i);
        }
    }
    return arr;

}


console.log(fizBuz(1, 15));
