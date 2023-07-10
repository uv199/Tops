let person = [
  { name: "kush", age: 12 },
  { name: "tej", age: 10 },
  { name: "smit", age: 18 },
  { name: "ram", age: 20 },
];

// const total = person.reduce((lastEle, ele) => {
//   console.log(" ~ lastEle:", lastEle);
//   console.log(" ele:", ele);
//   let total = (lastEle.age || lastEle) + ele.age;
//   return total;
// });
// let totalCount
// let abc =for (let i = 0; i < array.length; i++) {
//   return totalCount ++

// }

// filter
let filteredArr = person.filter((e) => {
  return e.age >= 18;
});
console.log("filteredArr->", filteredArr);
// console.log("total :", total);
