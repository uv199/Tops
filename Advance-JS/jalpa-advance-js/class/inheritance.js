class com {
  constructor() {
    this.name = "chinmay";
  }
  print() {
    console.log("ptint-->");
  }
}

class class_A extends com {
  //   print() {
  //     console.log("ptint-->");
  //   }
  copy() {
    console.log("copy-->", this.name);
  }
}

class class_B extends com {
  //   print() {
  //     console.log("print-->");
  //   }
  find() {
    console.log("find-->", this.name);
  }
}

let aClass = new class_A();
let bClass = new class_B();
console.log(aClass.print());
console.log(bClass.print());
bClass.find();
