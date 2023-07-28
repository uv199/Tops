let a = 10;
let b = 20;
let result = a ?? b;
console.log("result :", result);

let x = a && b;
console.log("x :", x);

let arr = [];
console.log("Array.isArray(arr); :", Array.isArray(true)); //--->return false
console.log("Array.isArray(arr); :", Array.isArray(arr)); //--->return true
