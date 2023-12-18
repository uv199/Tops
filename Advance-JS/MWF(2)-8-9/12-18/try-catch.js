try {
  console.log("hello world");
//   throw new Error("test----err")
  JSON.parse("{}");
  console.log("hello world-2");
} catch (err) {
  console.log("-----------  err----------->", err.message);
  console.log("err---->");
}
