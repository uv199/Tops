// single thing multy details
let person = {
  name: "uv",
  age: 23,
};

// let x =
let obj = {
  str: "hello world",
  num: 123,
  nul: null,
  und: undefined,
  bol: true,
  arr: [10, 20, 30, 40],
  object: { city: "surat", pin: { a: 20, b: 50 } },
  print: function (params) {
    console.log("---print--->");
  },
};

let x = [1, 2, 3, 4];
console.log("-----------  x[2]----------->", x[2]);

console.log(obj.str);
console.log(obj.und);
console.log(obj.object.city);
console.log(obj.object.pin.b);
console.log(obj.arr[2]);

obj.print();

let productData = {
  title: "Flying Wooden Bird",
  description:
    "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
  brand: "Oppo",
  gender: "male",
  price: 51,
  discountPercentage: 15.58,
  category: ["smartphones", "3g", "4g"],
  color: ["red", "black", "white"],
  size: ["44", "45", "42", "43"],
  isAvailable: true,
  availableStock: 17,
  rating: 0,
  totalRaters: 0,
  totalSoldUnit: 0,
};
