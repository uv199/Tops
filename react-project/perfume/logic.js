let data = {
  name: "mr. gray",
  userType: "customer",
  email: "gray@gmail.com",
  number: "7895461230",
  password: "$2b$12$XjY0awULd6KWNX1aQ3fKGeEv6I2nDbTyeKYlVnY5ZAq.Qho5Y/d8O",
  age: 23,
  address: [
    {
      add: "01",
      city: "city name",
      state: "state name",
      pinCode: "city name",
    },
  ],
};

let user = {
  name: "mr. gray",
  userType: "customer",
  email: "gray@gmail.com",
  number: "7895461230",
  password: "$2b$12$XjY0awULd6KWNX1aQ3fKGeEv6I2nDbTyeKYlVnY5ZAq.Qho5Y/d8O",
  age: 23,
};

let address = {
  add: "01",
  city: "city name",
  state: "state name",
  pinCode: "city name",
};

let finalObj = {
  ...user,
  address: [address],
};
console.log("-----------  finalObj----------->", finalObj);
