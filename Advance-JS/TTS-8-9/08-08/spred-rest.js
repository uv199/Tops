/*

// object
let obj = {
  name: "test",
  age: 12,
  city: { t: "surat" },
};

let no = {
  a: 30,
  b: 60,
};
// ...var-name
let obj1 = { ...obj, ...no };

obj.age = 50;
console.log(" obj:", obj);

console.log("----->", obj1);

obj = { ...obj, age: 99 };
console.log(" obj:", obj);

// array

let arr1 = [1, 2, 3, 4, 5];

// let arr2 = arr1;
let arr2 = [...arr1, 123];

arr1[1] = 80;

console.log(" arr2:", arr2);

let max = Math.max(...arr2);
console.log(" max:", max);
*/

//-------rest-------------------------

/*
let a = [1, 2, 3, 4, 5, 6];

let [m, n, ...o] = a;
console.log(" ~ m, n, ...o:", m, n, o);

function fun(a, b, ...c) {
  console.log("a, b, c-->", a, b, c);
}

fun(1, 2, 3, 4, 5, 6, 7);
 */
// let obj = {
//   a: 20,
//   b: 30,
//   c: 40,
//   d: 50,
// };

// let { a, b, ...x } = obj;
// console.log(" ~ a, b, x:", a, b, x);
