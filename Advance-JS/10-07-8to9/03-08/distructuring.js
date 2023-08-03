let obj = {
  a: 20,
  b: 40,
};

// let x = obj.a;
// let y = obj.b;
// object des.. have to give same name as key to variable
let { a, c, B } = obj;
console.log("🚀 ~ file: distructuring.js:10 ~ x, y :", a, B, c);

// array its depends on index

let arr = [10, 20, 30];

// let x1 = arr[0];
// let x2 = arr[1];
// let x3 = arr[2];

let [x1, x3, x2, x4] = arr;
console.log(" x1, x2, x3:", x1, x2, x3, x4);
