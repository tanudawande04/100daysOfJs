// Extract the numbers from in strings........

const extractnum = (pass) => {
    let regex = /\d+/g;

    return pass.match(regex);

};
console.log(extractnum("abc123de456"));


//g => global flag to find all matches in strings.