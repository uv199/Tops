let arr = [1, 2, 3, 4, 5, 6];
console.log("--------arr-------->", arr);

/*
// arr.push(...items) – adds items to the end,
arr.push(7, 8, 0);
console.log("-----------  arr----------->", arr);
*/

/*
// arr.pop() – extracts an item from the end,
arr.pop()
console.log("-----------  arr----------->", arr)
*/

/*
// arr.shift() – extracts an item from the beginning,
arr.shift()
console.log("-----------  arr----------->", arr)
*/

/*
// arr.unshift(...items) – adds items to the beginning.
arr.unshift(0,1.5)
console.log("-----------  arr----------->", arr)
*/

/*
// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
let arr2 = [7, 8, 9];
let arr3 = arr.concat(arr2,10);
console.log("-----------  arr3----------->", arr3)
*/

/*
// reverse() – reverses the array in-place, then returns it.
let reverseArr = arr.reverse()
console.log("-----------  reverseArr----------->", reverseArr)
*/

/*
// sort(func) – sorts the array in-place, then returns it.
let arr2 = [1, 4, 2, 56, 3, 6, 44, 8, 5];
console.log("-----------  arr2----------->", arr2)
arr2.sort()
console.log("-----------  arr2----------->", arr2)
*/

/*
// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.

// let peace = arr.slice(2,4)
let peace = arr.slice(2,-1)
console.log("-----------  peace----------->", peace)
*/

/*
// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.

// arr.splice(2, 3); // delete
// arr.splice(2, 3, 30, 40, 50, 55); // update
arr.splice(2, 0, 2.5); // add

console.log("-----------  arr----------->", arr);
*/

/*
// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, and return the index or -1 if not found.

let arr2 = [{ age: 20 }, { age: 30 }, { age: 40 }];

// let index = arr.indexOf(30);
let index = arr.indexOf({ age: 30 });
console.log("-----------  index----------->", index);
*/

/*
// includes(value) – returns true if the array has value, otherwise false.

let ans = arr.includes(30)
console.log("-----------  ans----------->", ans)
*/

/*
// findIndex is like find, but returns the index instead of a value.
let arr2 = [{ age: 20 }, { age: 30 }, { age: 40 }];

let index = arr2.findIndex((ele) => {
  console.log("-----------  ele----------->", ele);
  // return condition
  return ele.age === 300;
});
console.log("-----------  index----------->", index)

let arr3 = [2, 4, 1, 5, 67, 8, 23, 45];

// arr3.indexOf(18.1)

let index2=arr3.findIndex((e) => {
  console.log("-----------  e----------->", e);
  return e > 18;
});
console.log("-----------  index2----------->", index2)
*/

//  arr.some()

/*
// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.

let isArray = Array.isArray([50])
// let isArray = Array.isArray(50)
console.log("-----------  isArray----------->", isArray)
*/

/*
// forEach(func) – calls func for every element, does not return anything.

arr.forEach((e, i) => {
  console.log("-----------  e,i----------->", e, i);
});
console.log("-----------  arr----------->", arr)

*/

/*
// map(func) – creates a new array from results of calling func for every element.
let newArr = arr.map((e) => {
  if (e % 2 === 0) {
    return e + 10;
  } else {
    return e + 100;
  }
});
console.log("-----------  newArr----------->", newArr);
*/

/*
// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.


let total = arr.reduce((LRV, e) => {
  console.log("-----------  LRV,e----------->", LRV, e);
  return LRV + e;
});
console.log("-----------  total----------->", total)
*/

/*
// join – convert a array into string
let str = arr.join("--")
let str2 = arr.toString("--")
console.log("-----------  str2----------->", str2)
console.log("-----------  str----------->", str)

*/

/*
find/filter(func) – filter elements through the function, return first/all values that make it return true.
 */

/*
let ele = arr.find((e) => {
  console.log("-----------  e----------->", e);
  return e > 3;
});
console.log("-----------  ele----------->", ele);
*/

let eleArr = arr.filter((e) => {
  console.log("-----------  e----------->", e);
  return e > 30;
});
console.log("-----------  eleArr----------->", eleArr)
