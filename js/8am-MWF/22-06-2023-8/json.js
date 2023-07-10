let data = require("./data.json");
console.log("data :", data);

let obj = {
  name: "test",
  age: 19,
  age: [1, 2, 3, 4],
};

console.log(typeof JSON.stringify(obj));
console.log(JSON.stringify(obj));

let jsonString = JSON.stringify(obj);
console.log("jsonString :", jsonString);

console.log(JSON.parse(jsonString));

function user (a,b){
   return a+b;
}
console.log(user(40,20)); 
