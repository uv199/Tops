let user = {
  name: "urvish",
  age: 23,
  address: {
    city: "surat",
    pinCode: 395007,
  },
  no: [10, 20, 30],
};

let user2 ={...user};

user.name = "jay";
user.age = 50;
user.address.city = "baroda";
user.no[0] = 1000;

console.log("-----------  user2----------->", user2);
