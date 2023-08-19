export function fun1(params) {
  console.log("---fun1---");
}
export function fun2(params) {
  console.log("---fun2---");
}
export const x = "testF";
// module.exports = { fun1,fun2 };
// module.exports = { fun1,fun2 ,x};

export default function defaultFun(params) {
  console.log("---defaultFun---");
}
