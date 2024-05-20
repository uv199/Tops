let obj = {
  name: "urvish",
  age: 23,
  print: function () {
    console.log("My name is ", this.name);
  },
};


obj.print();