// toFixed()	It returns the string that represents a number with exact digits after a decimal point.

let no = 1;
// let no = 1.225721341231
let ans = no.toFixed(2);
console.log("---->", ans);

/*
// parseFloat()	It converts the given string into a floating point number.
console.log("-----parseFloat----->", Number.parseFloat("12.520"));

// parseInt()	It converts the given string into an integer number.
console.log("-----parseFloat----->", Number.parseInt("12.520"));
console.log("-----+----->", +"12.520");
console.log("-----+----->", +"12");

let sum = +"20" + 20;
console.log("-----------  sum----------->", sum)
*/


// 0.000 => 0.000*6+1=1
// 0.999 => 0.999*6+1=>6.994
