let arr = [1, 2, 3, 4, 5, 6, 1, 10];
console.log("arr:", arr);
/*
// find/filter(func) – filter elements through the function, return first/all values that make it return true.

let findData = arr.find((e) => {
  console.log(" e:", e);
  return e > 4;
});
console.log(" findData:", findData);

let filteData = arr.filter((e) => {
  console.log(" e:", e);
  return e > 4;
});
console.log(" filteData:", filteData);

// map(func) – creates a new array from results of calling func for every element.

let resturnArr = arr.map((e, i) => {
  console.log("---e---", e, i);
  if (e > 4) {
    return e + 2;
  } else {
    return e;
  }
});
console.log("resturnArr:", resturnArr);

// reduce(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
let arr2 = [1, 2, 3, 4, 5];
let total = arr2.reduce((lastReturnVal, e) => {
  console.log(" lastReturnVal, e:", lastReturnVal, e);
  return e + lastReturnVal;
});
console.log("total:", total);


// split/join – convert a string to array and back.

let str = "urvish v patel";

let ars = str.split("");
console.log(" ars:", ars);
let reverse = ars.reverse();
console.log(" reverse:", reverse);
let join = reverse.join("");
console.log(" join:", join);
// let ars = str.split("v");
// console.log(" ars:", ars);

// let join = ars.join("---");
// console.log(" join:", join);
*/
