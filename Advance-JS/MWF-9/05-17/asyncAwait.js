function fetchData(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({ name: "urvish", age: 23 });
      reject("somthing is wrong");
    }, 500);
  });
}

// async function getData(params) {
const getData = async () => {
  try {
    let data = await fetchData();
    console.log("-----------  data----------->", data);
  } catch (error) {
    console.log("somthing is wrong");
  }
};

getData();

function fetchData(params) {
  axios("url")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
async function fetchData(params) {
  try {
    let data = await axios("url");
  } catch (error) {
    console.log("msg");
  }
}
