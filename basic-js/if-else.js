let a = true;
let user_name
let userName
let UserName
if (a === true) {
  console.log("yes-1");
}
if (a === "") {
  console.log("yes-2");
}
if (a === 1) {
  console.log("yes-3");
}

if (a === true) {
  console.log("yes-1");
} else if (a === "") {
  console.log("yes-2");
} else if (a === 1) {
  console.log("yes-3");
}

var c = function (v = 0, a = 0) {
  console.log("test---->", v, a);
  return v + a;
};
let test = c(10);
console.log("test :", test);

let arrFun = () => {};
