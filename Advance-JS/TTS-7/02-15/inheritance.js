class User {
  constructor(name) {
    this.name = name;
  }
  login() {
    console.log("login success...!");
  }
}

class Teacher extends User {
  printTeacherDetails() {
    console.log(
      `hello, My self ${this.name} i am teacher at sarvajanik school and i am teaching english subjects`
    );
  }
}

class Student extends User {
  constructor(name, classRoom) {
    super(name);
    this.classRoom = classRoom;
  }
  printStudentDetails() {
    console.log(
      `hello, My self ${this.name} i am student at sarvajanik school and i am studing in ${this.classRoom}`
    );
  }
}

let t1 = new Teacher("urvish");
console.log("-----------  t1----------->", t1);
let s1 = new Student("Mit", "7-A");
let s2 = new Student("Tejash", "8-B");
console.log("-----------  s1----------->", s1);

t1.login();
s1.login();
t1.printTeacherDetails();
s1.printStudentDetails();


// color modelName company fuelCapacity
// color modelName company ram 
