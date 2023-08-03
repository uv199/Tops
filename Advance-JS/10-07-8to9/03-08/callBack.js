function fun1(callBack) {
  setTimeout(() => {
    console.log("==1==>");
    callBack();
  }, 2000);
}

function fun2(params) {
  console.log("==2==>");
}
// fun1(() => {
//     console.log("==2==>");
//   });

fun1(fun2);
// fun2();
