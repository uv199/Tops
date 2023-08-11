let x1 = {
  name: "vivek",
  age: 28,
};

function printName(params) {
  console.log(x1.name);
}

class Person {
  constructor(name) {
    console.log("constroctor ");
    // let name= "test"
    this.name = name;
  }
  printName(params) {
    console.log("---->", this.name);
  }
}

let vivek = new Person("vivek");
let banti = new Person("banti");
console.log("banti :", banti);
console.log("vivek :", vivek);
vivek.printName();
banti.printName();
