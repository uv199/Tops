class User {
  constructor(name) {
    this.name = name;
    // console.log("--constructor--");
  }
  print(arr) {
    console.log("---->", this.name);
    console.log("--arr-->", arr);
  }
}

let urvish = new User("urvish");
urvish.print("test ardd");
let test = new User("test");
test.print();
console.log(" urvish:", urvish);
console.log(" test:", test);

// false && console.log("------>");

// false && false;
// false && true;
// true && true;
// true && false;
