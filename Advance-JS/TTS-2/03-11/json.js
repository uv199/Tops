let obj = {
  name: "urvish",
  age: 23,
  addess: {
    city: "surat",
    pin: 395007,
  },
};
// console.log("-----------  obj----------->", obj);

let jsonData = JSON.stringify(obj);
// console.log("-----------  jsonData----------->", jsonData);

let normalData = JSON.parse(jsonData);
// console.log("-----------  normalData----------->", normalData);

let obj1 = {
  a: 20,
  b: 30,
  c: {
    c1: 200,
    c2: 700,
  },
};
// let JData = JSON.stringify(obj1);
// let obj2 = JSON.parse(JData);
let obj2 = JSON.parse(JSON.stringify(obj1));
// let obj2 = { ...obj1 };
obj1.a = 200;
obj1.c.c1 = 90000;

console.log("-----------  obj1----------->", obj1);
console.log("-----------  obj2----------->", obj2);
