/*
// parseFloat()	It converts the given string into a floating point number.

let no = Number.parseFloat("12.50")
console.log("-----------  no----------->", typeof no)


// parseInt()	It converts the given string into an integer number.

// let n2 = Number.parseInt("15.245")
let n2 = Number.parseInt("15.245")
console.log("-----------  n2----------->", n2)
*/

// toFixed()	It returns the string that represents a number with exact digits after a decimal point.

// let price = 799.889;

// let discount = 34.6;

// let discountPrice = (price * discount) / 100;
// let saleingPrice = price - discountPrice;
// console.log("-----------  saleingPrice----------->", +saleingPrice.toFixed(2));

// case 2
let price = 800;

let discount = 30;

let discountPrice = (price * discount) / 100;
let saleingPrice = price - discountPrice;
console.log("-----------  saleingPrice----------->", saleingPrice);
console.log("-----------  saleingPrice----------->", saleingPrice.toFixed(2));

let x = 12.254564564564;
console.log("-=-=-=>", x.toFixed(4));

console.log("ans: ", 20 + +"40");
