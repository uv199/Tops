const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("hello world");
  res.send({ msg: "hello world.....!" });
});

app.get("/msg", (req, res) => {
  res.send("hello world....");
});

app.post("/test-body", (req, res) => {
  console.log("--->", req.body);
});

app.post("/test-header", (req, res) => {
  console.log("--->", req.headers);
});
app.post("/test-params", (req, res) => {
  console.log("--->", req.params);
});


app.listen(3000, () => {
  console.log("----server is tarted----->");
  console.log(`your server is running on http://localhost:3000`);
});
