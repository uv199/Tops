let obj = {
  name: "test",
  age: 25,
  arr: [1, 2, 3, 4, "str"],
  obj: { test: "val" },
};

let jsonStr = JSON.stringify(obj);
console.log("jsonStr:", typeof jsonStr, jsonStr);

let data = JSON.parse(jsonStr);
console.log(" data:", data);
