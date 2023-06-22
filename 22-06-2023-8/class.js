// let faculty = {
//   name,
//   add,
//   empId,
//   std,
// };




// class person {
//   student(args) {
//     console.log(args);
//   }
//   login(args2) {
//     console.log(args2);
//   }
// }

// let x = new person();

// x.student("x--->");

// let y = new person();

// y.login("------y");

class person {
  constructor(a, b) {
    this.x = a || 10;
    this.y = b || 10;
  }
  sum(z) {
    console.log("----->", this.x + this.y + z || 0);
  }
  sub() {
    console.log(this.y - this.x);
  }
}

let x = new person(10, 20);
let y = new person(30, 50);

x.sum();
y.sum(20);
