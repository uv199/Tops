// let a = 10;
// let b = a;
// a = 20;
// console.log("🚀 ~ file: object_copy.js:3 ~ b:", b);

let obj1 = {
  x: 10,
  y: 20,
};

// let obj2 = obj1;
// let obj2 = {};
// for (const key in obj1) {
//   console.log(" key:", key);
//   obj2[key] = obj1[key];
// }

let obj2 = { ...obj1, test: 80 };

obj1.x = 50;

console.log("🚀 ~ file: object_copy.js:12 ~ obj2:", obj2);

// ------------------------------------------------------------------------------------------
let arr = [1, 2, 3, 4];
let arr1 = [1, 2, 3, 4];
// let arr2 = arr1;
let arr2 = [...arr1, ...arr, 50];

arr1[0] = 100;

console.log("🚀 ~ file: object_copy.js:27 ~ arr2:", arr2);

let max = Math.max(...arr);
console.log("🚀 ~ file: object_copy.js:35 ~ max:", max);
