let obj = {
  name: "uv",
  age: 25,
};

// console.log("obj:", obj);
// let obj2 = obj;
// obj.name = "urvish";
// console.log("obj2:", obj2);

//  ... sperad

let obj2 = { ...obj };
obj.name = "urvish";
console.log("obj2:", obj2);
console.log("obj1:", obj);

// array---------------------------->

// let arr = [1, 2, 3];
// // let arr2 = arr;
// let arr2 = [...arr];
// console.log(" arr2:", arr2);

// arr[1] = 100;
// console.log(" arr:", arr);
// console.log(" arr2:", arr2);

let arr = [1, 2, 3, 49];
// ...arr => 1,2,3,39
let max = Math.max(...arr);
console.log("🚀 ~ file: copy-Ref.js:32 ~ max:", max);

//

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];

let a3 = [...a1, ...a2, 200];
console.log("🚀 ~ file: copy-Ref.js:40 ~ a3:", a3);

let o1 = {
  name: "urvish",
};
let o2 = {
  age: 25,
};
// o2 = { ...o2, fees: 5000 };

let o3 = {
  ...o1,
  ...o2,
  city: "surat",
};

console.log("🚀 ~ file: copy-Ref.js:51 ~ o3:", o3);
