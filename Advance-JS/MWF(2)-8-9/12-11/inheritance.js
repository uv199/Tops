class User {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
  login() {
    console.log("-----------login----------->");
  }
}

class Teacher extends User {
  constructor(...arg) {
    super(...arg);
    this.amount = 999999999;
    this.bonus = 100;
  }
  printSalary() {
    console.log("-----------  printSalary----------->", this.amount);
    console.log("-----------  printSalary-2----------->", super.amount);
  }
  printBonus() {
    console.log("-----------  printBonus----------->", this.bonus);
  }
}

class Student extends User {
  printFees() {
    console.log("-----------  printFees----------->", this.amount);
  }
  login() {
    super.login();
    // remove data
    console.log("-----------student login----------->");
  }
}

const su = new Student("urvish", 100); // studentId , password
su.login();
// su.printFees();

const te = new Teacher("soni", 999); //emial -employeeid - password
// te.login();
te.printSalary();
// te.printBonus();
