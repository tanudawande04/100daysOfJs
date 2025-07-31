//Calculate Age 

const findAge = (birthdate) => {

    let currdate = new Date();
    birthdate = new Date(birthdate);

    // step -> 1......

    let age = currdate.getFullYear() - birthdate.getFullYear();

    //step -> 2......

    let monthDiff = currdate.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && currdate.getDate() < birthdate.getDate())) {
        age--;
    }

    return age;
}

console.log(findAge("1990-05-15"));
