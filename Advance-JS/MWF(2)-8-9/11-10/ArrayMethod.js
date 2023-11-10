let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("arr", arr);

/*

// forEach(func) – calls func for every element, does not return anything.
arr.forEach((e, i) => {
  console.log("e", e);
  e + 10;
  // arr[i] = e+10s
});
console.log("arr", arr);


// map(func) – creates a new array from results of calling func for every element.
let newArr = arr.map((e) => {
  return e + 10;
});
console.log("arr", arr);
console.log("newArr", newArr);


// split/join – convert a string to array and back.
let joinStr = arr.join("---");
let joinStr2 = arr.toString();
console.log("joinStr2", joinStr2);
console.log("joinStr", typeof joinStr, joinStr);

let str = "Urvish v Patel";
// let splitStr = str.split("v");
let splitStr = str.split("");
console.log("splitStr", splitStr);

let point1 = str.split("");
let point2 = point1.reverse();
let point3 = point2.join("");
console.log("point3", point3);


// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

let arr2 = [10, 20, 30, 40, 50];
console.log("arr2", arr2);
let total = arr2.reduce((lastReturnValue, e, i) => {
  console.log("e-->", e, "i-->", i);
  console.log("lastReturnValue", lastReturnValue);
  console.log("-----------------------------");
  return lastReturnValue + e;
}, 1000);
console.log("total", total);

*/

// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.

console.log("Array.isArray([])", Array.isArray(arr));
console.log("Array.isArray([])", Array.isArray({}));
