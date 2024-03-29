/*

class Person {
  constructor(name, age) {
    console.log("-----------  constructor----------->");
    this.name = name;
    this.age = age;
  }
  print() {
    console.log("Hello my self ", this.name, "and im living in ", this.city);
  }
  definData(city) {
    this.city = city;
    return true;
  }
}

let p1 = new Person("urvish", 23);
let x = p1.definData("surat");
console.log("-----------  x----------->", x)
// let p2 = new Person("jeel", 42);
// let p3 = new Person("manoj", 50);
// console.log("-----------  p2----------->", p2);
// console.log("-----------  p1----------->", p1);

p1.print();
// p2.print();
// p3.print();

*/

class Calculate {
  constructor(no1, no2) {
    this.no1 = no1;
    this.no2 = no2;
  }
  sum() {
    console.log("--sum-->", this.no1 + this.no2);
  }
  multiply() {
    console.log("--multiply-->", this.no1 * this.no2);
  }
  divide() {
    console.log("--divide-->", this.no1 / this.no2);
  }
}

let cal1 = new Calculate(20, 10);
let cal2 = new Calculate(50, 5);

cal1.sum();
cal1.divide();
cal2.sum();
