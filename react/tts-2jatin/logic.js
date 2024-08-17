let arr = [10, 20, 30];

let index = 1;

let filterData = arr.filter((e, i) => i !== index);
console.log("-----------  filterData----------->", filterData);

let x = {};
let y = new Object();
let z = Object.create();

let obj = {
  a: 30,
  b: 990,
};

// obj2 = obj
// {...obj2}

let step = JSON.stringify(obj);

let obj2 = JSON.parse(step);
console.log("-----------  obj2----------->", obj2)


