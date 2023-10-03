try {
  let no = fun2();
  let x = sum(no, 30);
  console.log("x--->", x);
  // let normalData = JSON.parse({});
} catch (err) {
  console.log("-------err------", err.message);
}

function sum(a, b) {
  try {
    // console.log("======-----======");
    return a + b;
  } catch (error) {
    return error.message;
  }
}

function fun2() {
  let arr = [1, 2, 3, 4, 5];

  let x = arr.find((e) => e > 10);
  console.log("x--->", x);
  if (!x) {
    throw new Error("-------no is not find------");
  }
  return x;
}
