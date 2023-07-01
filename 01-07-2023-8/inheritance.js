// class common {
//   constructor(name) {
//     this.name = name;
//   }
//   print() {
//     console.log("---->print");
//   }
// }

// class A extends common {
//   //   print() {
//   //     console.log("---->print");
//   //   }
//   akshit() {
//     console.log("---->akshit", this.name);
//   }
// }

// class B extends common {
//   //   print() {
//   //     console.log("---->print",);
//   //   }
//   tejash() {
//     console.log("---->tejash", this.name);
//   }
// }

// let aClass = new A("akshit");
// let bClass = new B("tejash");

// aClass.print();
// bClass.print();
// bClass.tejash();
// =====================================================================================

// method over riding
class common {
  constructor(name) {
    this.name = name;
  }
  print() {
    console.log("---->print");
  }
}

class A extends common {
  print() {
    console.log("---->print  child");
  }
  akshit() {
    console.log("---->akshit", this.name);
  }
}
class B extends common {
  constructor(name) {
    super(name);
    // this.name = "trello";
  }
  test() {
    super.print();
    console.log("---->akshit", this.name);
  }
}

let aClass = new A("akshit");
let bClass = new B("akshit");

// aClass.print();
bClass.test();
