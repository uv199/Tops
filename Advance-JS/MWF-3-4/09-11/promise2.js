/*
let PROMIS = new Promise((resolve, reject) => {
  if (true) {
    resolve({ name: "Urvish" });
  } else {
    reject("x is false--->");
  }
});

PROMIS.then((res1) => {
  JSON.parse({ a: 29 });
  console.log("res1-->", res1);
  return { ...res1, age: 25 };
})
  .then((res2) => {
    console.log("res2-->", res2);
    return { ...res2, city: "suart" };
  })
  .then((res3) => {
    console.log("res3-->", res3);
  })
  .catch((err) => {
    console.log("err--->", err.message);
  });

// {x:x} => {x}
*/
let pendingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("-----done------>");
  }, 5000);
});

let x = pendingPromise;
console.log("🚀 ~ file: promise2.js:34 ~ x:", x);

// function fun(params) {
//   return new Promise((resolve, reject) => {

//   })
// }
