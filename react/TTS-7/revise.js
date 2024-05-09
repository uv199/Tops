let arr = [1, 2, 3, 4];
// console.log("-----------  arr.includes(3)----------->", arr.includes(3));

let arr2 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];

// console.log(
//   "-----------  arr2.includes({ a: 1 })----------->",
//   arr2.includes({ a: 1 })
// );

let ans = arr2.some((e) => {
  console.log("-----------  e----------->", e);
  return e.a === 20;
});
console.log("-----------  ans----------->", ans)
