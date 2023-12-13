/*
const sumFile = require("./sum");
const subFile = require("./sub");
console.log("-----------  subFile----------->", subFile)
console.log("-----------  sumFile----------->", sumFile);

let x = 20;
let y = 9;
let total = sumFile.SUM(x, y);
sumFile.print(total);

*/

const { SUM, print } = require("./sum");
console.log("-----------   SUM, print----------->", SUM, print);
console.log("-----------  sumFile----------->", SUM(99,90));
