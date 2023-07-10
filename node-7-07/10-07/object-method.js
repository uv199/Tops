let obj = {
  a: 20,
  b: 10,
  c: 10,
};
let keys = [];

// console.log("keys :", keys);
for (const key in obj) {
  console.log(key, "===>", obj[key]); //obj.key
  keys.push(key);
}

// console.log("keys :", keys);

let keys2 = Object.keys(obj); // keys2=> ['a','b','c']
console.log("keys2 :", keys2);

let value = Object.values(obj); // value=> [20,10,10]
console.log("value :", value);

let ent = Object.entries(obj); // ent = [['a',20],['b',10],['c',10]]
console.log("ent :", ent);
