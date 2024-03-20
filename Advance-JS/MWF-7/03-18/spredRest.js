// ... spred oprator

let arr = [1, 2, 3];
let obj = { a: 20, b: 30 };

console.log(...arr); // console.log(1,2,3);
// console.log(...obj); //console.log(a: 20, b: 30 );

// copy

let arr3 = [10, 20, 30];
let arr2 = [...arr, ...arr3, 1000];
// console.log("-----------  arr2----------->", arr2);

let obj3 = { c: 90 };
let obj2 = { ...obj, ...obj3, d: 900 };
// console.log("-----------  obj2----------->", obj2);

let data = {
  x: 10,
  y: 20,
  z: 30,
  m: 50,
};

let { x, y, ...num } = data;
// console.log("-----------  num----------->", num);
// console.log("-----------  x----------->", x);
// console.log("-----------  y----------->", y);

let numbers = [1, 2, 3, 4, 5, 6, 7];
let [j, k, ...l] = numbers;
console.log("-----------  l----------->", l);
console.log("-----------  k----------->", k);
console.log("-----------  j----------->", j);
