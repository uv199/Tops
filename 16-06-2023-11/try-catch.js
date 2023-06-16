// const f1 = (x) => {
//   console.log("x :", x);
//   console.log("f1");
//   return x + 1;
// };
// const f = (x) => {
//   console.log("x :", x);
//   console.log("f");
//   setTimeout(() => {
//     console.log("test");
//     return x + 1;
//   }, 500);
// };

// const f2 = (x) => {
//   console.log("x :", x);
//   console.log("f2");
//   return x + 1;
// };
// // function fun() {
// //   //   throw new Error("bas stop");
// //   setTimeout(() => {
// //     console.log("test");
// //   }, 5000);
// // }
// async function mainFun() {
//   //const mainFun = async(x)=> {
//   try {
//     console.log("---------------------");
//     let x1 = await f(0);
//     let x2 = f1(x1);
//     //   fun();
//     let x3 = f2(x2);

//     console.log("x3 :", x3);
//   } catch (error) {
//     console.log("error :", error);
//   }
// }

// mainFun();

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
        console.log('res')
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = resolveAfter2Seconds();
  console.log("called", result);
  // Expected output: "resolved"
}

asyncCall();
