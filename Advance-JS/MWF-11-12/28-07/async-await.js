let fun2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Urvish");
    }, 2000);
  });
};

async function fun(params) {
  // let fun = async (params) => {
  let abc = await fun2();
  console.log(abc, " patel");
}

fun();
