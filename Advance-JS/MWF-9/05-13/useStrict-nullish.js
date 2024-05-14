"use strict";

let a = 200;
console.log("-----------  a----------->", a);

let x = undefined; //  0, null, "", undefined, false

// let y = x || 100; // || opreator not allow //  0, null, "", undefined, false
let y = x ?? 100; // ?? operator not allow // null, undefined
console.log("-----------  y----------->", y);
