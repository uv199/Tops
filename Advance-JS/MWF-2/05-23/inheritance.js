class User {
  constructor(name) {
    this.name = name;
  }
  login() {
    console.log("User is login");
  }
}

class Teacher extends User {
  printTeacher() {
    console.log("I am a teacher", this.name);
  }
}

class Student extends User {
  printStudent() {
    console.log("i am a student", this.name);
  }
}

let t = new Teacher("urvish");
// console.log("-----------  t----------->", t);
t.printTeacher();
// t.login();
let s = new Student("jatin");
s.printStudent();
// console.log("-----------  s----------->", s);
// s.login();
