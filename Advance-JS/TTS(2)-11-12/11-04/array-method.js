let ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("ARR", ARR);
/*
// arr.push(...items) – adds items to the end,
ARR.push(15);
console.log("ARR", ARR);

// arr.pop() – extracts an item from the end,
ARR.pop();
console.log("ARR", ARR);


// arr.shift() – extracts an item from the beginning,
ARR.shift();
console.log("ARR", ARR);

// arr.unshift(...items) – adds items to the beginning.
ARR.unshift(0)
console.log("ARR", ARR);


// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.

// let sliceArr = ARR.slice(2, 6); // [ 3, 4, 5, 6 ]
let sliceArr = ARR.slice(2, -1); //  [ 3, 4, 5, 6, 7, 8 ]
console.log("sliceArr", sliceArr);


// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.

ARR.splice(0, 3);
// ARR.splice(0, 3, 999, 1000, 1001, 1002);
// ARR.splice(2, 0, "hello");
console.log("ARR", ARR);


// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

let a1 = [10, 20];
let a2 = [100, 200];
let a4 = [1000, 2000];
// let a3 = a1.concat(a2); // [10,  20, 100, 200]
// let a3 = a1.concat(a2, a4); //  [ 10, 20, 100, 200, 1000, 2000 ]
let a3 = a1.concat(a2, a4, 99999); //  [ 10, 20, 100, 200, 1000, 2000, 9999 ]
console.log("a3", a3);


// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
let indexArr = [1, 2, 3, 4, 5, 1, 6, 7, 8, 9];
// let index = indexArr.indexOf(6); // 5
// let index = indexArr.indexOf(60); // -1
// let index = indexArr.indexOf(1); // 0
let index = indexArr.lastIndexOf(1); // 5
console.log("index", index);


// includes(value) – returns true if the array has value, otherwise false.
// let avilable = ARR.includes(60); // false
let avilable = ARR.includes(6); // true
console.log("avilable", avilable);


// reverse() – reverses the array in-place, then returns it.
ARR.reverse();
console.log("ARR", ARR);


// sort(func) – sorts the array in-place, then returns it.

let sortArr = [1, 2, 3, 88, 34, 5, 66, 7, 12, 8, 50, 9];

sortArr.sort();

console.log("sortArr", sortArr);

*/

