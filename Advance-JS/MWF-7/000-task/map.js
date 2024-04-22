let arr = [10, 20, 30, 40];

let sum = 0;
let newArr = arr.map((e, i) => {
  console.log("-----------  e,i----------->", e, i);
  sum = sum + e;
  return e + 100;
});
console.log("total = ", sum);
console.log("-----------  newArr----------->", newArr);
// test
