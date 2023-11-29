let data = {
  name: "urvish",
  age: 12,
  hobby: ["reding"],
  x: undefined,
  y: null,
};

console.log("data", data);

let jsonStr = JSON.stringify(data);
console.log("jsonStr", typeof jsonStr);
console.log("jsonStr", jsonStr);

let normalData = JSON.parse(jsonStr);
console.log("normalData", normalData);
