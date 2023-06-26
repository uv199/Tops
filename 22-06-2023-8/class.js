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

class Person {
  constructor(a, b) {
    this.x = a || 10;
    this.y = b || 10;
  }
  sum(z) {
    console.log("my name is ", this.x + this.y + z || 0);
  }
  sub() {
    console.log(this.y - this.x);
  }
  get name() {
    return this.x;
  }

  set set_name(x) {
    this.x = x;
  }
}

// let x = new person(10, 20);
// let y = new person(30, 50);

// x.sum();
// y.sum(20);
const abc = new Person(50, 70);
const xyz = new Person(40, 10);
console.log("abc =", abc.sum());
// const mno = new Person();

abc.x;
console.log("abc.x :", abc.x);

abc.set_name=90
console.log("abc.x :", abc.x);

// Person.sub();
// console.log("Person.sum() :", Person.sum());
