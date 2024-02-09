class Person {
  constructor(name, age) {
    console.log("------constructor------->");
    this.name = name;
    this.age = age;
  }
  print(no) {
    console.log("-----------  no----------->", no)
    console.log(`my name is ${this.name} and i'm ${this.age} years old.`);
  }
}

const user1 = new Person("urvish", 23);
console.log("-----------  user1----------->", user1);
const user2 = new Person("sid", 22);
console.log("-----------  user2----------->", user2);
const user3 = new Person("nayan", 25);
console.log("-----------  user3----------->", user3);
user1.print(100);
user2.print(20);
user3.print(120);

/*
let user1 = {
  name: "urvish",
  age: 23,
  print: function () {
    console.log(`my name is ${this.name} and i'm ${this.age} years old.`);
  },
};
let user2 = {
  name: "sid",
  age: 22,
  print: function () {
    console.log(`my name is ${this.name} and i'm ${this.age} years old.`);
  },
};

user1.print()
user2.print()

*/
