class Person {
  constructor(name, age) {
    console.log("-----constructore----");
    this.name = name;
    this.age = age;
  }

  defineData(city) {
    this.city = city;
  }
  print(no) {
    console.log("-----------  no----------->", no);
    console.log(`My namne is ${this.name} and my age is ${this.age}`);
    return "hello return statemenet";
  }

  printCity() {
    console.log(`i am leaving in ${this.city} city`);
  }
}

const person1 = new Person("latesh", 22);
person1.printCity();
person1.defineData("SURAT");
// const person2 = new Person("urvish", 23);
// const person3 = new Person("urvish", 23);
// const person4 = new Person("urvish", 23);
// console.log("-----------  person1----------->", person1);
// console.log("-----------  person2----------->", person2);
// let data = person1.print(100);
// console.log("-----------  data----------->", data);
// person2.print();

/*
let person1 = {
  name: "urvish",
  age: 23,
  print: function (params) {
    console.log(`My namne is ${this.name} and my age is ${this.age}`);
  },
};
let person2 = {
  name: "latesh",
  age: 23,
  print: function (params) {
    console.log(`My namne is ${this.name} and my age is ${this.age}`);
  },
};

person1.print();
person2.print();
*/
