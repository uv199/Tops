let curentDate = new Date(); // to get curent date
// let curentDate = new Date(0); // to get zeroth  date
// let curentDate = new Date("2023/09/24"); // to get zeroth  date
console.log("curentDate", curentDate);
// console.log("curentDate", curentDate.getDate());
// console.log("curentDate", curentDate.getFullYear());
// console.log("curentDate", curentDate.getTime());
// console.log("curentDate", curentDate.getHours());
// console.log("curentDate", curentDate.getMinutes());
// console.log("curentDate", curentDate.getDay());
// console.log("curentDate", curentDate.getMonth());

// dd/mm/yyyy
let dd = curentDate.getDate();
console.log("dd", dd);
let mm = curentDate.getMonth() + 1;
let yyyy = curentDate.getFullYear();
let dayOfWeek = curentDate.getDay();

let weekDays = [
  "sunday",
  "monday",
  "tuesDay",
  "wednsday",
  "thursday",
  "friday",
  "saturday",
];
let x = ` todays date is ${dd}/${mm}/${yyyy} and today is ${weekDays[dayOfWeek]}`;
console.log(x);

let milisecond = curentDate.getTime();
console.log("milisecond", milisecond);

let total = milisecond + 1000 * 3600 * 24 * 15;
let dayAfterFive = new Date(total);
console.log("dayAfterFive", dayAfterFive);

// Today is 23, suptember 2023, saturday.
// Today is 24, suptember 2023 , today is funday
