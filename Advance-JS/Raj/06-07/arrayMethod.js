let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
// push(...items) – adds items to the end,
// chnage in existing array 
// arr.push(10)
arr.push(10, 20);
console.log("🚀 ~ arr:", arr);

// pop() – extracts an item from the end,
// chnage in existing array 
arr.pop()
arr.pop()
console.log("🚀 ~ arr:", arr)

// shift() – extracts an item from the beginning,
// chnage in existing array
arr.shift();
console.log("🚀 ~ arr:", arr);

// unshift(...items) – adds items to the beginning.
// chnage in existing array
arr.unshift(0, 1.5);
console.log("🚀 ~ arr:", arr)

// sort(func) – sorts the array in-place, then returns it.
// chnage in existing array
let arr2 = [1, 5, 3, 2, 5, 22, 3, 7, 33, 4, 55];
arr2.sort();
console.log("🚀 ~ arr2:", arr2);


// reverse() – reverses the array in-place, then returns it.
// chnage in existing array
arr.reverse();
console.log("🚀 ~ arr:", arr)


// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// return new array

let sliceArr = arr.slice(1,3)
console.log("🚀 ~ sliceArr:", sliceArr)

// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// chnage in existing array
// arr.splice(1,2) // only remove like delete
// arr.splice(1, 0, 1.5,1.6); // only add like create
arr.splice(1, 2, 20, 30); // both add and remove like update

console.log("🚀 ~ arr:", arr);


// [1,2,3,4,5,6]
arr.splice(1, 2); // arr = [1,4,5,6]
let x = arr.slice(3, 4); // arr = [1,4,5,6]
arr.sort(); // arr = [1,4,5,6]

console.log(arr)

// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
// return new array

let arr2 = [11, 12, 13];
// let mergeArr = arr.concat(arr2);
// let mergeArr = arr.concat(arr2, 100);
let mergeArr = arr.concat(arr2, 100, [1, 2]);
console.log("🚀 ~ mergeArr:", mergeArr);


// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, and return the index or -1 if not found.
// return index of item

// TODO if i have a condition insted of value then how can i find a index of item which match the condition


let arr2 = [1, 2, 1, 30, 4, 2, 5];
// let index = arr2.indexOf(2);
let index = arr2.indexOf(20);
console.log("🚀 ~ index:", index);

let lastIndex2 = arr2.lastIndexOf(2)
console.log("🚀 ~ lastIndex2:", lastIndex2)

let arrayOfObject = [{ a: 20 }, { a: 30 }, { a: 40 }, { a: 50 }];
//  a = 50
// TODO i want to find an index of an element which have an object whose A key have a value 50
let index2 = arrayOfObject.indexOf({ a: 50 });
console.log("🚀 ~ index2:", index2)


// includes(value) – returns true if the array has value, otherwise false.
let available = arr.includes(2);
console.log("🚀 ~ available:", available);

let arrayOfObject = [{ a: 20 }, { a: 30 }, { a: 40 }, { a: 50 }];
//  a = 50
let available2 = arrayOfObject.includes({ a: 50 });
// TODO if there is any object have a key and that keys have 50 value then i want ans true and if not give and ans false
console.log("🚀 ~ available2:", available2);

*/


// task-1 find a 2nd max number from array not use array method 
// task-2 do sum of all array elements
// task-2 give average or element
// task-4 find number is armstrong number or not (not use browser)
// task-5 do  5 easy and 5 mediam task from edabit https://edabit.com/challenges