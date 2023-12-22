// fun1();
function fun1() {
  console.log("---normal function---->");
}
// fun1();

fun2(); // not support hoisting
var fun2 = () => {
  console.log("----fat arrow function---->");
};
fun2();
