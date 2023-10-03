/*
const arr = [1, 2, 3, 4, 5, 6];

let [a, b, ...c] = arr;
console.log("c", c);
console.log("b", b);
console.log("a", a);

function fun1(a, b, ...c) {
  console.log("---->a", a);
  console.log("---->b", b);
  console.log("---->c", c);
  let total = 0;
  c.map((e) => {
    total += e;
  });
  return a + b + total;
}

let x = fun1(1, 2, 3, 4, 5, 6, 7, 9, 10);
console.log("x", x);

*/
let obj = {
  a: 20,
  b: 30,
  c: 60,
  d: 90,
};

let { a, b, ...cc } = obj;
console.log("a", a);
console.log("b", b);
console.log("cc", cc);
