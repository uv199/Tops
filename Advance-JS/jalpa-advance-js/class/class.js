// let obj ={
//     name :"jalpa"
// }

class Person {
  constructor(name) {
    console.log("constructor--->");
    let mno = "23";
    this.name = name + mno;
  }
  print() {
    this.age = 23;
    console.log("test--->", this.name, this.age, this.mno);
    return 10;
  }
}

let x = new Person("jalpa");
let y = new Person("chinmay");
console.log("x :", x);
console.log("y :", y);
y.print();
x.print();
