//Write a function that takes string input as a function  and returns the vowels in the string. Consider a, e, i, o, u as vowels(both LowerCase and UpperCase).

const countVowels = (str) => {

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let arr = str.split("");
    console.log(arr);

    let count = 0;
    for (let char of arr) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++;
        }

    }
    return count;

}

console.log(countVowels("Hello World")); // Output: 3 (e, o, o)
