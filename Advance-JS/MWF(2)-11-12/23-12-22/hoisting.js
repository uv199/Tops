// console.log("-----------  x----------->", x); // give error beacuse let not support hoisting
let x = 20;
console.log("-----------  x----------->", x);

// fun1(); // supoort hoisting
function fun1() {
  console.log("---normal function---->");
}
