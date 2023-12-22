const user = {
  name: "urvish",
  age: 23,
  print: function () {
    console.log(`my name is ${this.name}`);
  },
  print2: () => {
    console.log(`my name is ${this.name}`);
  },
};

user.print();
user.print2();

// let name = "urvishs";
// let sentence = `my's "hello" name is ${(name, 5 + 60)}`;
// console.log("-----------  sentence----------->", sentence);
