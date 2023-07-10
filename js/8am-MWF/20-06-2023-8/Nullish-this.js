// let x = null;
// let x1 = 20;
// let c = x || x1;
// let c2 = x && x1;
// console.log("c2 :", c2);
// console.log("--->", c);

let a = {
  //   x: 10,
  //   y: {
  //     m: 0,
  //   },
  //   sum: function name() {
  //     console.log(this.x + this.y);
  //   },
};
// a.x = 50
// console.log("a", a.sum());
console.log("a", a?.y?.m); // a.y ? a.y.m : null
