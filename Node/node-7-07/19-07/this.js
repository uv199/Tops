let data = {
  name: "urvish",
  age: 20,
  printName: () => {
    console.log("------>", this.name);
  },
  printAge: function (x) {
    console.log("------>", this.age + x);
  },
};

data.print = function () {
  console.log("---", this.name, this.age);
};
data.printName();
data.printAge(5);
data.print();
