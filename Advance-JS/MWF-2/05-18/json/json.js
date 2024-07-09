let user = {
  name: "urvish",
  age: 23,
};

let jsonData = JSON.stringify(user);
console.log("-----------  jsonData----------->", jsonData);

let normalData = JSON.parse('{"name":"urvish","age":23}');
console.log("-----------  normalData----------->", normalData)
