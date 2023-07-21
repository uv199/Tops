function fun1(x) {
  console.log("----fun1------", x);
}
function fun2(params) {
  //   throw new Error({msg:"error created-----> "});
  console.log("----fun2------");
}
function fun3(params) {
  JSON.parse([]);
  console.log("----fun3------");
}

try {
  let x = 20;
  fun1(x);
  fun2();
  fun3();
  //   throw new Error("test");
} catch (err) {
  console.log(err.msg);
}
