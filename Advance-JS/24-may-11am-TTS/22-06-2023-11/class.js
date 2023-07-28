let s1 = {
  name: "hemaxi",
  age: 30,
};
let s2 = {
  name: "nihar",
  age: 23,
};

// console.log("--->", s1.name);
// function printName(name) {
//   console.log("--->", name);
// }

// printName(s1.name);
// printName(s2.name);

// class User {
//   print() {
//     console.log("----->", name);
//   }
// }
class User {
  //   name = 'nihar';
  constructor(name, age) {
    // console.log("===>constructor");
    this.name = name;
    this.age = age;
  }
  //   set name(name) {
  //     console.log("name :", name);
  //     this._name = name;
  //   }
  print() {
    console.log("my name is ", this.name);
  }
  printAge(x) {
    console.log("----->", this.age - x);
  }
}

let nihar = new User("nihar", 23);
let hemaxi = new User("hemaxi", 30);
// console.log("nihar :", nihar);
nihar.print();
hemaxi.print();
hemaxi.printAge(10);
// nihar.print("hemaxi");

// nihar._name = "nihar";
// nihar.print();
let name = "nihar";
let name1 = "hemaxi";

let str = "my name is {";
