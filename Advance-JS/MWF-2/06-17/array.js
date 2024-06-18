export const x = "hello";

let arr = [
  1,
  "string",
  null,
  undefined,
  true,
  [1, 2, 3, 4, 5],
  { a: 20, b: 30 },
];

// arrayName[index]
console.log("----->", arr[5][2]);
console.log("----->", arr[15]);
console.log("----->", arr[6].b);

/*
let user = {
  name: "",
  vehicalDetails:[{}],
  child: [{ name, age }],
};
*/
