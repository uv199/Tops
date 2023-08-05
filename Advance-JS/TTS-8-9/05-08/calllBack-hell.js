function fun1(cb2, cb3, cb4, cb5) {
  console.log("==fun1==>");
  cb2(cb3, cb4, cb5);
}
function fun2(cb3, cb4, cb5) {
  console.log("==fun2==>");
  cb3(cb4, cb5);
}
function fun3(cb4, cb5) {
  console.log("==fun3==>");
  cb4(cb5);
}
function fun4(cb5) {
  console.log("==fun4==>");
  cb5();
}
function fun5(params) {
  console.log("==fun5==>");
}

fun1(fun2, fun3, fun4, fun5);
