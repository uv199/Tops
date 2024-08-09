//  0 th date => 1 january 1970

// let date = new Date(0);
let date = new Date("2024-08-04");
// let date = new Date();
console.log("-----------  date----------->", date);

let dd = date.getDate();
let mm = date.getMonth();
let yyyy = date.getFullYear();

console.log(`${dd}-${mm + 1}-${yyyy}`);

let hr = date.getHours();
let min = date.getMinutes();

console.log(`${hr}:${min}`);

// let time = date.getTimezoneOffset();
let time = date.getTime();
console.log("-----------  time----------->", time);

// +5:30 => 5*60 + 30 => -330

//  today is wednesDay

let arr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekDay = date.getDay();
console.log("-----------  weekDay----------->", weekDay);
console.log(`today is ${arr[weekDay]}`);


// today is 7 auguest, 2024 , wednesDay it is working day
// today is 4 auguest, 2024 , Sunday it is weekend
 