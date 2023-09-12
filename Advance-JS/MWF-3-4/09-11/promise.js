let PROMIS = new Promise((resolve, reject) => {
  let arr = [1, 2, 3, 4, 6, 5];

  let x = arr.find((e) => e.length > 4);
  //   JSON.parse({ a: 20 });
  //   throw new Error("-----data get some error----");
  if (x) {
    if (x === 5) {
      resolve({ meesage: "x is five", x });
    } else {
      resolve({ meesage: "x is ", x });
    }
  } else {
    reject("x is false--->");
  }
});

// PROMIS.then((res) => {
//   console.log("res-->", res);
// }).catch((err) => {
//   console.log("err--->", err.message);
// });

PROMIS.then((res) => {
  console.log("res-->", res);
})
  .then((res) => {
    console.log("res-->", res);
  })
  .catch((err) => {
    console.log("err--->", err.message);
  });

// {x:x} => {x}
