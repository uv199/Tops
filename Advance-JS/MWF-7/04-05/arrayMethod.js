let arr = [1, 2, 3, 4, 5, 6, 7];
console.log("-----------  arr----------->", arr);

/*

// concat()	It returns a new array object that contains two or more merged arrays.
let arr2 = [10, 20, 30];
let arr3 = arr.concat(arr2, 40, 50);
console.log("-----------  arr3----------->", arr3);


// push(...items) – adds items to the end,
arr.push(10, 20);
console.log("-----------  arr----------->", arr);

// pop() – extracts an item from the end,
arr.pop();
console.log("-----------  arr----------->", arr);

// shift() – extracts an item from the beginning,
arr.shift()
console.log("-----------  arr----------->", arr)

// unshift(...items) – adds items to the beginning.
arr.unshift(-1,0)
console.log("-----------  arr----------->", arr)


// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.

// let sliceArr = arr.slice(0, 4);
let sliceArr = arr.slice(0, -4);
console.log("-----------  sliceArr----------->", sliceArr)

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.

// let index = arr.indexOf(5);
// let index = arr.indexOf(50);
// console.log("-----------  index----------->", index)
let index2 = arr.findIndex((e) => {
  return e > 5;
});
console.log("-----------  index2----------->", index2);

let arr2 = [{ a: 10 }, { a: 20 }, { a: 30 }];
let index = arr2.findIndex((ele, index) => {
  return ele.a === 50;
});
// console.log("-----------  index----------->", index);

// includes(value) – returns true if the array has value, otherwise false.

let available = arr.includes(10);
console.log("-----------  available----------->", available)

// some
let arr2 = [{ a: 10 }, { a: 20 }, { a: 30 }];

let available = arr2.some((e) => {
    return e.a === 200;
});
console.log("-----------  available----------->", available)


// sort(func) – sorts the array in-place, then returns it.
let arr2 = [1, 22, 3, 45, 2, 6, 32, 7];
arr2.sort();
console.log("-----------  arr----------->", arr2);

// reverse() – reverses the array in-place, then returns it.
arr.reverse()
console.log("-----------  arr----------->", arr)

*/
// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.

// arr.splice(1,2) // delete
// arr.splice(2, 0, 10, 20, 30); // add
arr.splice(1, 2, 20, 30); // update

console.log("-----------  arr----------->", arr);
