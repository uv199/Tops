// fun1();
function fun1() {
  console.log("---normal function---->");
}
// fun1();

// fun2(); // not support hoisting
var fun2 = (a, b, c) => {
  console.log("-----------  a----------->", a);
  // console.log("-----------  b----------->", b);
  console.log("-----------  c----------->", c);
  console.log("----fat arrow function---->", a + c);
};
let x = 11111;
let y = 22222;
let z = 33333;
fun2(x, y, z);
