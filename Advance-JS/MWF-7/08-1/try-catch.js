try {
  console.log("-----line-1------");
  let data = JSON.parse({});
  console.log("-----------  data----------->", data);
  console.log("-----line-3------");
} catch (err) {
  console.log("-----------  err----------->", err.message);
  console.log("----Somthing went wrong----");
}
