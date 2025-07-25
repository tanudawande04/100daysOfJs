//write a function pass validator.....
//artleast 8 character , one digit , one uppercase , one lowercase (this is the criteria....);


const passGenrator = (password) => {
    let haslower = false;
    let hasupper = false;
    let hasdigit = false;
    for (char of password) {
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            hasupper = true;
        }
        else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            haslower = true;
        } else if (!isNaN(Number(char))) {
            hasdigit = true;
        }

    }

    if (!hasdigit || !haslower || !hasupper || password.length < 8) {
        return false;
    }

    return true;

}

console.log(passGenrator("aK0spdfrhtgh"));
