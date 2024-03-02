// const funObj = require("./sum");
const { sum, sub } = require("./sum");
const multiFun = require("./multi");

const jData = require("./data.json");
// console.log("-----------  jData----------->", jData);

// console.log("-----------  funObj----------->", funObj);
let data = sum(200, 300);
// console.log("-----------  data----------->", data);

// console.log("-----------  multiFun----------->", multiFun);
let multi = multiFun(300, 200);
// console.log("-----------  multi----------->", multi);

function retrunObj() {
  return { name: "urvish", age: 23 };
}

// const user = retrunObj();
// console.log("-----------  user----------->", user)
// console.log("my name is ", user.name);
// console.log("my age is ", user.age);

const { age, name } = retrunObj();

console.log("my name is ", name);
console.log("my age is ", age);
