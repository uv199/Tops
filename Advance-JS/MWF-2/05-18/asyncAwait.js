function RohitPromise(params) {
  return new Promise((resolve, reject) => {
    let data = [];

    if (data.length === 0) {
      reject("gar vale nahi mane");
    } else {
      setTimeout(() => {
        resolve("gar vale man gaye...!");
      }, 2000);
    }
  });
}

async function main(params) {
  try {
    let response = await RohitPromise();
    console.log("-----------  response----------->", response);
  } catch (error) {
    console.log("somthing went wrong");
  }
}

main();

/*
async functin fetchData(){
    try{
        let data = await  axios.get("url")
    }catch(error){
        handle error
    }
}

*/
