class User {
  constructor(name) {
    this.firstName = name;
  }
  print() {
    console.log("my name is ", this.firstName);
  }
}

class Vivek extends User {
  constructor(vivek_name) {
    super(vivek_name);
  }
}

// const x = new User("vivek");
// const y = new User();

// x.print("vivek");
// x.print();
// y.print();

let a = new Vivek("vivek");
a.print();
