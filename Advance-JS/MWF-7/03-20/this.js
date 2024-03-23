let obj = {
  a: 10,
  b: 20,
  c: 30,
  print: function () {
    console.log(this.b);
  },
  print2: () => {
    console.log("fat arrow ====>", this);
  },
};

obj.print();

obj.print2();
