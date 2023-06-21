let obj = {
  a: 10,
  b: 20,
  c: 30,
};

let x = obj.a;
let x2 = obj.b;

let { y, y1, c } = obj;
console.log("y, y1  :", y, y1, c);
let { b, a } = obj;
console.log("a,b :", a, b);

let arr = [1, 2, 3];

// let [n, m] = arr;
let [m, n] = arr;
console.log("m, n :", m, n);

// recursion

function f1(x) {
  if (x > 0) {
    console.log("--->", x);
    x--;
    f1(x);
  } else {
    console.log("--finish-->");
    return;
  }
}

f1(10);


