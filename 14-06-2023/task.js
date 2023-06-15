let person = [
  { name: "kush", age: 5 },
  { name: "tej", age: 10 },
  { name: "smit", age: 5 },
  { name: "ram", age: 20 },
];

// let obj = { name: "ram", age: 20 };
// console.log("name --->", obj.name);
let count = 0;
person.map((e) => {
  return count++;
});

console.log("count :", count);
// let totalAge = person.reduce((lastEle, e) => {
//   console.log("lastEle :", lastEle);
//   console.log("--->", e);
//   console.log("--->");
//   return (lastEle || lastEle.age) + e.age;
// });

// console.log("totalAge :", totalAge);
