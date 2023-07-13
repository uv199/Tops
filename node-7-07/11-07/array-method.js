let arr = [1, 2, 13, 4, 5, 6, 7, 8, 9, 1];
console.log("arr :", arr);

// find/filter(func) – filter elements through the function, return first/all values that make it return true.
// let x = arr.find((ele) => {
//   console.log(ele);
//   return ele > 6;
// });
// console.log(" x  :", x);

// let abc = arr.filter((e) => {
//   console.log(e);
//   return e < 6;
// });
// console.log("abc :", abc);

// forEach(func) – calls func for every element, does not return anything.
// arr.forEach((e) => {
//   console.log("e", e);
// });

// map(func) – creates a new array from results of calling func for every element.
// let nArr = arr.map((e) => {
//   return e + 1;
// });
// console.log("nArr :", nArr);

// sort(func) – sorts the array in-place, then returns it.
// arr.sort();
// console.log("arr :", arr);

// reverse() – reverses the array in-place, then returns it.
// arr.reverse();
// console.log("arr :", arr);

// join – convert a array to string

// let str = arr.join("-");
// let str2 = arr.toString();
// console.log("str2 :", str2);
// console.log("str :", str);
// console.log("str :", typeof str);

//reduce(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

// let arr1 = [1, 2, 3, 4, 5];

// let total = arr1.reduce((acc, e) => {
//   console.log("acc, e :", acc, e);
//   return acc + e;
// }, 0);
// console.log("total :", total);

// let a = [{ n: 20, x: 10 }, { n: 20 }, { n: 10 }, { n: 20 }];

// a.map((e) => {
//   console.log("e", e.n);
//   console.log("e", Object.values(e));
// });

// test
function name(params) {
  console.log("");
  return "test";
}

let fun = () => "test";

const a = name();
const a1 = fun();
console.log("a  :", a);
console.log("a1  :", a1);
setTimeout(() => {
  console.log("test");
}, 2000);
setInterval(() => {
  console.log("test--->");
}, 2000);

clearInterval();
