let arr = [
  { city: "Mumbai", state_name: "Mahārāshtra" },
  { city: "Kolkāta", state_name: "West Bengal" },
  { city: "Bangalore", state_name: "Karnātaka" },
  { city: "Pune", state_name: "Mahārāshtra" },
  { city: "Ahmedabad", state_name: "Gujarāt" },
  { city: "Sūrat", state_name: "Gujarāt" },
  { city: "Prayagraj", state_name: "Uttar Pradesh" },
  { city: "Lucknow", state_name: "Uttar Pradesh" },
  { city: "Cawnpore", state_name: "Uttar Pradesh" },
];

let person = [
  { name: "uv", age: 23 },
  { name: "nayan", age: 25 },
  { name: "dharmin", age: 20 },
  { name: "sid", age: 22 },
  { name: "rajni", age: 29 },
];

/*

*/

// arr.indexOf(); => index
// arr.findIndex(); => index

// arr.include => T/F
// arr.some() => T/F

// let str = "Hello World"; // => "dlroW olleH"
let str = "Hello World"; // => "dlroW olleH"

/*
let strArr = str.split("");
console.log("-----------  strArr----------->", strArr);
let reversArr = strArr.reverse();
console.log("-----------  reversArr----------->", reversArr)
let reversStr = reversArr.join("")
console.log("-----------  reversStr----------->", reversStr)
*/
let reversStr = str.split("").reverse().join("");
console.log("-----------  reversStr----------->", reversStr);
