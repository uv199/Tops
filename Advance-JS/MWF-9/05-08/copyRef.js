/*
let x = 20;

let y = x;
x=900
console.log("-----------  x----------->", x);
console.log("-----------  y----------->", y);
*/
let obj = { x: 20, y: 30, z: { z1: 200, z2: 300 } };

// let obj2 = obj; // refrence
let obj2 = { ...obj };
obj.x = 200;
console.log("-----------  obj----------->", obj);
console.log("-----------  obj2----------->", obj2);
