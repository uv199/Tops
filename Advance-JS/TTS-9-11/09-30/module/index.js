const obj = require("./sum");
console.log("obj", obj);

let total = obj?.sum?.(1000, 777777);
console.log("total", total);

// let total = sum(100, 999999);
// console.log("total", total);
