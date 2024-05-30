//  Promification - If any function returns a promise, we call it a promisification

// async await - It is used to wait until a promise gives a response. If a promise takes some time to respond, JavaScript moves to the next line, but if we want to wait until the promise resolves, we use async and await.

function api(params) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      // resolve("Hello you can get data");
      reject("Error generated ");
    }, 5000);
  });
}

// let returnStatement = api();
// console.log("🚀 ~ returnStatement:", returnStatement)

async function callApi(params) {
  try {
    let returnStatement = await api();
    console.log("🚀 ~ returnStatement:", returnStatement);
  } catch (error) {
    console.log("🚀 ~ callApi ~ error:", error);
  }
}
callApi();
