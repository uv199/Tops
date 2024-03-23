let user = {
  name: "urvish",
  age: 23,
  hobby: ["reading", { a: 20 }],
};

let jsonData = JSON.stringify(user);
// console.log("-----------  jsonData----------->", typeof jsonData);
// console.log("-----------  jsonData----------->", jsonData);

let jsonString = '{"name":"urvish","age":23,"hobby":["reading",{"a":20}]}';
let normalData = JSON.parse(jsonString);
// console.log("-----------  normalData----------->", normalData);

let x = {};
let jsonObj = JSON.stringify(x);
console.log("-----------  jsonObj----------->", jsonObj);

if (jsonObj !== "{}") {
  console.log("x have value ");
} else {
  console.log("x is empty");
}

