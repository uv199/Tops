let relative = new Promise((resolve, reject) => {
  let x = 90;
  let isShopOpen = true;
  if (x >= 10) {
    // throw new Error("---->test--err----->"); // jump to catch block
    resolve(x);
    if (isShopOpen) {
      console.log("------>");
      resolve("shop is open");
    } else {
      reject("shop is close");
    }
  } else {
    reject("you can't get");
  }
});

relative
  .then((res) => {
    console.log("-----------  res----------->", res);
    console.log("you can go shop");
    return res - 10;
  })
  .then((res) => {
    console.log("-----------  res-2----------->", res);
    console.log("-----------  then-2----------->");
  })
  .catch((err) => {
    console.log("-----------  err----------->", err);
    console.log("you can't go");
  });
