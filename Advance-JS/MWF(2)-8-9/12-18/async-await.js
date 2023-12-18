function raju(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 1000 * 60);
  });
}

function shopping(amount) {
  console.log(`give me ${amount} of chocolate`);
}

// async function main(params) {
const main = async () => {
  let gullak = await raju();
  shopping(gullak);
  console.log("-----------  gullak----------->", gullak);
};

main();

const axios = require("axios");

// axios({
//   method: "get",
//   url: "https://fakestoreapi.com/product/1",
// })
//   .then((res) => {
//     console.log("-----------  res----------->", res.data);
//   })
//   .catch((err) => {
//     console.log("---err---->", err.message);
//   });

async function fetchData(params) {
  try {
    let res = await axios({
      method: "get",
      url: "https://fakestoreapi.com/product/1",
    });
    console.log("-----------  res----------->", res.data);
  } catch (error) {
    console.log("----->", error.message);
  }
}

fetchData();
