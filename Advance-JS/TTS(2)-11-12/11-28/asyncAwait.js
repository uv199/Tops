function fun(params) {
  return new Promise((resolve, reject) => {
    // JSON.parse({});
    setTimeout(() => {
      //   resolve("hello world...!");
      reject("hello error...!");
    }, 2000);
  });
}

function log(x) {
  console.log("x", x);
}

// async function test(params) {
const test = async () => {
  try {
    let x = await fun();
    log(x);
  } catch (error) {
    console.log("error---->", error);
  }
};
test();
