let obj = {
  name: "urvish",
  fun: function () {
    console.log("---name-->", this.name);
  },
  fun1: () => {
    console.log("---name 1-->", this.name);
  },
};
obj.fun();
obj.fun1();
