let arr = [1, 2, 3, 4, 5];

let x = [...arr];
let obj = {
  name: "jalpa",
  fname: "khunt",
  age: 23,
};
let obj2 = { ...obj };

let [a, b, ...c] = arr;
console.log("a, b, ...c :", a, b, c);

let { name, ...data } = obj;
console.log(" name, ...data :", name, data);

function sum(a, b, ...c) {
  console.log(a, b, c);
}
sum(1, 2, 3, 4, 5, 6, 7);
