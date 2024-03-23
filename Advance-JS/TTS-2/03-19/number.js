/*



*/

let n1 = "100";
let n2 = "100.12";
let n3 = "100 point";
let n4 = "Rs. 1200";

// parseInt = convert string number into integer number
// console.log("n1", Number.parseInt(n1));
// console.log("n2", Number.parseInt(n2));
// console.log("n3", Number.parseInt(n3));
// console.log("n4", Number.parseInt(n4)); // NAN -> not a number

// parseflot= convert string number into flot number
// console.log("n1", Number.parseFloat(n1));
// console.log("n2", Number.parseFloat(n2));
// console.log("n3", Number.parseFloat(n3));
// console.log("n4", Number.parseFloat(n4)); // NAN -> not a number

// console.log("n1", +n1);
// console.log("n2", +n2);
// console.log("n3", +n3);
// console.log("n4", +n4); // NAN -> not a number

console.log(+"100" + +"100");

let no = 12.213123123;
let no2 = 12.45352545;
let no3 = 12.9;
console.log("----no1", +no.toFixed(3));
console.log("----no2", no2.toFixed(3));
console.log("----no3", no3.toFixed(5));
