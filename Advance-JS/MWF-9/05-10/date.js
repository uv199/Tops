let today = new Date();
// let today = new Date(0);
// let today = new Date("2000-09-19");

//   1-1-1970 -> 0 date
console.log("-------today------->", today);

console.log("-------hr------->", today.getHours());
console.log("-------getMinutes------->", today.getMinutes());
console.log("-------getFullYear------->", today.getFullYear());
console.log("-------getMonth------->", today.getMonth());
console.log("-------getDate------->", today.getDate());
console.log("-------getDay------->", today.getDay());
console.log("-------getDay------->", today.getTimezoneOffset());
console.log("-------getTime------->", today.getTime());

// 10:13

// -330 => 330/60 => 5:30

// 5%2 => 1 => 5-2 => 3-2 => 1
// 5%3 => 2 => 5-3 => 2

let weekIndex = today.getDay();
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("====>", weekDays[weekIndex]);
//  today is friday

// today is 10th may 2024 - friday

function print(dateStr) {
  let date = new Date(dateStr);
  const weekDayIdenx = date.getDay();
  console.log(`today is ${weekDays[weekDayIdenx]}`);
}

print("2024-05-08");
print("2024-05-09");
print("2024-05-10");
print(-1000 * 60 * 60 * 24);
