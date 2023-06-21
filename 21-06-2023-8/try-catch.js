// let pro = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("hello");
//   } else {
//     reject("nathi malyu...!");
//   }
// });

// pro
//   .then((res) => {
//     // console.log("okay");
//     return res + "-world";
//   })
//   .then((res1) => {
//     console.log(res1);
//   })
//   .catch((err) => {
//     console.log("not - okay");
//   });

let pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("----->promise");
    resolve();
  }, 1000);
});

function f(params) {
  if (true) {
    return "hello";
  } else {
    return "nathi malyu...!";
  }
}

let f1 = (res) => {
  console.log("res :", res);
  // throw new Error("error....!");
  return res + "-okay";
};
let f3 = (res) => {
  console.log("res --->:", res);
};

async function fun(params) {
  // let fun =  async(params)=> {
  try {
    let x1 = f();
    console.log("x1 :", x1);
    let x2 = f1(x1);
    await pro;
    f3(x2);
  } catch (error) {
    console.log("error :", error);
  }
}

fun();
