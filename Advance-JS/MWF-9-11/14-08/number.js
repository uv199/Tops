// isFinite()	It determines whether the given value is a finite number.
// let x = 1000 / 2;
// let m = Infinity;
// console.log(Number.isFinite(m));

// isInteger()	It determines whether the given value is an integer.

console.log(Number.isInteger(12.6));
console.log(Number.isInteger(-1));

// parseInt()	It converts the given string into an integer number.
let x = "20f";
let x2 = Number.parseInt(x);
console.log(Number.parseInt(x));

// isNaN
console.log(Number.isNaN(x2));

// toFixed()	It returns the string that represents a number with exact digits after a decimal point.

let no = 12.43566457;
console.log(no.toFixed(3));
