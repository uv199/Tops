let data = () => {
  //   throw new Error({ code: 400, msg: "data not found" });
  return "test--->";
};

// try {
//   let d = data();
//   console.log("d :", d);
// } catch (error) {
//   //   console.log("error =====>:", error);
// }

async function main(params) {
  try {
    let d = await data();
    // let d = await data();
    // let d = await data();
    console.log("d :", d);
  } catch (error) {
    //   console.log("error =====>:", error);
  }
}
main();
