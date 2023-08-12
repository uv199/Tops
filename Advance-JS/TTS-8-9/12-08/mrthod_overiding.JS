class User {
  constructor(type) {
    this.typeOfUser = type;
  }
  login() {
    console.log("----login -->", this.typeOfUser);
  }
}

class Student extends User {
  constructor(type) {
    super(type);
    this.fee = 1000;
    this.typeOfUser = "test";
  }
  fees() {
    super.login();
    console.log("---fees--->", this.typeOfUser);
  }

  login() {
    console.log("---child login--->");
  }
}

class Teacher extends User {
  salary() {
    console.log("---salary--->");
  }
}

let st = new Student();
st.fees();
st.login();

const data = require("./module");
console.log("🚀 ~ file: mrthod_overiding.JS:37 ~ data:", data);
