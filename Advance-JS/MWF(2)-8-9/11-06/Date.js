// "use strict";
// a = 100;
// console.log("a", a);

// let toDay = new Date();
// let toDay = new Date(1000 * 60 * 60 * 24);
let toDay = new Date("11/05/2023");
console.log("toDay", toDay);
console.log("toDay", toDay.getDate());
console.log("toDay", toDay.getDay());
console.log("toDay", toDay.getFullYear());
console.log("toDay", toDay.getMonth());
console.log("toDay", toDay.getTime());
console.log("toDay", toDay.getUTCHours());
console.log("toDay", toDay.toDateString());
console.log("toDay", toDay.toISOString());

let days = [
  "Sunday",
  "Monday",
  "TuesDay",
  "WednesDay",
  "ThursDay",
  "Friday",
  "SaturDay",
];

let dayIndex = toDay.getDay();

console.log(`Today is ${days[dayIndex]}`);
