let arr = [1, 2, 3, 4, 5];
console.log("-----------  arr----------->", arr);
/*
// push(...items) – adds items to the end,
// arr.push(6);
arr.push(7, 8, 9);
console.log("-----------  arr----------->", arr);


// pop() – extracts an item from the end,
arr.pop()
console.log("-----------  arr----------->", arr)


// shift() – extracts an item from the beginning,
arr.shift();
console.log("-----------  arr----------->", arr)


// unshift(...items) – adds items to the beginning.
arr.unshift(-1, 0);
console.log("-----------  arr----------->", arr)


// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

let arr2 = [6, 7, 8, 9];
let arr3 = [10, 11];
let concatArr = arr.concat(arr2, arr3);
console.log("-----------  concatArr----------->", concatArr);


// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
let arr2 = [1, 2, 3, 4, 1, 5];
let index = arr2.indexOf(10,3);
// let index = arr2.lastIndexOf(1);
console.log("-----------  index----------->", index);


// findIndex is like find, but returns the index instead of a value.

let arr2 = [1, 2, 3, 4, 1, 5];
// const index = arr2.findIndex((ele, index) => {
    //   console.log("index", index);
    //   console.log("ele", ele);
    //   return 2 < ele;
    // });
    const index = arr2.findIndex((e, i) => 2 < e);
    console.log("-----------  index----------->", index);
    
    
// includes(value) – returns true if the array has value, otherwise false.
   
let isAvailable = arr.includes(1);
console.log("-----------  isAvailable----------->", isAvailable)
    
// let isAvailable = arr.some((e, i) => e > 2);
let isAvailable = arr.some((e, i) => e > 20);
console.log("-----------  isAvailable----------->", isAvailable);


// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
let sliceArr = arr.slice(0, -3);
// let sliceArr = arr.slice(0, 3);
console.log("-----------  sliceArr----------->", sliceArr);
*/

// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// arr.splice(2, 4); // remove
// arr.splice(2, 2, 10); // remove + add
arr.splice(2, 0, 10); // add
console.log("-----------  arr----------->", arr);

// 1 2 3 4 5 6 7 8 9
