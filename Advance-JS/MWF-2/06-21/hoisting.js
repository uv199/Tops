/*
it is an js behaviour , when js run a code it take all varibale and function(normal only) and declare them on top of the file it call hoisting 

console.log("----------- x before ----------->", x)
var x = 100;
console.log("-----------x----------->", x)

console.log("-----------  y before----------->", y)
let y = 400
console.log("-----------  y----------->", y)

*/

print();
function print(params) {
  console.log("-----normal------");
}

fatArrowPrint();
const fatArrowPrint = () => {
  console.log("-----fatArrowPrint------");
};
