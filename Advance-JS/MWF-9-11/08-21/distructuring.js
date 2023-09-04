/*let obj = {
  name: "test",
  age: 25,
  vehicale: { test: "val" },
};
// let { name, age, vehicale } = obj;
let { age, name } = obj;
console.log(" name,age:", name, age);

let arr = [1, 2, 3, 4, 5];

let [b, a, c] = arr;
console.log(" a, b, c:", a, b, c);
function test(params) {
    return { name: "urvish", age: 60 };
}

let { name, age } = test();
console.log("--->", name, age);

// ----rest------
let obj = {
    name: "urvish",
    age: 25,
    obj: { test: "val" },
};

let { name, ...test } = obj;
console.log("name,", name);
console.log("~ test:", test);

let ar = [1, 2, 3, 4, 5, 6];
let [a, b, ...c] = ar;
console.log("🚀 ~ file: distructuring.js:35 ~ a, b, c:", a, b, c);

*/
function fun(a, b, ...c) {
  console.log("--a", a);
  console.log("--b", b);
  console.log("--c", c);
}
fun(1, 2, 3, 4, 5, 6, 7);
