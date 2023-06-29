let user = {
  name: "jalpa",
  age: 23,
  
};

user.printAge = function () {
  return this.age;
};

console.log(user.printAge());

user.addAge = function (x) {
  return this.age + x;
};
console.log(user.addAge(50));
console.log(user.addAge(10));
