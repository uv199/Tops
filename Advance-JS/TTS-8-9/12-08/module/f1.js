function fun1(params) {
  console.log("---fun1--->");
  return "its call fun-1";
}
function fun2(params) {
  console.log("---fun2--->");
}
module.exports = {
  fun1: fun1,
  fun2,
};

// exports.default = "";
