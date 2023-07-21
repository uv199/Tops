let obj = {
  x: 10,
  y: 20,
  z: 40,
};

// let x = obj.x;
// let y = obj.y;
// let z = obj.z;

// let a,b,c = obj

let { y, x, z } = obj;
console.log("🚀 ~ file: destructuring.js:14 ~ x, y:", x, y, z);

let arr = [10, 20, 30];

// let a = a[0];
// let b = b[1];
// let c = c[2];

// let a,b,c = arr

let [a, b, c, d] = arr;
console.log("🚀 ~ file: destructuring.js:25 ~ a, b, c:", a, b, c, d);


