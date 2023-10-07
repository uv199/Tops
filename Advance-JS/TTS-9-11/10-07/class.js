/*
class User {
  constructor() {
    console.log("--constructor--");
    this.name = "urvish";
    this.age = 23;
  }

  printName(params) {
    console.log("-----print-name-----", this.name);
  }
  printAge(params) {
    console.log("-----print-age-----", this.age);
  }
}

const class1 = new User();
const class2 = new User();
console.log("class2", class2);
console.log("class1", class1);
class1.printName();
class1.printAge();

*/

/*
class User {
  constructor(name, age) {
    // console.log("--constructor--");
    this.name = name;
    this.age = age;
  }

  printName() {
    console.log("-----print-name-----", this.name);
  }
  printAge(x) {
    console.log(`My age will be ${this.age + x} after ${x} year`);
    // my age will be 28 after 5 year
    console.log("-----print-age-----", this.age);
  }
  sum(a, b) {
    return a + b;
  }
}

const class1 = new User("urvish", 23);
const class2 = new User("nimesh", 22);
// console.log("class1", class1);
// console.log("class2", class2);

console.log("------class one-------");
// class1.printName();
// class1.printAge(10);

console.log("------class two-------");
// class2.printName();
// class2.printAge(10);

let total = class1.sum(99, 90);
console.log("total", total);
*/

class School {
  defineData() {
    this.school = "Bhartimaiya";
  }
  print() {
    console.log(`My school name is ${this.school}`);
  }
}

const abc = new School();
console.log("abc", abc);
abc.print();
abc.defineData();
console.log("abc", abc);
abc.print();
