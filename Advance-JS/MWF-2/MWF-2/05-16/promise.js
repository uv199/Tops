let RohitPromise = new Promise((resolve, reject) => {
  //  find data from data base
  let data = ["test"];

  if (data.length === 0) {
    reject("gar vale nahi mane");
  } else {
    resolve("gar vale man gaye...!");
  }
});

RohitPromise.then((res) => {
  console.log("---> we will marry");
})
  .then((res) => {
    throw new Error("tets");
  })
  .then((res) => {
    console.log("---> we will be a good perent");
  })
  .catch((err) => {
    console.log("---> we will try again");
  });

// axios
//   .get("url")
//   .then((res) => {})
//   .then(() => {})
//   .catch((err) => {});
