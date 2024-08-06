let obj = { a: 10, b: 20, c: 30, d: () => {} };

//  [a,b,c]

let keys = Object.keys(obj);
console.log("-----------  keys----------->", keys);

let value = Object.values(obj);
console.log("-----------  value----------->", value);

let entries = Object.entries(obj);
console.log("-----------  entries----------->", entries);
