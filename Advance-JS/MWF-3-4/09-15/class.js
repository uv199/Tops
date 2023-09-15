class User {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  sum(c) {
    return this.a + this.b + c;
  }
  sub() {
    return this.b - this.a;
  }
}

let U = new User(50, 70);
let V = new User(100, 220);
// let m = new User();
let x = U.sum();
let y = V.sum(1500);
console.log("y", y);
let ySub = V.sub();
let xSub = U.sub();

class GmailData {
  constructor(email) {
    this.email = email;
  }
  giveName(c) {
    return this.email.split("@")[0];
  }
}

let G = new GmailData("urvis---h@gmail.com");
let name = G.giveName();
console.log("name---------->", name);
