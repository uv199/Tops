// function which pass as a argument in another function

function fun1() {
  console.log("---->");
}

function fun2(cb) {
  console.log("-----------cb----------->", cb);
  // console.log("---fun2--->");
}

fun2(fun1);

// fun2(() => {
//   console.log("---->");
// });

// call back hell --> nested call back

function HOF_fun(params) {
  console.log("--->");
}

// call back hell

HOF_fun(() => {
  () => {
    () => {
      () => {};
    };
  };
});
