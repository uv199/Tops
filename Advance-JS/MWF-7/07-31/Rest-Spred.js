/*
let arr = [1, 2, 3, 4, 5, 6, 3, 4, 5];

let [a, b, ...c] = arr;
console.log("-----------  a----------->", a);
console.log("-----------  b----------->", b);
console.log("-----------  c----------->", c);

*/

/*
let arr = [1, 2, 3];

console.log(...arr);
console.log(1, 2, 3);

// copy

let arr3 = [6, 7];
let arr2 = [...arr, 4, 5, ...arr3, ...arr];
// let arr2 = arr;
// arr[0] = 100;
console.log("-----------  arr----------->", arr);
console.log("-----------  arr2----------->", arr2);


*/
let obj = {
  name: "urvish",
  age: 23,
  pincode: 20,
};

// console.log(...obj);

let obj2 = { ...obj, pincode: 30 };
console.log("-----------  obj2----------->", obj2);
