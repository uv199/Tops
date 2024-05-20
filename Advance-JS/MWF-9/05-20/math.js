/*
// ceil()	It returns a smallest integer value, greater than or equal to the given number.

console.log("----ceil()---->", Math.ceil(12.24564));
console.log("----ceil()---->", Math.ceil(12.75564));
console.log("----ceil()---->", Math.ceil(12.0000));

// floor()	It returns largest integer value, lower than or equal to the given number.


console.log("----floor()---->", Math.floor(12.24564));
console.log("----floor()---->", Math.floor(12.75564));
console.log("----floor()---->", Math.floor(12.0000));


// round()	It returns closest integer value of the given number.

console.log("----round()---->", Math.round(12.24));
console.log("----round()---->", Math.round(12.47));
console.log("----round()---->", Math.round(12.00));

// trunc()	It returns an integer part of the given number.

console.log("----trunc()---->", Math.trunc(12.99));
console.log("----trunc()---->", Math.trunc(12.47));
console.log("----trunc()---->", Math.trunc(12.00));


// max()	It returns maximum value of the given numbers.

console.log("----max(-)---->", Math.max(-12.0, -12.23, -7, -4));
console.log("----max(-)---->", Math.max(12.0, 12.23, 7, 4));

// min()	It returns minimum value of the given numbers.

console.log("----min(-)---->", Math.min(-12.0, -12.23, -7, -4));
console.log("----min(-)---->", Math.min(12.0, 12.23, 7, 4));

let arr = [12, 7, 4, 34];

let maxNo = Math.max(...arr);
console.log("-----------  maxNo----------->", maxNo);

*/
// random()	It returns random number between 0 (inclusive) and 1 (exclusive).

// Math.floor(Math.random() * 1000000)

let randomNo = Math.random() * 1000000;
// remove numbers after point

let otp = Math.floor(randomNo);
console.log("-----------  otp----------->", otp)

// console.log("-----------  random----------->", Math.random());
// console.log("-----------  random----------->", Math.random());
// console.log("-----------  random----------->", Math.random());
// console.log("-----------  random----------->", Math.random());
// console.log("-----------  random----------->", Math.random());
// console.log("-----------  random----------->", Math.random());
