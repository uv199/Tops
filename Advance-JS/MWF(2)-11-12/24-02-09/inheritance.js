class User {
  constructor(name) {
    this.name = name;
  }
  login() {
    console.log("You are login...!");
  }
}

class Student extends User {
  constructor(name, classRoom) {
    super(name);
    this.classRoom = classRoom;
  }

  printStudentDetails() {
    console.log(
      `My name is ${this.name} and i'm student of class ${this.classRoom} `
    );
  }
}

class Teacher extends User {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  printTeacherDetails() {
    console.log(
      `My name is ${this.name} and i'm teach ${this.subject} in school`
    );
  }
}

const stu1 = new Student("sid", "10-A");
stu1.printStudentDetails();
stu1.login();
const tech1 = new Teacher("uv", "english");
tech1.printTeacherDetails();
tech1.login();


const user = new User("test")
console.log("-----------  user----------->", user)


user.login()
