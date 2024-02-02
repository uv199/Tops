let obj = {
  name: "urvish",
  age: 23,
};

let jsonData = JSON.stringify(obj);
console.log("-----------  jsonData----------->", jsonData);

let normalData = JSON.parse(jsonData);
console.log("-----------  normalData----------->", normalData)
