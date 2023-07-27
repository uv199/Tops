// let date = new Date();
// console.log(" date:", date);

// console.log(" date.getDate():", date.getDate());
// console.log(" date.getDate():", date.getDate());
// console.log(" date.:", date.getTime());
// console.log(" date.:", date.getHours());
// console.log(" date.:", date.getMinutes());
// console.log(" date.:", date.getMonth());

// let dd = date.getDate();
// let mm = date.getMonth() + 1;
// let yyyy = date.getFullYear();
// console.log(`${dd}/${mm}/${yyyy}`);

// //

// let oldDate = new Date("2023/01/11");
// console.log("oldDate:", oldDate);
// console.log("oldDate:", oldDate.getDate());

// let zeroDate = new Date(0);
// console.log("zeroDate:", zeroDate);

// how to add day

let fsDate = new Date();
let time = fsDate.getTime();
let twoDayAfter = new Date(time + 1000 * 3600 * 24 * 5); // for add 5 day from today
console.log(" twoDayAfter:", twoDayAfter);

// date before 1-1-1970
// console.log(new Date(-1000 * 3600 * 24 * 5));
