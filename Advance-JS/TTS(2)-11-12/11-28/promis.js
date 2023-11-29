let pro = new Promise((resolve, reject) => {
  let x = 100;
// JSON.parse({});
  if (x > 10) {
    resolve("promise done====>");
  } else {
    reject("promise Reject--->");
  }
});

/*
pro
  .then((res) => {
    console.log("res-----", res);
  })
  .catch((err) => {
    console.log("err====>", err);
  });

*/

pro
  .then((res) => {
    console.log("res1-----", res);
    return res + "hello";
  })
  .then((res2) => {
    console.log("res2-----", res2);
  })
  .then((res3) => {
    console.log("res3-----", res3);
  })
  .catch((err) => {
    console.log("err====>", err);
  });

let pro2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("------test----->");
  }, 2000);
});

let x = pro2;
console.log("x", x);
