let promise = new Promise((resolve, reject) => {
  //   resolve({ name: "tej" }); + {age:19}
  let arr = [1, 2, 3, 4, 5];

  let isExist = arr.includes(1);

  // if (isExist === true) { // 1=='1' 1==='1'
  if (isExist) {
    // false , 0,null , undefined
    // 1=='1' 1==='1'
    resolve("tej");
  } else {
    reject("data not found");
  }
  //   reject("reject");
  // console.log('res')
});

// promise
//   .then((res) => {
//     console.log("res :", res);
//     return res + "okay";
//   })
//   .then((res2) => {
//     console.log("res2", res2);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

// let fun1 = () => {
//   setTimeout(() => {
//     return "okay";
//   }, 5000);
// };



let value = fun1();
console.log(value);

// mainFun(fun1)
// fun1 (fun2)
// fun2(fun3)
// fun3()

// const  mainFun=(fun1)=> {

//   fun1(fun2){
//     fun2(fun3){
//       fun3(){

//       }
//     }
//   }
// }

// const f1 = (f2) => {
//   console.log("f1");
//   f2(f3);
// };
// const f = (f1) => {
//   console.log("f");
//   return f1(f2);
// };

// const f3 = () => {
//   console.log("f3");
// };

// f(f1);

// arr.find((ele)=>{
// ele
//   res.find((ele)=>{
// res.filter((ele)=>{

// })
//   })
// })
