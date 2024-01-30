// let today = new Date();
// let today = new Date(-1000 * 60 * 60 * 24); // give milisecond time
// let today = new Date("2024-02-04");

console.log("-----------  today----------->", today);
let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();
console.log("-----------  dd----------->", dd);
console.log("-----------  mm----------->", mm);
console.log("-----------  yyyy----------->", yyyy);
console.log("-getTime->", today.getTime());
console.log("-getHours->", today.getHours());
console.log("-getMinutes->", today.getMinutes());
console.log("-getSeconds->", today.getSeconds());
let weekDay = today.getDay();

let weekDaysName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log("-----------  weekDay----------->", weekDaysName[weekDay]);

/*
make fatarrow fun whict give a sentence like "Today is 30, january 2025 - tuesDay so today is working  day/weekEnd" 
*/

// make afunction who print date before 2 days
