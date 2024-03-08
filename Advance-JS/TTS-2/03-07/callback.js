function fun1(callBack) {
  console.log("-----------  callBack----------->", callBack);
  console.log("-----fun1-----");
  callBack();
}

// function fun2(params) {
//   console.log("-----fun2-----");
// }

// fun1(fun2);

fun1(function () {
  console.log("-----fun2-----");
});

// call back hell -> more nested call back 
// fun1(() => {
//   () => {
//     () => {};
//   };
// });
