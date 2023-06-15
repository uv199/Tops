let promise = new Promise((resolve, reject) => {
  //   resolve({ name: "tej" }); + {age:19}
  let arr = []
  resolve("tej");
   let data =  
    reject("data not found");
  //   reject("reject");
  // console.log('res')
});

promise
  .then((res) => {
    console.log("res :", res);
     res + "okay";
  })
  .then((res) => {
    console.log("res2", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
