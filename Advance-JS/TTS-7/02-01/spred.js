// ...  => spread

// copy
// merge - joint

let a = [1, 2, 3];
let b = [4, 5, 6];
a = [...a, ...b];
let c = [...a, ...b, 7, 8];
console.log("-----------  c----------->", c);

let o1 = { a: 20, b: 30 };
let o2 = { c: 50, d: 40 };
let o3 = { ...o1, ...o2, m: 800 };
console.log("-----------  o3----------->", o3);

// o1 = { ...o1, u: 700 };
// console.log("-----------  o1----------->", o1);

let obj = {
  a: 20,
  b: {
    b1: 30,
    b2: 60,
  },
};
let obj2 = { ...obj };

obj = { ...obj, a: 80 };
// obj.a = 90
console.log("-----------  obj----------->", obj);
//
obj.b.b1 = 3000;

console.log("-----------  obj2----------->", obj2);
