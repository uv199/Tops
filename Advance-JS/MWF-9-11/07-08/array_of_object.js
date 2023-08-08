// array of object

let arrOfObj = [
  { a: 30, b: 59 },
  { a: 50, b: 83 },
  { a: 30, b: 81 },
];

for (let i = 0; i < arrOfObj.length; i++) {
  const element = arrOfObj[i].b;
  console.log(" element:", element);
}
