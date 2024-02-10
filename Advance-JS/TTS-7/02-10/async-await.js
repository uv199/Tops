let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("------res----->");
    reject("-----somthing is wrong ---->");
  }, 2000);
});

function print(params) {
  console.log("-------print------>");
}

// promisification
function proFun(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello msg...!");
    }, 2000);
  });
}

// async function main(params) {
const main = async (params) => {
  try {
    let res = await p1;
    console.log("-----------  res----------->", res);
    let msg = await proFun();
    console.log("-----------  msg----------->", msg);
    print();
  } catch (error) {
    console.log("-----------  error----------->", error);
  }
};

main();
