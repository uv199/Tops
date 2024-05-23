let user = {
  name: "Raj",
  age: 25,
  address: "Bangalore",
};

let car = {
  name: "Raj",
  power: 25,
  origine: "Bangalore",
};

/*
let keyArr = [];
for (const key in car) {
  keyArr.push(key);
}
console.log("🚀 ~ keyArr:", keyArr);
*/

let keys = Object.keys(car);
// console.log("🚀 ~ keys:", keys);

let value = Object.values(car);
// console.log("🚀 ~ value:", value);

let entries = Object.entries(car);
// console.log("🚀 ~ entries:", entries);

let arr = [1, 2, 3, 4, 5, 6];

// let arrayKeys = Object.keys(arr)
console.log("🚀 ~ arrayKeys:", arrayKeys)

let arrayKeys = Object.entries(arr)