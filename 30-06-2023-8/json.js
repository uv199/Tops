const DATA = require("./data.json");
console.log("DATA :", DATA);

let obj = {
  name: "vivek",
  age: 28,
};

let jsonStr = JSON.stringify(obj);
console.log("jsonStr :", jsonStr);
console.log("jsonStr :", typeof jsonStr);

let oldData = JSON.parse(jsonStr);
console.log("oldData :", oldData);
console.log("oldData :", typeof oldData);
