class ComUser {
  constructor(feesAmt, salaryAmt) {
    this.fees = feesAmt;
    this.salary = salaryAmt;
  }
  login() {
    console.log("----login----");
  }
}

class Teacher extends ComUser {
  salaryPrint() {
    console.log("----salary----", this.salary);
  }
}

class Student extends ComUser {
  constructor(feesAmt_child) {
    super(feesAmt_child);
    this.fee = 100000;
  }
  feesPrint() {
    console.log("----fees----", this.fees);
  }
}

const STU = new Student(2999);
// STU.login();
STU.feesPrint();
const TECH = new Teacher(null, 99999);
TECH.salaryPrint();
// TECH.login();
