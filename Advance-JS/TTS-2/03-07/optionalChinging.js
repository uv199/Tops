let obj = {
  name: "urvish",
  // address: {
  //   pincode: 395007,
  //   city: "surat",
  // },
  // printName: function () {
  //   console.log("hello world");
  // },
};

console.log("name", obj.name);
console.log("name", obj?.address?.city);
obj?.printName?.();
