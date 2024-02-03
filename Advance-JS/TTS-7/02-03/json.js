let user = {
  name: "uv",
  age: 23,
  address: {
    pin: 395007,
    city: "surat",
  },
  hobby: ["hello", "test"],
};

let jsonData = JSON.stringify(user);
console.log("-----------  jsonData----------->", typeof jsonData);

let normalData = JSON.parse(jsonData);
console.log("-----------  normalData----------->", normalData);
