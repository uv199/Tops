let obj = {
  a: 10,
  b: 20,
};

console.log("obj :", obj.b);

// let m = obj.c.m;
// let m =(obj.c) ? ((obj.c.m )?(obj.c.m.n):(null)) : null;
let m = obj?.c?.m?.c;
// obj?.sum?.()
console.log("obj :", m); //

// recursion

let arr = [1, 2, 3, 4, 5];
function loop(x) {
  console.log(x);
  if (x > 0) {
    loop(x - 1);
  } else {
    console.log("finished....!");
  }
}

loop(10);
