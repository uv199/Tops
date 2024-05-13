let user = {
  name: "uv",
  //   age: 23,
  //   address: {
  //     city: "surat",
  //     pin: 395007,
  //   },
  //   print: () => {
  //     console.log("---->");
  //   },
  //   hobby: [10, 20, 30],
};

console.log("-----name---->", user.name);
console.log("-----age---->", user.age);
console.log("-----city---->", user?.address?.city);
console.log("-----hobby 1---->", user?.hobby?.[0]);
user?.print?.();

user?.name === "test";
