/*

// ceil()	It returns a smallest integer value, greater than or equal to the given number.

console.log(Math.ceil(12.23));
console.log(Math.ceil(12.99));
console.log(Math.ceil(12.00));

// floor()	It returns largest integer value, lower than or equal to the given number.
console.log(Math.floor(12.23));
console.log(Math.floor(12.99));
console.log(Math.floor(12.0));

// round()	It returns closest integer value of the given number.
//   if point will grater then 4 it return next integer value 12.5 => 13
//   if point will smaller or equel then 4 it return next previous value 12.4 => 12

console.log(Math.round(12.23));
console.log(Math.round(12.99));
console.log(Math.round(12.0));
console.log(Math.round(12.5));
console.log(Math.round(12.4));


// random()	It returns random number between 0 (inclusive) and 1 (exclusive).

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());


// trunc()	It returns an integer part of the given number.
console.log(Math.trunc(12.23));
console.log(Math.trunc(12.99));
console.log(Math.trunc(12.0));
console.log(Math.trunc(12.5));
console.log(Math.trunc(12.4));


const generateNumber = () => {
  let step1 = Math.random();
  let step2 = step1 * 10000;
  let step3 = Math.trunc(step2);
  console.log("-----------  step3----------->", step3);
};

generateNumber();
generateNumber();
generateNumber();
generateNumber();
generateNumber();
generateNumber();
generateNumber();
generateNumber();

*/
// max()	It returns maximum value of the given numbers.

console.log(Math.max(1, 2, 44, 5, 6, 88, 8, 9, 3, 4));

// min()	It returns minimum value of the given numbers.
console.log(Math.min(1, 2.2, 0.12, 44, 5, 6, 88, 8, 9, 3, 4));

let arr = [1, 2.2, 0.12, 44, 5, 6, 88, 8, 9, 3, 4];
let maxValue = Math.max(...arr);
console.log("-----------  maxValue----------->", maxValue)
