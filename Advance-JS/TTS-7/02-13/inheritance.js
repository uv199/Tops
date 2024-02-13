class User {
  login() {
    console.log("login success...!");
  }
}

class Teacher extends User {
  printTeacherDetails() {
    console.log(
      "hello, My self Falguni i am teacher at sarvajanik school and i am teaching english subjects"
    );
  }
}

class Student extends User {
  printStudentDetails() {
    console.log(
      "hello, My self Kishan i am student at sarvajanik school and i am studing in 7-A"
    );
  }
}

let t1 = new Teacher();
let s1 = new Student();

t1.login();
s1.login();
