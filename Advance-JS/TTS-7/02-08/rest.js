let [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("-----------  a----------->", a)
// console.log("-----------  b----------->", b)
// console.log("-----------  c----------->", c)

let { x, y, ...zz } = { x: 20, y: 40, z: 50, m: 80, n: 90 };
// console.log("-----------  x----------->", x);
// console.log("-----------  y----------->", y);
// console.log("-----------  zz----------->", zz);

// fun(1,2,3,4,5,6,7,8,9) => get para 1 in a 2 in b and rest all pera in c
