let x = 20;
let y = x;
x = 50;
// console.log("-----------  x----------->", x);
// console.log("-----------  y----------->", y);

// let obj1 = {
//   a: 20,
//   b: 30,
// };
let obj1 = {
  a: 20,
  b: { b1: 30, b2: 40 },
};

// let obj2 = obj1;
let obj2 = { ...obj1 };
obj1.a = 2000;
obj1.b.b1 = 3000;

// console.log("-----------  obj1----------->", obj1);
// console.log("-----------  obj2----------->", obj2);

let arr1 = [1, 2, 3, 4];
// let arr2 = arr1;
let arr2 = [...arr1];
arr1[0] = 100;

console.log("-----------  arr1----------->", arr1);
console.log("-----------  arr2----------->", arr2);
