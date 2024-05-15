let activaPromise = new Promise((resolve, reject) => {
  const isPromiseDone = true;
  if (isPromiseDone) {
    // throw new Error("gashdghjsdghj")
    resolve("Chetan have bought a activa for his GF");
  } else {
    reject("Chetan cant buy a active for his GF");
  }
});

activaPromise
  .then((res) => {
    console.log("res-->", res);
    return "test return ";
  })
  .then((res2) => {
    console.log("res2-->", res2);
    throw new Error("gashdghjsdghj");
  })
  .then((res3) => {
    console.log("res3-->", res3);
  })
  .catch((err) => {
    console.log("err-->", err);
  });


