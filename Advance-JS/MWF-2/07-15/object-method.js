let obj = {
  a: 20,
  b: 30,
  c: 40,
  d: 50,
};


// ["a","b","c","d"]

let keys = Object.keys(obj)
console.log("-----------  keys----------->", keys)

let value = Object.values(obj)
console.log("-----------  value----------->", value)

let entries = Object.entries(obj)
console.log("-----------  entries----------->", entries)
