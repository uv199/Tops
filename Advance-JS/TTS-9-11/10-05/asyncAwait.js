function fun1(params) {
  return new Promise((resolve, reject) => {
    reject("---errr-----");
    setTimeout(() => {
      //   resolve({ name: "URVISH", city: "SURAT" });
    }, 2000);
  });
}

function print(obj) {
  console.log(`My name is ${obj.name}`);
  console.log(`My city is ${obj.city}`);
}

// async function mainFun(params) {
// const mainFun = async () => {
//   const data = await fun1();
//   console.log("data", data);
//   print(data);
// };
// err handle
const mainFun = async () => {
  try {
    const data = await fun1();
    console.log("data", data);
    print(data);
  } catch (error) {
    console.log("error====----->", error);
  }
};

mainFun();
