//Write a function to generates random colors..

const randomcolor = () => {
    return `#${Math.random().toString(16).slice(2, 4).padEnd(6, 0)}`;
    //convert hexaDecimal


}


console.log(randomcolor());


