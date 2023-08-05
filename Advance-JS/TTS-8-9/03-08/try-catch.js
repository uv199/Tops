function fun(params) {
  console.log("---->");
  //   throw new Error("data not found");
}
function fun2(params) {
  console.log("---->");
}

try {
  fun();
  fun2();
  JSON.parse({ a: 20 });
} catch (error) {
  console.log("erro", error);
}
