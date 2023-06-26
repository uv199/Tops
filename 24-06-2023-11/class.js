class Student {
  constructor() {
    this.fname="test";
  }
  login() {
    console.log("please student", this.fname);
  }
  set _name(name) {
    this.fname = name;
  }

  get name() {
    return this.fname;
  }
}

let s = new Student();
s.login();

s._name = "set_test"

s.login();

console.log(s.name)