"use strict";
// setTimeout(function,time)
let x = 999999;
console.log("x", x);
y = 10000;
console.log("y", y);
setTimeout(() => {
  console.log("------set Time out------>");
}, 3000);

let id = setInterval(() => {
  console.log("------set Interval------>");
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 7000);
