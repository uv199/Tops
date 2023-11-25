try {
  test1();
  test1();
  let data = test2();
  console.log("data", data);
  test3();
  test1();
} catch (error) {
  console.log("error----------->", error.message);
}

function test1(params) {
  console.log("------test-1------");
}

function test3(params) {
  throw new Error("data not found");
}

function test2(params) {
  try {
    return JSON.parse({ name: "test" });
  } catch (error) {
    return { message: "somting went wrong " };
  }
}
