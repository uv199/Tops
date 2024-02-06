const express = require("express");

const app = express();

app.get("/data", (req, res) => {
  console.log("hello world");
  res.send({ msg: "hello world.....!" });
});

app.get("/msg", (req, res) => {
  res.send("hello world....");
});

app.listen(3000, () => {
  console.log("----server is tarted----->");

  console.log("server is start on port ", 3000);
});
