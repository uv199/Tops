let api = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("done....!");
    reject("somthing missing....!");
  }, 1000);
});

// function fun(params) {
//   setTimeout(() => {
//     return "fun data...!";
//   }, 1000);
// }

// promisoification
function fun(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fun data...!");
    }, 1000);
  });
}

// async function main(params) {
const main = async (params) => {
  try {
    console.log("=--=-==-=->");
    let data = await api;
    console.log("-----------  data----------->", data);
    let funD = await fun();
    console.log("-----------  funD----------->", funD);
  } catch (error) {
    console.log("-----------  error----------->", error);
  }
};
main();
