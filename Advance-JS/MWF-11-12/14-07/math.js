// ceil()	It returns a smallest integer value, greater than or equal to the given number.

let x = Math.ceil(15.1);
console.log(" x:", x);
// ceil()	It returns a smallest integer value, greater than or equal to the given number.
console.log(" ceil:", Math.ceil(15.99));

// floor()	It returns largest integer value, lower than or equal to the given number.
console.log(" floor:", Math.floor(15.99));

// max()	It returns maximum value of the given numbers.
console.log(" max:", Math.max(15.99, 12, 11, 23));

// min()	It returns minimum value of the given numbers.
console.log(" min:", Math.min(15.99, 12, 11, 23));

// random()	It returns random number between 0 (inclusive) and 1 (exclusive).
console.log(" random:", Math.random());

// round()	It returns closest integer value of the given number.
console.log(" round:", Math.round(12.2));
console.log(" round:", Math.round(12.5));

// trunc()	It returns an integer part of the given number.
console.log("trunc:", Math.trunc(12678.58689));

//============================================================
// generate otp
let otp = Math.random();
console.log("=====>otp", otp);
let x1 = otp.toFixed(4);

let o = Math.random().toFixed(1) * 10;
console.log("=====>x1", x1 * 10000);
let arr = ["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j9", "j10"];
console.log("------- arr[o]:", arr[o]);

let Arr=[{}]