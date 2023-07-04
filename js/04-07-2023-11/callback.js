function f1(params) {
  console.log("f1====>");
}

function main(a, b, cb) {
  console.log("main--->", a + b);
  cb();
}

main(5, 6, f1);
