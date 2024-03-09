let data = {
  name: "urvish",
  age: 23,
};
// console.log("-----------  data----------->", data)

let jsonString = JSON.stringify(data)
let normalData = JSON.parse(data)
console.log("-----------  normalData----------->", normalData)
// console.log("-----------  jsonString----------->",typeof jsonString)
