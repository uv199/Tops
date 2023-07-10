// function test(params) {
//   console.log("test---->");
// }
// module.exports = { abc: "test" };
// export let test = test;

// when have to export entire file and you can import this file by give any variable name
// import abc from "./f1.js";
let dFun = () => {
  console.log("default----call");
};
export default dFun;
// ----------------------------------------------------------------
// when have to export peace of code and you can import  by  give same name in {}
// import {fun} from "./f1.js";
export const fun = function (params) {
  console.log("test---->");
};

// import {fun,fun2} from "./f1.js";
export const fun2 = function (params) {
  console.log("test---->fun2");
};
