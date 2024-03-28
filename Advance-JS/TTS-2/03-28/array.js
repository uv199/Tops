/*
let arr = [1, 2, 3, 4, 5, 1, 2];

console.log("-----------  arr----------->", arr);


// findIndex is like find, but returns the index instead of a value.

// let index = arr.indexOf(5);
let index = arr.findIndex((ele, i) => {
    console.log("-----------  e,i----------->", ele, i);
    return ele > 4;
});
// let index = arr.findIndex((e) => e > 4);

console.log("-----------  index----------->", index);
//


// some  find by condition
let available = arr.some((e) => e > 40);
console.log("-----------  available----------->", available);

// find/filter(func) – filter elements through the function, return first/all values that make it return true.

// let data = arr.find((e, i) => {
    //   console.log("-----------  e----------->", e, i);
    //   return e > 4;
    // });
    // console.log("-----------  data----------->", data);
    
    let dataArr = arr.filter((e, i) => {
        console.log("-----------  e----------->", e, i);
        return e % 2 === 0;
    });
    console.log("-----------  dataArr----------->", dataArr);
    
    // map(func) – creates a new array from results of calling func for every element.
    
    let newArr = arr.map((e) => {
        //   return e + 100;
        return e / 100;
    });
    console.log("-----------  newArr----------->", newArr);
    
    */

// reduce(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
// LRV = lastReturnValue

let Rarray = [1, 2, 3, 4];
// console.log("-----------  Rarray----------->", Rarray)
// let total = Rarray.reduce((LRV, e) => {
//   console.log("-----------  LRV, e----------->", LRV, e);
//   return LRV + e;
// });
// console.log("-----------  total----------->", total)

let mapTotal = 0;

Rarray.map((e) => {
  mapTotal = mapTotal + e;
});
console.log("-----------  mapTotal----------->", mapTotal);
