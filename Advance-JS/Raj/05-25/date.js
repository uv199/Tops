//  in computer language date was started from 1 jan 1970 - 0 sec

// let day = new Date();
// let day = new Date(1000*60*60*24);
let day = new Date("2025/05/25");
console.log("🚀 ~ day:", day);

let mm = day.getMonth() + 1;
let dd = day.getDate();
let yyyy = day.getFullYear();

let weekDay = day.getDay();
let weekDayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log("🚀 ~ weekDay:", weekDayName[weekDay]);
console.log("Date is ", `${dd}/${mm}/${yyyy}`);

console.log("getTime", day.getTime());

// today is 25, may 2024 - saturday 7:11 pm
// make one function which print date in above mention formate excluding time which date user will pass in paramas
// example - today is 25, may 2024 - saturday


// find how to i will set time after 7 day - use take 30 day plan so i want to calculate at wich date their plan will be expire
// example - today is 25, may i am subscribe plan at 6:19 pm, i subscribe plan of weekly basis so i want to print " YOUR PLAN WILL BE EXPIRE ON 1 JUNE 2024 AT 6:19"..
 // NOTE - user give length of plan 