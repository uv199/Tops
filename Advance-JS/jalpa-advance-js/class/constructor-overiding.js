class com {
  constructor(test) {
    this.name = test;
  }
  print() {
    console.log("ptint-->");
  }
}

class class_A extends com {
  constructor(name) {
    console.log("name :", name);
    super(name);
    this.age = 25;
  }
  copy() {
    console.log("copy-->", this.name);
    console.log("copy-->", this.age);
  }
}

let aClass = new class_A("geeta");
aClass.copy();
