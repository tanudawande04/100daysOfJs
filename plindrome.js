// write a functon to check whether a given string is a palindrome or not. a plindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

const isPalindrome = (str) => {

    str = str.toLowerCase().replace(/[\W_]/g, ""); // Remove non-alphanumeric characters and convert to lowercase
    let revstr = str.split("").reverse().join("");

    if (str === revstr) {
        return true;
    }
    return false;

}


console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("MADAM"));
console.log(isPalindrome("Was it a car or a cat I saw?")); // true

console.log(isPalindrome("121"));


//non words replace with empty string 
//non words  = [^a-zA-Z0-9_] if  we conver upper case so waha small 'w' se rplace krege but lowecase me  capital 'W' aayega.