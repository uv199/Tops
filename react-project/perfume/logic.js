let arr = [1, 2, 3, 32, 1, 4, 2, 1, 3, 1];

let obj = {};
arr.map((e) => {
  if (e in obj) {
    obj[e].push(e);
  } else {
    obj[e] = [e];
  }
});

console.log("-----------  obj----------->", obj);
