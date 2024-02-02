let obj1 = { name: "urvish", age: 23 };

// ... spred

// copy
let obj2 = { ...obj1, city: "surat" };
let obj3 = { email: "uv@gmail.com" };
let obj4 = { ...obj1, ...obj3 };
console.log("-----------  obj4----------->", obj4);
// console.log("-----------  obj2----------->", obj2);

// arr

let a1 = [1, 2, 3, 4];
let a3 = [5, 6, 7, 8];
let a2 = [...a1, ...a3, 9, 10];
console.log("-----------  a2----------->", a2);

//
let total = Math.max(...a3);
console.log("-----------  total----------->", total);
