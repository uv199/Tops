let ARR = [1, 2, 3, 4, 5, 6];
console.log("ARR", ARR);

/*

// forEach(func) – calls func for every element, does not return anything.

ARR.forEach((ele, index) => {
  console.log("index", index);
  console.log("e--->", ele);
});

ARR.forEach(function (ele, index) {
    console.log("index", index);
    console.log("e--->", ele);
});


// find/filter(func) – filter elements through the function, return first/all values that make it return true

let x = ARR.find((e, i) => {
    console.log("e", e);
    return i === 5;
});
console.log("x", x);


// let x = ARR.filter((e) => e > 5);
let x = ARR.filter((e) => {
    console.log("e", e);
    return e > 5;
});
console.log("x", x);


// findIndex is like find, but returns the index instead of a value.

let index = ARR.findIndex((e) => {
    return e == 5;
});
console.log("index", index);


// map(func) – creates a new array from results of calling func for every element.

let total = 0;
let newArr = ARR.map((e) => {
    // total = total+e
    return  e + 10;
});
console.log("total", total);
console.log("newArr", newArr);

*/

let total = ARR.reduce((lastReturnValue, e) => {
  console.log("lastReturnValue", lastReturnValue);
  console.log("e", e);
  return lastReturnValue + e;
}, 100);

console.log("total", total);
