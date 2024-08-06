let user = {
  name: "urvish",
  print: function () {
    console.log("my name is ", this.name);
  },
  print2: () => {
    console.log("my name is ", this.name);
  },
};

user.print();
user.print2();

let test = () => "test";
let x = test()
console.log("-----------  x----------->", x)
