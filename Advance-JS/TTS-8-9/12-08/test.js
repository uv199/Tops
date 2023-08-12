class User {
  constructor(data) {
    this.name = data.name;
    this.pass = data.pass;
  }
  login(data) {
    if (data.name === this.name && data.pass === this.pass) {
      console.log("you are logedin....!");
    } else {
      console.log("name or pass worng....!");
    }
  }
}

class Student extends User {
  constructor(data) {
    super(data);
    this.fees = data.fees;
  }

  feesPrint() {
    console.log(`your fees is ${this.fees}....!`);
  }
}

class Teacher extends User {
  constructor(data) {
    super(data);
    this.salary = data.salary;
  }
  salaryPrint() {
    console.log(`your salary is ${this.salary}....!`);
  }
}

let student = new Student({ name: "urvish", pass: "123", fees: 1000 });
console.log("student:", student);
student.feesPrint();
let teacher = new Teacher({ name: "teacher", pass: "456", salary: 50000 });
teacher.salaryPrint();
console.log(" teacher:", teacher);

// teacher.login({ name: "teacher", pass: "456" });
student.login({ name: "urvish", pass: "123" });
