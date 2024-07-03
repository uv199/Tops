/*
p1 => sup1.1
p2 => sup1.2 => sup2
*/

let a = 20;
let b = a;
a = 50;
console.log("-----------b----------->", b);

let c = {
  a: 20,
  b: 40,
};

let d = c;

c.a = 200;

console.log("-----------  d----------->", d);

let arr = [1, 2, [3.1, 3.2]];

// let arr2 = arr
let arr2 = [...arr];
arr[0] = 100;
arr[2][0] = 30.1;

// arr2?

/*
object
array

*/








