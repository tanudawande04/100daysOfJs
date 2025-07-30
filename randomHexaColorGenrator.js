//random color generator

const randomColor = ((password) => {
    return `#${Math.random(password).toString(16).slice(2, 4).padEnd(6, 0)}`;


})

console.log(randomColor(123454));
