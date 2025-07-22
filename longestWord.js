//FIND Longestword in a string....
const findLongestWord = (str) => {

    if (str.trim().length === 0) {
        return false;
    }

    const words = str.split(" ");
    words.sort((a, b) => b.length - a.length);
    console.log(words);


    return words[0];


};

console.log(findLongestWord("watch thapa Tech Javascript Series"));


//second methods..



