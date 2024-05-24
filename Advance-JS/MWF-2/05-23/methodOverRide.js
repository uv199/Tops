class User {
  constructor(name) {
    this.name = name;
  }
  login() {
    console.log("User is login");
  }
}

class Teacher extends User {
  constructor(name, salary) {
    super(name);
    this.salary = salary;
  }
  printTeacher() {
    console.log("I am a teacher", this.name);
  }
  login() {
    super.login();
    console.log("User is login from child");
  }
}

class Student extends User {
  printStudent() {
    console.log("i am a student", this.name);
  }
}

let t = new Teacher("urvish", 30000);

t.login();
t.printTeacher()
// let s = new Student("jatin");
// s.printStudent();
