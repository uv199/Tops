let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
console.log("arr", arr);

/*
// push(...items) – adds items to the end
arr.push(10);
console.log("arr", arr);

// pop() – extracts an item from the end,
arr.pop()
console.log("arr", arr);

// shift() – extracts an item from the beginning,
arr.shift()
console.log("arr", arr);

// unshift(...items) – adds items to the beginning.
arr.unshift("zero")
console.log("arr", arr);

// sort(func) – sorts the array in-place, then returns it.
let sort = [1, 23, 5, 23, 44, 67, 8, 2, 34, 56];
console.log("sort", sort);
sort.sort();
console.log("sort", sort);

// reverse() – reverses the array in-place, then returns it.
arr.reverse()
console.log("arr", arr)


// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

let a1 = [10, 20, 30, 40];
let a2 = [100, 200, 300, 400];
let concatedArr = arr.concat(a1, 1000000, a2);
console.log("concatedArr", concatedArr);


// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
let indexArr = [9, 10, 20, 30, 10, 40, 50];

// let index = indexArr.indexOf(10); // 1
// let index = indexArr.indexOf(10, 2); // 4
// let index = indexArr.indexOf(100); // -1
let index = indexArr.lastIndexOf(10); // 4
console.log("index", index);


// includes(value) – returns true if the array has value, otherwise false.

// let isAvailabel = arr.includes(5); // true
// let isAvailabel = arr.includes(50); // false
let isAvailabel = arr.includes(5, 6); // false - start from 6th index
console.log("isAvailabel", isAvailabel);

// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// let sliceArr = arr.slice(2, 6);
let sliceArr = arr.slice(2, -5);
// let sliceArr = arr.slice(2, 0); // give index proper
console.log("sliceArr", sliceArr);

// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// arr.splice(2, 2);
// arr.splice(2, 2, 20, 30, 40, 50);
// arr.splice(2, 0, 20, 30, 40, 50);
console.log("arr", arr);


// findIndex is like find, but returns the index instead of a value.
let indexArr = [9, 10, 20, 30, 10, 40, 50];
let index = indexArr.findIndex((ele) => {
    console.log("ele", ele);
    return ele > 10;
});

console.log("index", index);

// some is like find, but returns the true/false instead of a value.

// const available = arr.some((e) => e > 100);
const available = arr.some((e) => e > 5);
console.log("available", available);

// find/filter(func) – filter elements through the function, return first/all values that make it return true.

// let x = arr.find((e) => e > 5); //6 // its return value
// let x = arr.find((e) => e > 50); //undefined // its return value
let x = arr.find((e) => {
    console.log("e", e);
    return e === 5;
});
console.log("x", x);
*/
let filteredData = arr.filter((e) => {
  console.log("e", e);
  return e > 5;
});
console.log("filteredData", filteredData);

// forEach(func) – calls func for every element, does not return anything.

// map(func) – creates a new array from results of calling func for every element.

// split/join – convert a string to array and back.

// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
