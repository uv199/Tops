// parseFloat()	It converts the given string into a floating point number.
let x = "12.35";
let y = Number.parseFloat(x);
console.log("--------parseFloat()----------->", typeof y, x);

// parseInt()	It converts the given string into an integer number.
console.log("-----------  parseInt()----------->", Number.parseInt("12.65"));

console.log("---->", +"12");
console.log("---->", +"12.78");

// toFixed() It RETURNS THE STRING that represents a number with exact digits after a decimal point.

let n = 12.256;
let n2 = 12;
console.log(n2.toFixed(23));
console.log(+n.toFixed(10));
