// validate indian mobile numbers.......
// starting at 6 , 7, 8, 9  // regex (Regular Expression).


const validation = (number) => {

    return /^[6-9][\d]{9}$/.test(number);
}


console.log(validation("7103939380"));
console.log(validation("020393738"));
