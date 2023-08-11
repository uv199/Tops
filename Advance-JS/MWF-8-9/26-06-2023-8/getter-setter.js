class User {
  constructor() {
    this.firstName;
  }

  set name(fName) {
    this.firstName = fName;
  }

  get get_name() {
    return this.firstName;
  }

  print() {
    console.log("my name is ", this.firstName);
  }
}

let x = new User();
x.print();
x.name = "test";
x.print();

console.log(x.get_name);
