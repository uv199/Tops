/*

let x = null;
// if x contain null, undefined, 0, false, "" then y takes 2nd value
// falsy value = null, undefined, 0, false, ""

let y = x || 40;
console.log("-----------  y----------->", y);
*/
let x2 = 1000;

// x2 , or i want to allow 0 only from all falsy value
if (x2 === 0 || x2) {
  console.log("x have some value");
} else {
  console.log("x is empty");
}

// let data = [];
let data = {};
if (!data) {
  console.log("data not found");
} else {
  console.log("data  found");
}


