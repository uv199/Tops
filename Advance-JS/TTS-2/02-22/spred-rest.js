// ... =>rest

let obj = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};

// copy + add
let obj2 = { ...obj, name: "urvish" };
// console.log("-----------  obj2----------->", obj2);
let { a, b, ...c } = obj;
// console.log("-----------  c----------->", c);
// console.log("-----------  a, b ----------->", a, b);

let arr = [1, 2, 3, 4, 5];

let [y, x, ...z] = arr;
// console.log("-----------  z----------->", z);
// console.log("-----------  y, x----------->", y, x);

// ... =>spread

console.log(...arr);

// copy
let arr1 = [...arr, 10];
// console.log("-----------  arr1----------->", arr1);

let maxVal = Math.max(...arr);
// console.log("-----------  maxVal----------->", maxVal);

function printName(p1, p2, p3) {
  console.log("person 1 name is ", p1);
  console.log("person 2 name is ", p2);
  console.log("person 3 name is ", p3);
}

let nameArr = ["Urvish", "Vinita", "disha"];

// printName(nameArr[0], nameArr[1], nameArr[2]);
printName(...nameArr);
console.log("-----------  ...nameArr----------->", ...nameArr)
