let user = {
  name: "strig",
  num: 123,
  nul: null,
  und: undefined,
  bool: true,
  obj: {
    a: 200,
    b: 800,
  },
  arr: [1, 2, 3, 4, 5, { hello: "WOrld" }],
};

// number string undfined null boolen array object

// console.log("===>", user.obj.a);
// console.log("----->", user.arr[3]);
// console.log("----->", user.arr[5].hello);

let obj = {
  1: "red",
  2: "blue",
  "first name": "urvish",
  "test?": "string",
};

console.log("----->", obj[1]);
obj[1];
obj["first name"];
console.log("----->", obj["first name"]);

let x = "2";

console.log("---color is ----", obj[x]);

// object

let keys = Object.keys(user);
console.log("-----------  keys----------->", keys);

let value = Object.values(user);
console.log("-----------  value----------->", value);

//  useCase

//
let abc = {
  title: "Key Holder",
  description:
    "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
  brand: "Oppo",
  gender: "male",
  price: 100,
  discountPercentage: 8,
  category: ["smartphones", "3g", "4g"],
  color: ["red", "black", "white"],
  size: ["44", "45", "42", "43", 600, 200],
  isAvailable: true,
  availableStock: 54,
  rating: 485,
  totalRaters: 123,
  totalSoldUnit: 0,
};
600/200

let avarage = abc.rating / abc.totalRaters;
console.log("-----------  avarage----------->", avarage);

let avg = abc.size[4] / abc.size[5];
console.log("-----------  avg----------->", avg);

// print description
// print white color
// print "45" size
// avrage rating for display star
// get real price after discount

let amount = (abc.discountPercentage * 100) / abc.price;
console.log("-----------  amount----------->", amount);

let finalPrice = abc.price - amount;
console.log("-----------  finalPrice----------->", finalPrice);
