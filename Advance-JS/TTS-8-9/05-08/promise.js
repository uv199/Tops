let pro = new Promise((resolve, reject) => {
  if (true) {
    // throw new Error("---ERRRRRR-->");
    setTimeout(() => {
      resolve({ name: "tets" });
    }, 2000);
  } else {
    reject("------not done ------");
  }
});

// pro
//   .then((res) => {
//     console.log("------then=------", res);
//     console.log("------fun2-----");
//   })
//   .catch((err) => {
//     console.log("------catch=------", err);
//   });

pro
  .then((res) => {
    console.log("------then1------", res);
    return res;
  })
  .then((res1) => {
    console.log("------then2------", res1);
    return res1;
  })
  .then((res2) => {
    console.log("------then3------", res2);
  })
  .catch((err) => {
    console.log("------catch=------", err);
  });

let x = pro;
console.log("🚀 ~ file: promise.js:21 ~ x :", x);
