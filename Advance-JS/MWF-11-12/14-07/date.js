let toDay = new Date();
let zeroDate = new Date(-1000 * 60 * 60 * 24);
console.log("🚀 ~ file: data.js:3 ~ zeroDate:", zeroDate);
console.log("🚀 ~ file: data.js:2 ~ data:", toDay);
let date = toDay.getDate();
console.log("🚀 ~ file: data.js:4 ~ date:", date);
console.log("🚀 ~ file: data.js:4 ~ date:", toDay.getFullYear());
console.log("🚀 ~ file: data.js:4 ~ date:", toDay.getHours());
console.log("🚀 ~ file: data.js:4 ~ date:", toDay.getTime());
console.log("🚀 ~ file: data.js:4 ~ date:", toDay.getMilliseconds());

let towDayBefore = new Date("2011-10-10");
console.log("🚀 ~ file: data.js:13 ~ towDayBefore:", towDayBefore);
console.log("🚀 ~ file: data.js:13 ~ towDayBefore:", towDayBefore.getDate());
console.log("🚀 ~ file: data.js:13 ~ towDayBefore:", towDayBefore.getTime());
let d = towDayBefore.getDate();
let y = towDayBefore.getFullYear();
let m = towDayBefore.getMonth();
// let realDate = d + "/" + m + "/" + y;
let realDate = `${d}/${m}/${y}`;
console.log(realDate);
