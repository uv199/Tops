let obj = {
  name: "urvish",
  age: 123,
  hobby: ["reading", "playing"],
};

// to convert normal data into json string
let jsonData = JSON.stringify(obj);
console.log("🚀 ~ file: JSON.js:9 ~ jsonData:", jsonData);

// to convert json string into normal data 
let normalData = JSON.parse(jsonData);
console.log("🚀 ~ file: JSON.js:12 ~ normalData:", normalData);
