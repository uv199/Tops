// let prDetails = {
//   name: "sinu",
//   surname: "patel",
//   age: 10,
//   add: {
//     city: "surat",
//   },
//   vehical: ["passion", "unicon", { a: 10 }],
//   fun1: (x) => {
//     console.log("x", x);
//     return x;
//   },
// };

// console.log(prDetails.fun1());

class User {
  constructor() {
    this.name = "your name"; //TODO have to add
  }
  login() {
    console.log("login", this.name);
  }
  attendance() {
    console.log("attendance :", attendance);
    console.log("attendance");
  }
}

class Student extends User {
  constructor() {
    super();
    this.name = "strudent name ---->";
  }
  printStudent() {
    console.log("please student", this.name);
  }

  studentLogin() {
    super.login();
    console.log("student login");
  }
}

class Teacher extends User {
  teacher() {
    console.log("teacher");
  }
}

const s = new Student();
// console.log("s :", s);
// s.printStudent();

s.studentLogin();
s.login();

// const t = new Teacher();
// t.teacher();
// t.login();

// var a = 10;

// var a = 20;
// console.log("----->", a);

// flag

// let email ='email@gmail.com'
// let pas= '1234'

// let data ={
//   email,
//   pass
// }
// data.email=
// data.pass=

// let arr =[1,2,3]
