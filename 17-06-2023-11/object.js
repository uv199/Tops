let name = "shinu";
let surname = "patel";

let prDetails = {
  name: "sinu",
  surname: "patel",
  age: 10,
  add: {
    city: "surat",
  },
  vehical: ["passion", "unicon", { a: 10 }],
  fun1: (x) => {
    console.log("x", x);
    return x;
  },
};

// console.log("prDetails :", prDetails.add.city);

// let vehical= ["passion", "unicon", { a: 10 }],
// vehical[1]
// console.log("prDetails :", prDetails.vehical[1]);

// let vehical = ["passion", "unicon", { a: 10 }];
// let obj =  { a: 10 }
// obj.a
// console.log("prDetails :", prDetails.vehical[2].a);

// prDetails.name = "monu";
// console.log("obj2 :", obj2);
// console.log("obj3 :", obj3);

// // console.log("prDetails :", prDetails);
// // console.log("prDetails :", prDetails.name);
// // console.log("add :", prDetails.add);
// // console.log("city :", prDetails.add.city);
// // console.log("vehical :", prDetails.vehical);
// // console.log("a :", prDetails.vehical[2].a);
// // console.log("fun :", prDetails.fun1(100));

// // prDetails.name = "monu";
// // prDetails.firstName = "test";

// // console.log("prDetails :", prDetails.name);
// // console.log("prDetails :", prDetails);

// // to convert in string
console.log("fun :", typeof prDetails);
// console.log("fun :", typeof prDetails.toString());
// console.log("values :", Object.values(prDetails));
// console.log("values :", Object.keys(prDetails));
// console.log("values :", Object.entries(prDetails));

// concat -> to concat two array
// - return new array
let addArr = ["concat", "concat"];
let addArr2 = ["concat2", "concat2"];
// let concatArr = arr.concat(addArr, addArr2);
let concatArr = [...addArr, addArr2];

console.log("concat arr : ", concatArr);

// let add =  addArr.sort()
// add = add.toString()
// addArr.sort().toString()
