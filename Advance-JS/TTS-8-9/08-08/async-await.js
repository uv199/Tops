let pro = new Promise((resolve, reject) => {
  throw new Error("---err--->");
  //   setTimeout(() => {
  //     resolve("my name is this...");
  //   }, 1000);
});

function fun1(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("my name is this...");
    }, 2000);
  });
}

async function fun(params) {
  try {
    pro.then((res) => {});
    fun1().then((res) => {});

    let res = await pro;
    // console.log(" res:", res);
    let res1 = await fun1();
  } catch (error) {
    console.log("----====-0--0==-", error);
  }
}

// let fun = async (params) => {
//   let res = pro;
// };

fun();
