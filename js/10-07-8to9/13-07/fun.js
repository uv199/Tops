function fun(a, b, c) {
  console.log("a,b :", a, b, c);
  console.log("=====");
  let x = a + b;
  let x2 = x / 2;
  console.log("x2 :", x2);
  return x2;
}

// let x = 50 + 20;
// let x2 = x / 2;
// let x = 50 + 50;
// let x2 = x / 2;

let x = fun(50, 40);
console.log("x :", x);

let fun2 = function (params) {
  console.log("test=====");
};

let m = fun2();
console.log("m :", m);
