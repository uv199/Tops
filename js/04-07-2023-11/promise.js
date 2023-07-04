let data = new Promise((resolve, reject) => {
  resolve("test");
  reject("not found");
});

data
  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
