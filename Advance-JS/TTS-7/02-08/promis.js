let p1 = new Promise((resolve, reject) => {
  let age = 40;
  let msg = "age is greter 6then 18";
  let obj = { age, msg: msg };
  //   JSON.parse(obj);
  resolve(obj);
  //   reject("somthing is wrong");
});

p1.then((response) => {
  console.log("-----------  response----------->", response);
  return "test return";
})
  .then((response2) => {
    console.log("-----------  response2----------->", response2);
  })
  .catch((error) => {
    console.log("-----------  error----------->", error.message);
  });

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("------resolve--->");
  }, 2000);
});

// let data = p2;
// console.log("-----------  data----------->", data);
