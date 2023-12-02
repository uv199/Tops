class Student {
  constructor(name) {
    console.log("constructor---->");
    this.name = name;
  }
  login() {
    console.log("---login---->", this.name);
  }
}




let s1 = new Student("Urvish");
let s2 = new Student("Nidhi");

console.log("s1", s1);
console.log("s2", s2);

s1.login();
s2.login();
