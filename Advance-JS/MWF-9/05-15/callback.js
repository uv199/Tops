function fun1(cb) {
  cb();
  console.log("-----------  fun1----------->");
}

function fun2(params) {
  console.log("-----------  fun2----------->");
}

fun1(fun2);
