// ...  => spread

// copy
// merge - joint

let a = [1, 2, 3];
let b = [4, 5, 6];

let c = [...a, ...b, 7, 8];
console.log("-----------  c----------->", c);

let o1 = { a: 20, b: 30 };
let o2 = { c: 50, d: 40 };
let o3 = { ...o1, ...o2, m: 800 };
console.log("-----------  o3----------->", o3);

// o1 = { ...o1, u: 700 };
// console.log("-----------  o1----------->", o1);