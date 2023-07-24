/*

function f1(para, callBack) {
  // f1 logic
  return callBack();
}

function f2() {
  // f2 logic
}
f1(para, f2);
*/
// problem----------------------------->

// function fun1() {
//   setTimeout(() => {
//     console.log("----->1");
//   }, 2000);
// }
// function fun2() {
//   console.log("----->2");
// }
// fun1();
// fun2();

// solution call back----------------------------->
function fun1(cb) {
  // cb= fun2()
  setTimeout(() => {
    console.log("----->1");
    return cb();
  }, 2000);
}
function fun2() {
  console.log("----->2");
}

fun1(fun2);
