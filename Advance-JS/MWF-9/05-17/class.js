//  first name => FirstName -> pascal case
//  first name => first_name -> snake case
//  first name => firstName -> camle case

class User {
  constructor(name, age) {
    console.log("---->");
    this.name = name; // data membar
    this.age = age;
  }

  // method
  print(no) {
    console.log("-----------  no----------->", no)
    console.log("my name is ", this.name);
  }

  printAge() {
    console.log("my age is ", this.age);
  }
}

let user1 = new User("urvish", 23);
console.log("-----------  user1----------->", user1);
user1.print(100);
let user2 = new User("jenish", 33);
console.log("-----------  user2----------->", user2);
user2.print();
