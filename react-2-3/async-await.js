// let pro = new Promise((resolve, reject) => {
//   // throw new Error("this is error--- ");
//   reject("data not found");
//   setTimeout(() => {
//     resolve("pro---1");
//   }, 2000);
// });

// async function fun1(params) {
//   const data = await pro;
//   console.log("data :", data);
// }
// fun1();

// ------------------------------------------------------------------------

// try-catch

// async function fun1(params) {
//   try {
//     const data = await pro;
//     console.log("data :", data);
//   } catch (error) {
//     console.log("error ------>", error);
//   }
// }
// fun1();

// try {
//   console.log("test----->1");
//   throw new Error("data not found ");
//   console.log("test----->2");
// } catch (error) {
//   console.log("error --------------->:", error);
// }

// ------------------------------------------------------------------------
let data = [
  {
    name: "uv",
    hindi: 10,
    math: 60,
  },
  {
    name: "jalpa",
    hindi: 100,
    math: 30,
  },
  {
    name: "chinmay",
    hindi: 50,
    math: 30,
  },
];

let max = 0;
let student = {};

data.map((e) => {
  let total = e.hindi + e.math / 2;
  if (total > max) {
    student = { ...e };
    max = total;
  }
  // max < e.hindi + e.math / 2
  //   ? ((student = { ...e }), (max = e.hindi + e.math / 2))
  //   : null;
});

console.log("student :", student);
