//password  validation for char or special word......

const passValidator = (pass) => {

    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;

    return regex.test(pass);


}

console.log(passValidator("Pass@123"));
