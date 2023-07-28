let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.length;
// console.log("length:", arr.length);

// to add element in end of arr
// arr.push(10, {}, null);
// console.log("arr:", arr);

// to remove one element in end of arr
// arr.pop();
// console.log("arr:", arr);

// to add element in start of arr
// arr.unshift("12");
// console.log("arr:", arr);

// to remove element in start of arr
// arr.shift();
// console.log("arr:", arr);

//concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

// let arr2 = ["1", "2"];
// let arr3 = ["10", "20"];

// let newArr = arr.concat(arr2, arr3);
// console.log("🚀 ~ newArr:", newArr);

// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.

// let newArr = arr.slice(1, 5);
// console.log("newArr:", newArr);

// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.

// arr.splice(1, 2, 50, {});
// arr.splice(1, 0, 50, {});
// arr.splice(1, 3);
// console.log(" arr:", arr);

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.

// let arr2 = [1, 2, 3, 1, 5, 6, 7, 8, 9];

// let index = arr2.indexOf(1, 2);
// console.log("~ index :", index);

// let index = arr2.lastIndexOf(1);
// console.log("~ index :", index);

// includes(value) – returns true if the array has value, otherwise false.

// let avl = arr.includes("9");
// console.log(" ~ avl:", avl);

// findIndex is like find, but returns the index instead of a value.
// let a = arr.findIndex((e) => e > 7);
// console.log(" a :", a);

//
arr.reverse();
console.log(" ~ arr:", arr);

// sort(func) – sorts the array in-place, then returns it.
let arr2 = [1, 12, 3, 11, 5, 6, 7, 8, 9];
arr2.sort((a, b) => b - a);

// arr2.sort();
console.log("arr2:", arr2);
