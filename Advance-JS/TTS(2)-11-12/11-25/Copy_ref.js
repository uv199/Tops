/*
let x = 10;
let y = x;
console.log("y", y);
x = 100;
console.log("y", y);

let x = { a: 10, b: 20 };
// let y = x;
let y = {...x}
console.log("y", y);
x.a = 100;
console.log("x", x)
console.log("y", y);
*/

let a = [1, 2, 3];
// let b = a;
let b = [...a];
console.log("b", b);
a[0] = 100;
console.log("a", a);
console.log("b", b);
