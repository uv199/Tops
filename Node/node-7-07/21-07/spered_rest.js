let obj = {
  x: 20,
  y: 10,
};

let obj2 = { ...obj };

let arr = [1, 2, 3, 4, 5];
let arr2 = [...arr];

let max = Math.max(...arr);
console.log(" max:", max);

let [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let { x, ...o } = {
  x: 20,
  y: 10,
};
function print(a, b, ...c) {
  console.log(" a, b, ...c:", a, b, c, d);
}

print(1, 2, 3, 4, 5, 6, 7);
