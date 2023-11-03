/*

// ceil()	It returns a smallest integer value, greater than or equal to the given number
console.log("ceil()---->", Math.ceil(12.000));
console.log("ceil()---->", Math.ceil(12.000));

// floor()	It returns largest integer value, lower than or equal to the given number.
console.log("floor()---->", Math.floor(12.000));
console.log("floor()---->", Math.floor(12.1234));

// round()	It returns closest integer value of the given number.
console.log("round()---->", Math.round(12.54));
console.log("round()---->", Math.round(12.42));

// max()	It returns maximum value of the given numbers.
let max =  Math.max(12.12, 12, 2, 3, 4)
console.log("max", max)
// console.log("max()---->", Math.max(12.12, 12, 2, 3, 4));

// min()	It returns minimum value of the given numbers.
console.log("min()---->", Math.min(12.12, 0.8, 12, 2, 3, 4));

// trunc()	It returns an integer part of the given number.
console.log("trunc()---->", Math.trunc(12.99));

*/

let obj = {
  a: 1000,
  b: 5000,
  20: "test",
  "first name": "urvish",
};

let obj2 = {};

// obj2.a=obj.a
// obj2.b=obj.b

// console.log("------>", obj[20]);
// console.log("------>", obj["a"]);
// console.log("------>", obj["first name"]);

for (const key in obj) {
  //   console.log("key", typeof key, key);
  obj2[key] = obj[key];
  console.log("---value--->", obj[key]);
  // 1.obj["20"]
  // 2.obj["a"]
  // 3.obj["b"]
  // 4.obj.["first name"]
}

console.log("----=-=-=-=-=->", obj2);

// obj2=obj
