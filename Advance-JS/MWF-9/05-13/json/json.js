let normalData = {
  name: "urvish",
  age: 23,
  hobby: ["reaidng", "playing"],
  add: {
    city: "surat",
  },
};

let jsonData = JSON.stringify(normalData);

let xyz = normalData.toString();
console.log("-----------  xyz----------->", xyz);

// console.log("-----------  normalData----------->", normalData)
// console.log("-----------  jsonData----------->",typeof  jsonData,jsonData)

let jsonStirng = `{"name":"urvish","age":23,"hobby":["reaidng","playing"],"add":{"city":"surat"}}`;
let nData = JSON.parse(jsonStirng);
// console.log("-----------  nData----------->", nData);

let x = {};
console.log("-----------  x----------->", JSON.stringify(x) === "{}");

let arr = [1, 2, 3];

// x => if block call when x does not have falsy value
// !x => if block call when x have falsy value
if (x) {
  // x===null || x===undefined ...
  console.log("x have some value");
} else {
  console.log("x do not have value");
}
