class User {
  constructor() {
    this.name = "perent name--->";
  }
  login() {
    console.log("You are login...!");
  }
}

class Student extends User {
  printStudentDetails() {
    console.log(`I am student`);
  }
  login() {
    super.login();
    console.log("----student ----login---->");
  }
}

class Teacher extends User {
  constructor() {
    super();
    this.name = "child name--->";
  }
  printTeacherDetails() {
    console.log(`I am teacher`, this.name, super.name);
  }
}

const s1 = new Student();
// s1.login();

const t1 = new Teacher();
t1.printTeacherDetails();
