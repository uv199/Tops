let obj = {
  print: function (params) {},
};

// iife
(function print(a, b) {
//   console.log("-----------  print----------->", a, b);
})(10, 20);

// print()
// normal

function normalFun(b, a, c, d) {
  console.log("-----------  b, a, c, d----------->", b, a, c, d);
  console.log("-----------  normalFun----------->");
}
// normalFun(10, 20);

function sum(a, b) {
  return a + b;
}

// let total = sum(10, 20);
// console.log("-----------  total----------->", total);

const fatArrowFun = (a, b) => {
  console.log("-----------  a, b----------->", a, b)
  console.log("-----------  fatArrowFun----------->");
};

fatArrowFun(10, 20);
