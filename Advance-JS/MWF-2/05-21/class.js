class Person {
  constructor(name) {
    this.name = name; // data member
  }
  // method
  printName() {
    console.log("my name is ", this.name);
  }
}

let person1 = new Person("urvish");
let person2 = new Person("jatin");
let person3 = new Person("rohit");

console.log("-----------person1----------->", person1);
console.log("-----------person2----------->", person2);
person1.printName();
person2.printName();
person3.printName();

/*
let person1 = {
  name: "urvish",
  printName: function () {
    console.log("my name is ", this.name);
  },
};
person1.printName()
let person2 = {
  name: "jatin",
  printName: function () {
    console.log("my name is ", this.name);
  },
};
*/
