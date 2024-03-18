// let today = new Date("2024-03-15");
// let today = new Date(-1000 * 60 * 60 * 24);
let today = new Date();
console.log("-----------  today----------->", today);

// console.log("-----------  today----------->", today.getDate());
// console.log("-----------  today----------->", today.getFullYear());
// console.log("-----------  today----------->", today.getMinutes());
// console.log("-----------  today----------->", today.getHours());
// console.log("-----------  today----------->", today.getDay());
// console.log("-----------  today----------->", today.getMonth());
console.log("-----------  today----------->", today.getTime());

let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();
// array

let arr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(`${dd}/${arr[mm]}/${yyyy}`);
//  today is 18 march 2024, monday
//  today is 17 march 2024, its a funday - sunday
