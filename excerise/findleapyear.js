// year 1976 ---> check whether this is leap or not

//1976/4 && 1976/100 && 1976/400 --> if all this condition satisfy then this is a leap year


// many ways
var year = 2020;


if (year % 100 === 0) {
    if (year % 400 === 0){
        console.log("leap year");
    }
} else if (year % 4 === 0) {
    console.log("leap year");
}