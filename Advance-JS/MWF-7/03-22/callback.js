function fun1(callBack) {
  console.log("-----------  callBack----------->", callBack);
  setTimeout(() => {
    console.log("------fun1------");
    callBack();
  }, 1000);
}
function fun2(params) {
  console.log("------fun2------");
}

// fun1(fun2);
// fun2();

fun1(() => {
  console.log("------fun2------");
});

let arr = [10, 20, 30, 40];

arr.map((element) => {
  console.log("-----------  element----------->", element);
});
