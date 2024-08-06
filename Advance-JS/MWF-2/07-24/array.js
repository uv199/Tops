let arr = [1, 2, 3, 4, 5, 1, 2];
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

// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
let x = 50;
let ans = Array.isArray(x);
console.log("-----------  ans----------->", ans);

*/
// ************************** end **************************
/*
// sort(func) – sorts the array in-place, then returns it.
let arr2 = [1, 5, 3, 4, 2, 6, 2, 22, 33]; // proper sorting
arr2.sort();
 console.log("-----------  arr2----------->", arr2);

// reverse() – reverses the array in-place, then returns it.
arr2.reverse()
console.log("-----------  arr2----------->", arr2)

// forEach(func) – calls func for every element, does not return anything.
arr.forEach((element, index) => {
  console.log("-----------  element,index----------->", element, index);
});

// find/filter(func) – filter elements through the function, return first/all values that make it return true.

// let find = arr.find((e, i) => {
  //   console.log("-----------  e,i----------->", e, i);
  //   return e >= 3;
  // });
  // console.log("-----------  find----------->", find);
  
  let filter = arr.filter((e, i) => {
    console.log("-----------  e,i----------->", e, i);
    return e >= 3;
  });
  console.log("-----------  filter----------->", filter);
  
  // findIndex is like find, but returns the index instead of a value.
  
  // let index = arr.findIndex((e, i) => {
    //   console.log("-----------  e, i----------->", e, i)
    //   return e >= 30;
    // });
    // console.log("-----------  index----------->", index)
    
    let arrObj = [
      { name: "sunita", age: 10 },
      { name: "ravi", age: 23 },
      { name: "manoj", age: 16 },
      { name: "mohini", age: 26 },
    ];
    
    let index = arrObj.findIndex((e, i) => {
      console.log(e);
      return e.name === "mohini";
    });
    console.log("-----------  index----------->", index)
    */

// arrObj.some((e, i) => {});

/*
// map(func) – creates a new array from results of calling func for every element.

let newArr = arr.map((e, i) => {
  return e + 10;
});
console.log("-----------  newArr----------->", newArr);

arr.map((e) => {
  console.log("-----------  e----------->", e);
});
*/

/*
let arrObj = [
  { name: "sunita", age: 10 },
  { name: "ravi", age: 23 },
  { name: "manoj", age: 16 },
  { name: "mohini", age: 26 },
];

let names = ["sunita", "ravi", "manoj", "mohini"];

// i want
let ans = [
  { name: "sunita" },
  { name: "ravi" },
  { name: "manoj" },
  { name: "mohini" },
];

let nameArr = arrObj.map((e) => {
  return e.name;
});
console.log("-----------  nameArr----------->", nameArr);

*/

/*
// split/join – convert a string to array and back.

let joinStr = arr.join("---");
console.log("-----------  joinStr----------->", joinStr);
let toString = arr.toString("-0");
console.log("-----------  toString----------->", toString);

let name = "urvish"; // => "hsivru"

// "urvish v patel" -> "patel v urvish"
// "urvish v patel" -> "urvish_v_patel"
// "urvish v patel"/3 -> "urVisH v paTel"

// str->array->reverse->string

let step1 = name.split("");
console.log("-----------  step1----------->", step1);
let step2 = step1.reverse();
console.log("-----------  step2----------->", step2)
let step3 = step2.join("")
console.log("-----------  step3----------->", step3)

let reverseString = name.split("").reverse().join("").toUpperCase()
console.log("-----------  reverseString----------->", reverseString)

*/

// reduce(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

let reduceArr = [1, 2, 3, 4];
console.log("-----------  reduceArr----------->", reduceArr);
let lastTimeReturn = reduceArr.reduce((LRV, e, i) => {
  console.log("-----------  LRV,e,i----------->", LRV, e);
  return LRV + e;
});
console.log("-----------  lastTimeReturn----------->", lastTimeReturn);

let sum = 0;
reduceArr.map((e) => {
  sum += e;
});
console.log("-----------  sum----------->", sum)

/*
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
*/
