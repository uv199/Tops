let user = {
  name: "urvish",
  age: 23,
  address: {
    city: "surat",
    pinCode: 395007,
    x: {
      x2: 300,
    },
  },
  no: [[10, 100], 20, 30],
};

// let user2 = { ...user };

let stringify = JSON.stringify(user);
let user2 = JSON.parse(stringify);

user.name = "jay";
user.age = 50;
user.address.city = "baroda";
user.address.x.x2 = 5000;
// user.no[0] = 1000;
user.no[0][0] = 1000000;
console.log("-----------  user----------->", user)

console.log("-----------  user2----------->", user2);
