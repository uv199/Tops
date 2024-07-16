// let date = new Date("2024-07-14");
let date = new Date(86400000);
// 1 jan 1970 => 0th date

// date.setDate(14)
// date.setFullYear(2023)



let ans = 54 * 365 * 24 * 60 * 60 * 1000;
console.log("-----------  ans----------->", ans);

console.log("-----------  date----------->", date);

let dd = date.getDate()
let mm= date.getMonth()
let yyyy = date.getFullYear()
console.log("-----------  dd----------->", dd,mm+1,yyyy)
/*

console.log("----->", date.getHours());
console.log("----->", date.getMinutes());
console.log("----->", date.getDay());
console.log("----->", date.getTime());
*/

// monday

let arr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


let weekDayIndex = date.getDay() 

console.log("-----------  weekDayIndex----------->", weekDayIndex)


let day = arr[weekDayIndex]
console.log("-----------  day----------->", day)


// today is 15, july 2024, monday - it is a working day
// today is 14, july 2024, sunday - it is a fun day


// 1 jan 1970 - 0
// 3 jan 1970 - 86400000
// 15 july 2024 - 1702944000000
