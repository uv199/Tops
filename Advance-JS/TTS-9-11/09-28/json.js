const JSONDATA = require("./data.json");
console.log("JSONDATA", JSONDATA);

const obj = {
  name: "urvish",
  age: 23,
  address: {
    line1: "A-308 tapti avenue",
    lendmark: "beside velentine multiplex theater",
    city: "surat",
  },
};
// console.log("obj", obj);

let jsonStr = JSON.stringify(obj);
// console.log("jsonStr", typeof jsonStr,jsonStr);

let normaolData = JSON.parse(jsonStr);
// console.log("normaolData", normaolData);
