class User {
  constructor(userType) {
    this.logintype = userType;
  }
  login() {
    console.log("----login", this.logintype);
  }
}

class Student extends User {
  constructor(t) {
    super(t);
    this.logintype = "test";
  }
  printStudent() {
    console.log("----Student", this.logintype);
  }
  login() {
    super.login();
    console.log("----chld Student----", this.logintype);
  }
}

class Teacher extends User {
  printTeacher() {
    console.log("----Teacher");
  }
}

let t = new Teacher("teacher");
let s = new Student("student");
s.login();
t.login();
s.printStudent();
