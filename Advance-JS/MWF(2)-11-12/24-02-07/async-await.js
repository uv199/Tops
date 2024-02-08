// ptomisification
function fun1(params) {
  return new Promise((resolve, reject) => {
    throw new Error("Somthing is wrong");
    setTimeout(() => {
      resolve("urvish v patel");
    }, 1000);
  });
  //   setTimeout(() => {
  //     return "bhfjbgasdhjfgkjs";
  //   }, 2000);
}

function fun2(name) {
  console.log("my name is ", name);
}

// async function main() {
const main = async () => {
  try {
    let name = await fun1();
    console.log("-----------  name----------->", name);
    fun2(name);
  } catch (error) {
    console.log("-----------  error----------->", error.message);
  }
};

main();
