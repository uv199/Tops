let arr = [1, 2, 3, 4, 5];
/*
let x = "10";
let y = "20";

let sub = y - x;
let sort = arr.sort((a, b) => a - b);

// reverse() – reverses the array in-place, then returns it.

let revesredArr = arr.reverse();

// join – convert a array ihn to string

let str = arr.join("---test--test--");
let str__2 = arr.toString();

// map(func) – creates a new array from results of calling func for every element.
let arrObj = [
  {
    name: "jigar",
    age: 29,
  },
  
  {
    name: "kavya",
    age: 32,
  },
];

// let newArr = arr.map((e, i) => {
  //   return e + 5;
  // });
  
  let nameArr = arrObj.map((e) => {
    return "my name is " + e.name;
  });
  
  console.log("nameArr", nameArr);
  
  // reduce(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
  // [1, 2, 3, 4, 5];
  
  let total = arr.reduce((lastReturnValue, e) => {
    console.log("lastReturnValue", lastReturnValue);
    console.log("e", e);
    return lastReturnValue + e;
  }, 0s);
  console.log("total", total);
  */

// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.

let x = null;
let m = Array.isArray(x);
console.log("m", m);
