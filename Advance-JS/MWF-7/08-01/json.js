// json is an light waight formate to store data
// json store a data in string formate

let user = {
  name: "urvish",
  age: 20,
  address: {
    pincode: "395007",
  },
  hobby: ["reading"],
};

let ans = JSON.stringify(user);
console.log("-----------  ans----------->", ans);
let data =
  '{"name":"urvish","age":20,"address":{"pincode":"395007"},"hobby":["reading"]}';

let normalData = JSON.parse(data);
console.log("-----------  normalData----------->", normalData);
