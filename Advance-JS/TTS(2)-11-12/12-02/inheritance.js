class User {
  constructor(fees, salary) {
    this.fees = fees;
    this.salary = salary;
  }
  login() {
    console.log("----login---->");
  }
}

class Student extends User {
  constructor(fees) {
    super(fees);
    this.fees = 999999999;
  }
  printFees() {
    console.log("----fees---->", this.fees);
  }
}

class Teacher extends User {
  login() {
    super.login();
    console.log("----teacher---->");
  }
  printSalary() {
    console.log("----salary---->", this.salary);
  }
}

let s = new Student(1000, 0);
let t = new Teacher(0, 10000);

s.login();
t.login();
s.printFees();
t.printSalary();
