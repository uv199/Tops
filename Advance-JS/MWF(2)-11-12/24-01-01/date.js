let today = new Date();
// console.log("-----------  today----------->", today);

let dd = today.getDate();
let yyyy = today.getFullYear();
let mm = today.getMonth(); // - 0-11 (0=junary, 11=december)
let date = `${dd}/${mm + 1}/${yyyy}`;
// console.log("-----------  date----------->", date);

// console.log("----------- today.getDay()----------->", today.getDay()); // - 0-6 (0=sunday, 6=saturday)

let minuts = today.getMinutes();
// console.log("-----------  minuts----------->", minuts);

let time = today.getTime(); // give time in ms 0 start from 1-1-1970
// console.log("-----------  time----------->", time);

// 0 => "sunday"
// 1 => "monday"

function getToday(params) {
  let weekDayName = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let toDay = new Date();
  let day = today.getDay();
  console.log("-----------  day----------->", day);
  return weekDayName[day];
}

let weekDay = getToday();
console.log("-----------  weekDay----------->", weekDay);

// today is 1, january 2024 - monday

// custome date

// with date string
let before2day = new Date('2023-12-30');
let date2 = before2day.getDate();
let month2 = before2day.getMonth();
console.log("-----------  month2----------->", month2);
console.log("-----------  date2----------->", date2);

// with ms

let daybefore = new Date(-24*3600*1000);
// let daybefore = new Date(-24*3600*1000);
console.log("-----------  daybefore----------->", daybefore.getFullYear())
