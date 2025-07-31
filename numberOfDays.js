//Number pf days between two days.....

// 1Day =  24 H * 60 min * 60 sec * 1000 ms = 8640000 somthing..

const differencedays = (d1, d2) => {


    //let currDate = new Date();                   => This the method use for access Date or time like  toLocalDate;
    //console.log(currDate.toLocaleTimeString());

    let date1 = new Date(d1);
    let date2 = new Date(d2);



    let diff = Math.abs(date2 - date1);

    return diff / (24 * 60 * 60 * 1000);

};

console.log(differencedays("2024-01-01", "2024-01-31"));
