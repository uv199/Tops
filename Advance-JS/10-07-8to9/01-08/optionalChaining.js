// Optional chaining

let obj = {
  a: 20,
  b: 40,
};
// console.log("--->", obj.c.x);

// let value = obj.c ? obj.c.x : undefined;
// let value = obj.c.x; // give error
let value = obj?.a?.x?.m; // to handle error

console.log("--->value", value);

let user = {};

// user?.vehicle= "teswt"; //Invalid left-hand side in assignment

let data = null;
data?.map?.(() => {});
