class Person {
  constructor(name, fees) {
    this.name = name;
    this.fees = fees;
  }
  login() {
    console.log("-----------  login----------->", this.name);
  }
}

class Teacher extends Person {
  constructor(name, salary) {
    super(name);
    this.salary = salary;
  }
  printSalary() {
    console.log("-----------  printSalary----------->", this.salary);
  }
}

class Student extends Person {
  printFees() {
    console.log("-----------  printFees----------->", this.fees);
  }
  login() {
    console.log("----------- student login----------->", this.name);
  }
}

let t1 = new Teacher("urvish", 12000);
let s1 = new Student("meet", 3000);

t1.login();
s1.login();
t1.printSalary();
s1.printFees();
