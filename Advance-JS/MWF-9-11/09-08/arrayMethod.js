let arr = [1, 2, 3, 4, 5, 6, 1, 10];
console.log("arr:", arr);
/*

// push(...items) – adds items to the end,
console.log("arr:", arr);
arr.push(12, 13);
console.log("arr:", arr);

// pop() – remove an item from the end,
arr.pop();
console.log("arr:", arr);

// shift() – extracts an item from the beginning,
arr.shift();
console.log("arr:", arr);

// unshift(...items) – adds items to the beginning.
arr.unshift(0, 0.1);
console.log("arr:", arr);

// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
let arr2 = [10, 20, 30];
let arr3 = [100, 200, 300];
let conCatArr = arr.concat(arr2, 1000000, arr3);
console.log("conCatArr:", conCatArr);

// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.

// arr.splice(1, 3);
// arr.splice(1, 3, "One", "two");
// arr.splice(1, 0, "One", "two");
console.log("arr:", arr);

// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.

let sliceArr = arr.slice(0, 3);
console.log("sliceArr:", sliceArr);

console.log("arr:", arr);

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.

let ind = arr.lastIndexOf(1);
// let ind = arr.indexOf(1);
console.log(" ind:", ind);

// includes(value) – returns true if the array has value, otherwise false.
let inclu = arr.includes(15);
console.log("inclu:", inclu);

// findIndex is like find, but returns the index instead of a value.

let ind = arr.findIndex((ele) => {
  console.log(ele);
  return ele > 5;
});
// let ind = arr.findIndex((ele) => ele === 4);
console.log(" ind:", ind);

// forEach(func) – calls func for every element, does not return anything.

arr.forEach((e, i) => {
  console.log("e,i", e, i);
});

// sort(func) – sorts the array in-place, then returns it.

let sortArr = [1, 9, 12, 3, 4, 5, 6, 1];
console.log(" sortArr:", sortArr);
sortArr.sort();
console.log(" sortArr:", sortArr);

// reverse() – reverses the array in-place, then returns it.

arr.reverse();
console.log("arr:", arr);

// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
let str = "string";
let x = Array.isArray(str);
console.log(" x:", x);

let str = arr.toString();
console.log(" str:", typeof str);
console.log(" arr:", arr);
*/
