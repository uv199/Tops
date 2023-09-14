function fun1(params) {
  return new Promise((resolve, reject) => {
    // throw new Error("----data not found--->");
    setTimeout(() => {
      resolve("-----resolve----->");
    }, 3000);
  });
}

// const asyncFun = async (params) => {
async function asyncFun(params) {
  try {
    let x = await fun1();
    console.log("x", x);
  } catch (error) {
    console.log("------>", error);
  }
}
// asyncFun();

fun1().then((res) => {
  console.log("--res-->", res);
});
