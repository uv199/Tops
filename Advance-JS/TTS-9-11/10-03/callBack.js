function fun1(argFun, cb) {
  //   for (let i = 0; i < 1000000000; i++) {}
  setTimeout(() => {
    console.log("----->fun1");
    cb(argFun);
  }, [2000]);
}

function fun2(cb2) {
  setTimeout(() => {
    console.log("----->fun2");
    cb2();
  }, 3000);
}
function fun3() {
  console.log("----->fun3");
}

fun1(fun3, fun2);
