let today = new Date("2024-02-25");
// console.log("-----------  today----------->", today);
let hr = today.getHours();
// console.log("-----------  hr----------->", hr);
let min = today.getMinutes();
// console.log("-----------  min----------->", min);

// console.log("-----------  ----------->", today.getDate());
// console.log("-----------  ----------->", today.getDay());
// console.log("-----------  ----------->", today.getMonth());
// console.log("-----------  ----------->", today.getFullYear());
// console.log("-----------  ----------->", today.getTime());
// 1709108542817 //=> 1-1-1970
let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// today is WednusDay

let dayNum = today.getDay();
console.log("-----------  dayNum----------->", dayNum);
console.log(`today is ${weekDay[dayNum]}`);

function printday(params) {
  console.log("today is 28,january 2024 - Wednesday");
}
