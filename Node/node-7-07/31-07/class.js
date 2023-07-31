class User {
  constructor(n, a) {
    this.name = n; // { } [] null etc..( one type of variable )
    this.age = a; // (this.age = a) == (let age = a)
  }

  print(params) {
    console.log("----->", this.name);
  }

  printAge(x) {
    return (
      "My age is " +
      this.age +
      ` years and after ${x} year my age will be ` +
      (this.age + x)
    );
  }
}

let urvish = new User("urvish", 26);
let dhaval = new User("dhaval", 24);

console.log("urvish:", urvish);
console.log("dhaval:", dhaval);
urvish.print();
dhaval.print();
console.log(".printAge();:", dhaval.printAge(5));
