function fun1(cb) {
  setTimeout(() => {
    console.log("----fun1----->");
    cb()
  }, 2000);
}

function fun2(params) {
  console.log("----fun2----->");
}

fun1(fun2);
// fun2();
