let user = {
  name: "urvis",
  age: 23,
};

let jsonData = JSON.stringify(user);
console.log("-----------  jsonData----------->", typeof jsonData);

let jsonString = '{"name":"urvis","age":23}';


let normalData = JSON.parse(jsonString)
console.log("-----------  normalData----------->", normalData)


