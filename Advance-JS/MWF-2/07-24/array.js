let arr = [1, 2, 3, 4, 5];
console.log("-----------  arr----------->", arr);
/*
// push(...items) – adds items to the end,
arr.push(6)
console.log("-----------  arr----------->", arr)

// pop() – extracts an item from the end,
arr.pop()
console.log("-----------  arr----------->", arr)

// shift() – extracts an item from the beginning,
arr.shift()
console.log("-----------  arr----------->", arr)

// unshift(...items) – adds items to the beginning.
// arr.unshift(0)
// arr.unshift(0, 0.5);
console.log("-----------  arr----------->", arr);

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, and return the index or -1 if not found.
let arr2 = [1, 2, 3, 1, 4, 5, null,undefined, { a: 20 }];

// let index = arr2.indexOf(1);
// let indexLast = arr2.lastIndexOf(1);
// console.log("-----------  indexLast----------->", indexLast);
// console.log("-----------  index----------->", index);

// let index = arr2.indexOf({ a: 20 });
let index = arr2.indexOf(undefined);
console.log("-----------  index----------->", index);

// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

let arr2 = [1, 2, 3];
let arr3 = arr.concat(arr2,10);
console.log("-----------  arr3----------->", arr3)

// includes(value) – returns true if the array has value, otherwise false.

let arr2 = [1, 2, 3, { a: 20 }];
// let available = arr.includes(10)
// let available = arr.includes(1);
let available = arr2.includes({ a: 20 });
console.log("-----------  available----------->", available);

// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.

// let subArr = arr.slice(2,-1)
let subArr = arr.slice(2,4)
console.log("-----------  subArr----------->", subArr)


// splice(index, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.

// arr.splice(1, 0, 1.5); // add
// arr.splice(1, 2); // delete
let arr2 = [20, 30];
arr.splice(1, 2, ...arr2); // update
console.log("-----------  arr----------->", arr);

*/
// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
let x = 50;
let ans = Array.isArray(x);
console.log("-----------  ans----------->", ans);

// ************************** end **************************

// find/filter(func) – filter elements through the function, return first/all values that make it return true.

// findIndex is like find, but returns the index instead of a value.

// forEach(func) – calls func for every element, does not return anything.

// map(func) – creates a new array from results of calling func for every element.

// sort(func) – sorts the array in-place, then returns it.

// reverse() – reverses the array in-place, then returns it.

// split/join – convert a string to array and back.

// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

function getOTP(params) {
  let otp = "";
  while (true) {
    let x = Math.trunc(Math.random() * 1000000 + 1).toString();
    if (x.length === 6) {
      otp = x;
      break;
    }
  }
  console.log("-----------  otp----------->", otp);
  return otp;
}
getOTP();
getOTP();
getOTP();
getOTP();
getOTP();
getOTP();
getOTP();
getOTP();
