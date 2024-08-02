/*

1 0
2 5
3 1
4 0 
5 0 
syncronus => 1 -> 2 -> 3 -> 4 -> 5
asyncronus  => 1 -> 4 -> 5 -> 3 -> 2 
*/

// async await => if any promise take some time to give response then code will exicute next line, but you want to exicute next line after getting response from promise then you should use async await.

function fetchData(params) {
  return new Promise((resolve, reject) => {
    throw new Error("somthing went wrong");
    setTimeout(() => {
      resolve("Data get successfully");
    }, 3000);
  });
}

async function getData(params) {
  try {
    let response = await fetchData();
    let response2 = await fetchData();
    console.log("-----------  response2----------->", response2);
    console.log("-----------  response----------->", response);
  } catch (error) {
    console.log("-----------  error----------->", error);
  }
}
getData();
