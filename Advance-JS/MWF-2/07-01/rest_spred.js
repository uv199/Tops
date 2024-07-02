/*
let arr = [1, 2, 3, 4, 5, 6, 7];

let [a, b, ...c] = arr;
console.log("-----------  a----------->", a);
console.log("-----------  b----------->", b);
console.log("-----------  c----------->", c);


// spred - ...

let arr2 = [1, 2, 3, 4, 5];
let arr4 = [10, 20, 30, 40, 50];
// ...arr2 -> 1, 2, 3, 4, 5

let arr3 = [...arr2, 200, ...arr4];
console.log("-----------  arr3----------->", arr3);
let arr5 = [1, 32, 8, 74, 5, 3, 6, 4];
let max = Math.max(...arr5);
console.log("-----------  max----------->", max);


let obj = { a: 20, b: 30, c: 30 };

let obj3 = { ...obj, a: 900 };
console.log("-----------  obj3----------->", obj3);

*/

let user1 = {
  name: "uv",
  age: 23,
  city: "surat",
};

let user2 = { ...user1, name: "jd", pincode: 395007 };
console.log("-----------  user2----------->", user2);
