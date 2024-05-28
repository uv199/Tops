// A callback function is a function passed into another function as an argument,

function fun1(callBack) {
  console.log("🚀 ~ fun1 ~ callBack:", callBack);
  console.log("🚀 ~ fun1 ~ params:");
  callBack();
}

/*
function fun2() {
  console.log("🚀 ~ fun2 ~ fun2:");
}

fun1(fun2);
*/

fun1(() => {
  console.log("🚀 ~ fun2 ~ fun2:");
});

//  callback hell - when we define more then 2 to 3 nested callback so we can call that callback hell
// - due to that we getting truble to manage code and code will be harder read
// to prevent this we need to define promise and async await functions

fun1(() => {
  () => {
    () => {
      () => {};
    };
  };
});

[].map((e) => {
  e.map((e2) => {
    e2.map((e3) => {
      e3.map((e4) => {});
    });
  });
});
