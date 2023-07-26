let obj = {
  name: "urvihs",
  version: 20,
  arr: [12, "test"],
  obj: { test: "test" },
  bol: true,
};
console.log(" obj:", obj);

let jsonString = JSON.stringify(obj);
console.log(" jsonString:", jsonString);

let normalData = JSON.parse(jsonString);
console.log(" normalData:", normalData);
