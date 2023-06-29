let pro = new Promise((resolve, reject) => {
  //let a = [1,2,3,4,5]
  //   console.log("1234");
  if (10 > 5) {
    console.log("if");
    // throw new Error("erroorr------");
    ("jalpa");
    resolve("data");
  } else {
    reject(false);
  }
});

pro;
console.log("pro :", pro);
pro
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("====>", err);
  });

pro
  .then((res) => {
    console.log("res -----:", res);
    // throw new Error("erroorr------");
    return "then - 1 ";
  })
  .then((res1) => {
    console.log("res1 :", res1);
  })
  .catch((err) => {
    console.log("====>", err);
  });
