let p1 = new Promise((resolve, reject) => {
  // code
  let age = 20;
  if (age > 18) {
    // JSON.parse({ age: 23 });
    resolve("You allow to drink");
  } else {
    reject("Not allow");
  }
});

p1.then((res) => {
  console.log("-----------  res----------->", res);
  return "return from then 1";
})
  .then((res2) => {
    console.log("-----------  res2----------->", res2);
    // JSON.parse({ age: 23 });
  })
  .then((res3) => {
    console.log("-----------  res3----------->", res3);
  })
  .catch((err) => {
    console.log("-----------  err----------->", err);
  });
