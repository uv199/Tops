/*

function f1(x, y) {
  console.log("Fx, y:", x, y);
  console.log(x + y);
}
f1(2);
f1(null, undefined, () => {}, 20, "str", true, {}, []);
f1(10, 20);
f1(10, 5);
function fun1(params) {
  console.log("------>");
  return [{ name: "test" }];
}

let mno = fun1();
console.log("🚀 ~ file: function.js:15 ~ mno:", mno);


function normal(params) {
  return "urvish";
}
// let fatArrowFun = (params) => {};

let fatArrowFun = () => {
  return "urvish";
};
// let fatArrowFun = () => "urvish";

let x = fatArrowFun();
console.log("🚀 ~ file: function.js:27 ~ x:", x);

*/
normal();
function normal(params) {
  console.log("--->normal");
}
fatArrowFun();
let fatArrowFun = () => {
  console.log("--->fatArrowFun");
};



