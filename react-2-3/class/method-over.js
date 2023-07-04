class com {
  print(a) {
    console.log("parents-->", a);
  }
  test_call() {
    console.log("-->test_call");
  }
}

class class_A extends com {
  copy() {
    console.log("child-->");
  }
  print(a, b) {
    // super.print();
    // super.test_call();
    console.log("child-->print", a, b);
  }
  //   print(c) {
  //     // super.print();
  //     // super.test_call();
  //     console.log("One--->");
  //   }
}

let aClass = new class_A("geeta");
aClass.copy();
aClass.print(2, 3);
aClass.print(2);
