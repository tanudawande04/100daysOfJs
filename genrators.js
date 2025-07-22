const HashGenrated = (str) => {
    if (str.length > 280 || str.trim().length === 0) {
        return false;
    }

    str = str.split(" ");

    str = str.map(
        (curritem) =>
            //type ->1
            // curritem.replace(curritem[0], curritem[0].toUpperCase()));
            //type -> 2
            curritem.charAt(0).toUpperCase() + curritem.slice(1) // index 0 ko chodeke totaly dedo mean by slice....
    );


    str = `#${str.join("")}`;
    console.log(str);
    return str;
};

console.log(HashGenrated("my name is thapa technology"));
