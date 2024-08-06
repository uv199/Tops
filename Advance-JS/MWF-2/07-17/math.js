/*
// ceil()	It returns a smallest integer value, greater than or equal to the given number.

console.log("----math.ceil()---->", Math.ceil(12.0));
console.log("----math.ceil()---->", Math.ceil(12.123));
console.log("----math.ceil()---->", Math.ceil(12.567));

// floor()	It returns largest integer value, lower than or equal to the given number.
console.log("----math.floor()---->", Math.floor(12.0));
console.log("----math.floor()---->", Math.floor(12.123));
console.log("----math.floor()---->", Math.floor(12.567));

// trunc()	It returns an integer part of the given number.

console.log("----math.trunc()---->", Math.trunc(12.0));
console.log("----math.trunc()---->", Math.trunc(12.123));
console.log("----math.trunc()---->", Math.trunc(12.567));

// max()	It returns maximum value of the given numbers.

let arr = [12, 3, 12.3, 5];
console.log("----math.max()---->", Math.max(12.5, 12.51, 3, 4));
console.log("----math.max()---->", Math.max(...arr));

// min()	It returns minimum value of the given numbers.
let arr = [12, 3, 12.3, 5];
console.log("----math.min()---->", Math.min(12.5, 12.51, -3, 4));
console.log("----math.min()---->", Math.min(...arr));

// pow()	It returns value of base to the power of exponent.
console.log("----math.pow()---->", Math.pow(3,4));


// random()	It returns random number between 0 (inclusive) and 1 (exclusive).

// generate num between 1-6 

// if user give 6 then generate 6 digit otp if 8 then generate 8 gigit otp
function generateOtp(params) {
    let randomNO = Math.random();
    let foreDigitNo = randomNO * 10000;
    let OTP = Math.floor(foreDigitNo);
    return OTP;
}
let otp = generateOtp(8);
console.log("-----------  otp----------->", otp)
// console.log("----math.random()---->", Math.random());
// console.log("----math.random()---->", Math.random());
*/

// round()	It returns closest integer value of the given number.


// 12.49 => 12
// 12.50 => 13

console.log("----math.round()---->", Math.round(12.0));
console.log("----math.round()---->", Math.round(12.49));
console.log("----math.round()---->", Math.round(12.567));

