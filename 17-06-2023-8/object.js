let name = "shinu";
let surname = "patel";

let prDetails = {
  name: "sinu",
  surname: "patel",
  age: 10,
  //   add: {
  //     city: "surat",
  //   },
  //   vehical: ["passion", "unicon", { a: 10 }],
  //   fun1: (x) => {
  //     console.log("x", x);
  //     return x;
  //   },
};

let obj2 = prDetails; // it will refrence
let obj3 = {};
obj3 = { ...prDetails };

// for (let key in prDetails) {
//   //   console.log("key :", key);
//   obj3[key] = prDetails[key];
// }

prDetails.name = "monu";
console.log("obj2 :", obj2);
console.log("obj3 :", obj3);

// console.log("prDetails :", prDetails); 
// console.log("prDetails :", prDetails.name);
// console.log("add :", prDetails.add);
// console.log("city :", prDetails.add.city);
// console.log("vehical :", prDetails.vehical);
// console.log("a :", prDetails.vehical[2].a);
// console.log("fun :", prDetails.fun1(100));

// prDetails.name = "monu";
// prDetails.firstName = "test";

// console.log("prDetails :", prDetails.name);
// console.log("prDetails :", prDetails);

// to convert in string
// console.log("fun :", typeof prDetails);
// console.log("fun :", typeof prDetails.toString());
// console.log("values :", Object.values(prDetails));
// console.log("values :", Object.keys(prDetails));
// console.log("values :", Object.entries(prDetails));

let arr = [10, 20];
let obj = { a: 10, b: 20 };
let { a, b } = obj; // let a = obj.a node - have to compulsory give same name to variable
console.log("a ,b :", a, b);
let x, y;
[x, y] = arr;
console.log("x, y :", x, y);
let arr2 = [10, 20, 30, 40, 50];


