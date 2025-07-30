//Calculate simple intrest 

const simpleIntrst = (amount, rate, time) => {
    let ans = (amount * rate * time) / 100;
    return ans;

}

console.log(simpleIntrst(1000, 5, 3));
