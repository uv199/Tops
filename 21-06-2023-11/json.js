const x = require("./data.json");
console.log("x :", typeof x);

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let jsonData = JSON.stringify(student);
console.log("jsonData :", typeof jsonData);

let data = JSON.parse(jsonData);
console.log("data :", data);
/* JSON-encoded object:
  {
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "courses": ["html", "css", "js"],
    "spouse": null
  }
  */
