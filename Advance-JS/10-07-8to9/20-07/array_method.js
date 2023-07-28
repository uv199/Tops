let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// find/filter(func) – filter elements through the function, return first/all values that make it return true.
// let a = arr.find((e) => {
//   console.log(" e:", e);
//   return e > 5;
// });
// console.log(" a:", a);

// let filterData = arr.filter((e) => {
//   console.log(" e:", e);
//   return e % 2 === 0;
// });
// console.log("filterData:", filterData);

// foreach

// arr.forEach((e) => {
//   console.log(e + 2);
// });

// map(func) – creates a new array from results of calling func for every element.
// let newArr = arr.map((e,i) => {
//   return e + 2;
// });
// console.log("newArr:", newArr);

// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
// let arr2 = [1, 2, 3, 4, 5];
// let total = arr2.reduce((lastReturnValue, e) => {
//   console.log("lastReturnValue:", lastReturnValue, "e:", e);
//   return lastReturnValue + e;
// });
// console.log(" total:", total);

// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
console.log("------>", Array.isArray([]));

// join – convert a string to array and back.

let str = arr.join("--");
let str1 = arr.toString();
console.log("str:", str);
console.log("str1:", str1);

// how to check array are same or not

console.log([1, 2] == [1, 2]);

let x = 0 || null || undefined || false;

console.log("!x:", !x); // its give true
console.log("x:", x); // its give false

let A = [];
let Obj = {};
if (arr.length > 0) {
}
if (Obj) {
}
