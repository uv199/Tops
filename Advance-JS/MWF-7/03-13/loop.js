let obj = {
  a: 23,
  b: 20,
  c: 40,
  d: 10,
};

for (const key in obj) {
  console.log("-----------  key----------->", key);
  console.log("-----------  value----------->", obj[key]);
}

let data = [1, 2, 3, 40, 50];
for (const iterator of data) {
  console.log("-----------  iterator----------->", iterator);
}
