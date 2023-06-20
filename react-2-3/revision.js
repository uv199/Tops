let a = [1, 2, 3, 4];

let abc = a.entries();

// for (var e of abc) {
//   //for loop using var.
//   console.log("a.entries() :", e);
// }

function fun(z, y) {}
let x = 10;
fun(x, 10);

// let total
// a.map((e, i) => {
//   console.log(i, "=>", e);
// });

// let total = a.reduce((t, e, i) => {
//   console.log(i, "=>", e, "-->", t);
//   return t + e;
// }, 0);

// console.log("total :", total);

// console.log("Array.isArray(value) :", Array.isArray(total));
// console.log("Array.isArray(value) :", Array.isArray(a));

let obj = {
  a: 10,
  b: 10,
};

console.log("key", obj.a);
console.log("key", Object.keys(obj));
console.log("value", Object.values(obj));
console.log("entities", Object.entries(obj));
