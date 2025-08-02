// write a function called truncateString that takes two parameters..

const TruncateString = (str, count) => {
    if (count <= 0) {
        return str;
    }
    else if (str.length > count) {
        return str.slice(0, count).concat("...");
    }

}
console.log(TruncateString("a man can change his cloths", 5));


//slice method...
// concat method ....


//debouncing 
//event delegation
// event bubling 
//settimeout
//stopPropgation.
//memoization
//space optimization



