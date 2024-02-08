function fun1(callBack) {
  console.log("-----------  callBack----------->", callBack);
  setTimeout(() => {
    console.log("--fun-1-->");
    callBack();
  }, 1000);
}

function fun2() {
  console.log("--fun-2-->");
}

// fun1(fun2);
fun1(() => {
  console.log("--fun-2-->");
});
// fun2();

// call back hell
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          setTimeout(() => {
            console.log("----->");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 200);
  }, 1000);
}, 1000);
