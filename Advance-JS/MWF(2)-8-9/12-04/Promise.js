let pro = new Promise((resolve, reject) => {
  let x = 10000000;
  if (x > 10000) {
    console.log("----after---->");
    //   JSON.parse({});
    resolve("you can get bike pulsar");
  } else {
    reject("sorry you can't get bike");
  }
});

pro
  .then((res) => {
    
    console.log("res----------->", res);
    return { bike: "pulsar" };
  })
  .then((res2) => {
    console.log("res2--------->", res2);
  })
  .catch((err) => {
    console.log("err------>", err);
  });

let pro2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello World.....!");
  }, 2000);
});

let x = pro2;
console.log("x", x);
