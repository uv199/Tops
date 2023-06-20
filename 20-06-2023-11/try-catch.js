function f1(params) {
  console.log("f1");
}
function f2(params) {
  throw new Error("error--->");
  console.log("f2");
}
function name(params) {
  try {
    f1(); // then
    f2(); // then
  } catch (error) {
    console.log("----->", error);
  }
}

name();
