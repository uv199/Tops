let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "jan",
  "feb",
  "march",
  "april",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

let dt = new Date("2024-07-14");

let date = dt.getDate();
let month = dt.getMonth();
let year = dt.getFullYear();
let day = dt.getDay();

// if (day == 0 || day == 6) {
//   console.log(
//     `Today is ${date}, ${months[month]} ${year}, ${days[day]} - it is a fun day`
//   );
// } else {
//   console.log(
//     `Today is ${date}, ${months[month]} ${year}, ${days[day]} - it is a working day`
//   );
// }

// let str = day == 0 || day == 6 ? "it is a fun day" : "it is a working day";
let str = "it is a working day";
if (day == 0 || day == 6) {
  str = "it is a fun day";
}
console.log(
  `Today is ${date}, ${months[month]} ${year}, ${days[day]} - ${str}`
);

// today is 15, july 2024, monday - it is a working day

let arr = [1, 2, 3, 4, 5];
let length = 0;
while (true) {
  let ele = arr[length];
  if (!ele) break;
  length++;
}

console.log("-----------  length----------->", length);
