// class User {
//   constructor(name) {
//     console.log("welcome");
//     this.a = name;
//   }
//   print() {
//     console.log("------>", this.a);
//   }
// }

// let x = new User("tejash");
// console.log('x :', x);
// x.print();
// let y = new User("hemaxi");
// console.log('y :', y);
// y.print();
// let z = new User();
// // console.log("x :", x);

// ================================================================

class calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // this.sum = x + y;
    // this.sub = x - y;
  }
  sum(num) {
    console.log(this.x + this.y + num);
    // return undefined ;
  }
  sub() {
    return this.x - this.y;
  }
}

let cal = new calculator(10, 20);
console.log("cal :", cal);
cal.sum(10);

let x = cal.sum(10);
let y = cal.sub();

console.log("x sum:", x);
console.log("y sub:", y);
