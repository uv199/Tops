class User {
  constructor(name) {
    this.name = name;
  }
  login() {
    console.log(this.name + " is login ");
  }
}

class Teacher extends User {
  constructor(name, salary) {
    super(name);
    this.salary = salary;
  }
  printSalary() {
    console.log("my salary is ", this.salary);
  }
}

class Student extends User {
  login() {
    console.log(this.name + " is login by child class");
  }
  fees() {
    console.log("my fees is ", this.fees);
  }
}

let t1 = new Teacher("urvish", 30000);
t1.login();
t1.printSalary();

let s1 = new Student("jeel");
s1.login();
