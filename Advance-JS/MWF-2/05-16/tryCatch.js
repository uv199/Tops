function fun1(params) {
  console.log("fun1");
}
function fun2(params) {
  //   console.log("fun2");
  throw new Error("test msg");
}
function fun3(params) {
  console.log("fun3");
}

try {
  fun1();
  fun2();
  fun3();
} catch (err) {
  console.log("somthing went wrong wile code running ");
}


