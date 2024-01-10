let arr = [1, 2, 3, 4, 5, 1, 2, 30];
console.log("-----------  arr----------->", arr);

/*
let nameArr = ["uv","nayan","rajni","sid"]
 add "manoj" in end => push
 add "ashok" in start => unshift
 remove uv => shift
 remove sid and rajni => 2 time pop // splice
 remove nayan => splice
 add "sanju" after rajni => splice
 replace nayan and rajni with NAYAN and RAJNI => splice
 join ["hari","ram"] with our array => concat
 want sub array of ["rajni","sid"] => slice 
*/

/*
// push(...items) – adds items to the end,
let x = 6;
arr.push(1, 2, 3, 4);
// arr.push(x);
console.log("-----------  arr----------->", arr);

// pop() – remove an item from the end,
arr.pop();
console.log("-----------  arr----------->", arr);

// shift() – remove an item from the beginning,
arr.shift();
console.log("-----------  arr----------->", arr);

// unshift(...items) – adds items to the beginning.
arr.unshift(0.9, 0);
console.log("-----------  arr----------->", arr);

// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

let arr2 = [6, 7, 8, 9];
let arr3 = [10, 11];
// let meargeArr = arr.concat(arr2);
let meargeArr = arr.concat(arr2, arr3, 90);
console.log("-----------  meargeArr----------->", meargeArr);


// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// let sliceArr = arr.slice(1, 3);
let sliceArr = arr.slice(1, -1);
console.log("-----------  sliceArr----------->", sliceArr);

// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.

// arr.splice(start,count,newthings)
// arr.splice(1, 3); // remove
// arr.splice(1, 0, 1.5); // add
arr.splice(1, 3, 20, 30, 40); // remove and add
console.log("-----------  arr----------->", arr);

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.

// let i = arr.indexOf(100); // -1
// let i = arr.indexOf(1); // 0
// let i = arr.indexOf(1,2); // 5
// let i = arr.lastIndexOf(1); // 5
// let i = arr.lastIndexOf(1, 4); // 0


// includes(value) – returns true if the array has value, otherwise false.

// let available = arr.includes("rajni") // false
let available = arr.includes(1); // true
console.log("-----------  available----------->", available);

// find/filter(func) – filter elements through the function, return first/all values that make it return true.

let value = arr.find((ele, index) => {
    console.log("ele", index, "->", ele);
    return ele > 3;
});

// if match give match ele
// if not match give undefined
console.log("-----------  value----------->", value);

let data = arr.filter((e, i) => {
    console.log("ele", i, "->", e);
    return e > 30;
});

// if match give match eles array
// if not match give []
console.log("-----------  data----------->", data)


// forEach(func) – calls func for every element, does not return anything.
arr.forEach((e) => console.log("e", e));


// sort(func) – sorts the array in-place, then returns it.
arr.sort();
console.log("-----------  arr----------->", arr);

// reverse() – reverses the array in-place, then returns it.

arr.reverse();
console.log("-----------  arr----------->", arr)

// join – convert a string to array and back.

// let str = arr.join("--");
let str = arr.join(" ");
let tostr = arr.toString();
console.log("-----------  tostr----------->", tostr)
console.log("-----------  str----------->", str);


// map(func) – creates a new array from returning element.
let newArr = arr.map((e) => e + 5);
console.log("-----------  newArr----------->", newArr);


//  LRV = last return value
let total = [1, 2, 3, 4].reduce((LRV, e, i) => {
    //   console.log("LRV = ", LRV, "ele = ", e, "index = ", i);
    console.log("LRV = ", LRV, "ele = ", e, "return = ", e + LRV);
    return e + LRV;
});
console.log("-----------  total----------->", total);

*/
