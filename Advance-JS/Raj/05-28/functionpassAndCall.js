function fun(params) {
  console.log("🚀 ~ fun ~ params:", params);
}

function fun2() {
  return "hello world";
}

fun(fun2); // pass a function in params

fun(fun2()) // pass a return value of function in params
