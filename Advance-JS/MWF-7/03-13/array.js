// let array = [1, 2, 3, 4];
// console.log("-----------  array----------->", array[2]);

let array = [
  "string",
  123,
  true,
  undefined,
  null,
  { a: 200, b: 400, c: [10, 20] },
  [1, 2, 3, 4],
  function print(params) {
    console.log("-----------  print----------->");
  },
];
console.log("-----", array[6][1]);

console.log("----------- ----------->", array[5].b);
console.log("----------- ----------->", array[5].c[1]);

//

let data = [
  { name: "urvish", age: 23 },
  { name: "jeel", age: 12 },
  { name: "hemanshu", age: 19 },
  { name: "dev", age: 18 },
];

for (let i = 0; i < data.length; i++) {
  const element = data[i].name;
  console.log("-----------  element----------->", element);
}

let user = {
  name,
  age,
  address: {
    city,
    state,
    pincode,
  },
  hobby: [1, 2, 3],
  sibligngs: [{ name, age }],
};
