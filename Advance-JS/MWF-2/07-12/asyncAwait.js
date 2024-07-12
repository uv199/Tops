function fetchData(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Date get successFully");
    }, 2000);
  });
}

async function fun(params) {
  try {
    let data = await fetchData();
    console.log("-----------  data----------->", data);
  } catch (error) {
    console.log("-----------  error----------->");
  }
}

fun();
