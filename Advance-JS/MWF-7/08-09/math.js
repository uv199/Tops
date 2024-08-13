/*
// abs()	It returns the absolute value of the given number.

// let abs = Math.abs(-5.55)
let abs = Math.abs(null)
console.log("-----------  abs----------->", abs)

// ceil()	It returns a smallest integer value, greater than or equal to the given number.

// 2.5 => 3
// 2.00 => 2,3,4,...
let no = Math.ceil(2.0)
// let no = Math.ceil(2.5)
console.log("-----------  no----------->", no)



// floor()	It returns largest integer value, lower than or equal to the given number.


// let no = Math.floor(2.5)
let no = Math.floor(2.0)
console.log("-----------  no----------->", no)


// round()	It returns closest integer value of the given number.

// let no = Math.round(2.4)
// let no = Math.round(2.5)
let no = Math.round(2.0)

console.log("-----------  no----------->", no)

// max()	It returns maximum value of the given numbers.
let max = Math.max(1, 2, 3, 5, 2, 3);
console.log("-----------  max----------->", max);

// min()	It returns minimum value of the given numbers.
let arr = [1, 32, 5, 2, 0.5, 21, 65, 21];

let min = Math.min(1, 2, 0.3, 5, 2, -0.3);
console.log("-----------  min----------->", min);


let minArr = Math.min(...arr)
console.log("-----------  minArr----------->", minArr)

// pow()	It returns value of base to the power of exponent.

let power = Math.pow(2,6) // 2*2*2*2*2*2 =64 
console.log("-----------  power----------->", power)

// sqrt()	It returns the square root of the given number

let ans = Math.sqrt(5)
console.log("-----------  ans----------->", ans)

*/
// random()	It returns random number between 0 (inclusive) and 1 (exclusive).

/*
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())


// 1,6
let otp = Math.trunc(Math.random() * 10000);
console.log("-----------  otp----------->", otp);

*/

//

function generateCaptcha(length) {
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  let captcha = "";
  while (captcha.length < length) {
    let randomIndex = Math.trunc(Math.random() * 62);
    captcha += str[randomIndex];
  }
  return captcha;
}

let captcha = generateCaptcha(10);
console.log("-----------  captcha----------->", captcha)
let captcha1 = generateCaptcha(3);
console.log("-----------  captcha1----------->", captcha1)
