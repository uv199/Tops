const jdata = require("./data.json");
console.log("jdata :", jdata);

let data = {
  name: "jalpa",
  age: 23,
};

let jsonData = JSON.stringify(data);
console.log("jsonData :", typeof jsonData);

let data2 = JSON.parse(jsonData);
console.log("data2 :", data2);

// try {
//   JSON.parse({ data: 1 });
// } catch (error) {
//   console.log("error :======>", error);
// }
