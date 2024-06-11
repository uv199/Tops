/*

let e = ["chocolate", "strawberry"];

// [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
// ];

let data = e.map((obj) => {
  console.log("----", obj);
  return { value: obj, lable: obj };
});
console.log("-----------  data----------->", data);



let arr = ["uv0", "uj", "jay", "latesh", "sid"];

let serahcText = "j";

let taskArr = [];

taskArr = arr.filter((e) => {
  return e.includes(serahcText);
});
console.log("-----------  taskArr----------->", taskArr);

// let model = [1, 2, 3, 4];
let car = { model: [1, 2, 3, 4] };
// true - 2 => model = [...model,2]
// false - 2

let filter = car.model.filter((e) => e !== 2);
// model = filter;
car = { ...car, mode: filter };
console.log("-----------  filter----------->", filter);

const color = ["red", "green"];

let neededDataType = color.map((e) => {
  return { value: e, label: e };
  });
  console.log("-----------  neededDataType----------->", neededDataType);
  */

function totalSum(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  console.log("🚀 ~ totalSum ~ :", total);
}
totalSum(115);
