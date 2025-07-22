//Write a function called countChar that takes two parameters a string and a character to a count , the function should return the number of times the specified character appears in the strings


const countChar = (str) => {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        if (str.charAt(index) == "i" || str.charAt(index) == "I") {
            count++;
        }

    }
    return count;

}

console.log(countChar("MissIsippi"));


//second method reduce..

const countLetter = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();

    totalcount = word.split("").reduce((acc, curr) => {
        if (curr === char) {
            acc++;
        }

        return acc;

    }, 0);

    return totalcount;

}

console.log(countLetter("MissIsippi", "I"));


