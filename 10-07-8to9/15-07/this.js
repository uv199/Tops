let data = {
  name: "test",
  age: 20,
  dob: 2000,
  printName: () => {
    console.log("---->", this.name);
  },
  printAge: function () {
    console.log("---->", this.age);
  },
};

data.printDOB = function () {
  console.log("", this.dob);
};

data.printName();
data.printAge();
data.printDOB();
