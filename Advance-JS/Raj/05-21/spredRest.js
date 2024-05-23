/*

// ...

//  rest

let user = {
  name: "Raj",
  age: 25,
  city: "Bangalore",
  pincode: 395007,
  a: 2000,
};

let { name, age, ...address } = user;
// let { name, ...address,age } = user; // give error
console.log("🚀 ~ age:", age);
console.log("🚀 ~ name:", name);

// let address = {
//   city: user.city,
//   pincode: user.pincode,
// };

console.log("🚀 ~ address:", address);

let arr = [1, 2, 3, 4, 5];

let [a, b, ...c] = arr;
console.log("🚀 ~ a:", a);
console.log("🚀 ~ b:", b);
console.log("🚀 ~ c:", c);

*/

let obj = {
  name: "Raj",
  age: 25,
  city: "Bangalore",
  pincode: 395007,
};

// let obj2 = {
//   ...obj,
//   number: 7575083084,
// };

let obj2 = {
    ...obj,
    name: "urvish",
    state: "gujarat",
};
console.log("🚀 ~ obj2:", obj2);

let arr = [1, 2, 3, 4];

let arr2 = [1000, 4, ...arr];
console.log("🚀 ~ arr2:", arr2);

let arr3 = arr;
arr[0] = 999;
console.log("🚀 ~ arr3:", arr3);

let x = "urvish";
let x2 = x;
x = "hello world";
console.log("🚀 ~ x2:", x2);

// json
// shaloow copy vs deep copy
// date object method
