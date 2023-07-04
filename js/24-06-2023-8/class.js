class User {
  sum(a, b, c) {
    console.log("perents--->");
  }
}
class Student extends User {
  sum(a, b) {
    console.log("------> child");
  }
  sum(a, c) {
    console.log("------> child2");
  }
}

let test = new Student();
test.sum(1, 2, 4);
