let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// filter -> to filter a data like give data above 5 etc
// - return new array
let filteredArr = arr.filter((e) => {
  return e % 2 === 0;
});
// console.log("filteredArr->", filteredArr);

// reverse -> to reverse arr
//- change in existing array
// console.log("arr->", arr);
// arr.reverse();
// console.log("reversed arr->", arr);

// sort -> to sorting a array
// - change in existing array
let sortArr = [1, 30, 32, 4, 21, 100000];
sortArr.sort();
// console.log("sort sortArr->", sortArr);

// splice -> to remove + add some ele to array
// - change in existing array
arr.splice(1, 2, 1, 2);
// console.log("splice", arr);

// forEach -> same as like loop just give one more pera..  array who contain whole array
arr.forEach((ele, index, array) => {
  //   console.log(array);
});

//  indexOf - to find the index by element value
// - return index of that ele if exist otherwise return -1
// console.log(arr.indexOf(6)); // 1
// console.log(arr.indexOf(false)); // 2

// include - check ele available or not
// return true/false
// console.log(arr.includes(50)); // true

// join - join a array to in string
// we can join with some user define sign
let joinArr = arr.join("00");

// arr.toString();
// console.log("arr :", arr);
// console.log("arr.toString() :", arr.toString());
// console.log("joinArr :", joinArr);

// advance in array

let a1 = [1, 2, 3, 4, 5];
let a2 = [9, 7, 8];

// instade of use concat
let a3 = [...a2, ...a1];
// let a4 = [a2, a1];
// console.log("a4 :", a4);
console.log(" a3 :", a3);

// you can use multiple method
// note :- you can use only on method who can return
a3.sort().map((e) => {
  console.log("e :", e);
});
// a3.sort().map((e) => {
//   console.log(e);
// });
