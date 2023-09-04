let obj = {
  name: "test",
  fun: function () {
    console.log("normal fun ===>", this.name);
  },
  fun1: () => {
    console.log("fat arrow fun ===>", this.name);
  },
};
obj.fun();
obj.fun1();

obj.fun3 = function () {
  console.log("fat arrow fun ===>", this.name);
};
obj.test = "test----->";
console.log("🚀 ~ file: this.js:17 ~ obj:", obj);

obj.fun3();
// console.log([1,2,3]===[1,2,3])
