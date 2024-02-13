const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("hello world");
  res.send({ msg: "hello world.....!" });
});

app.get("/msg", (req, res) => {
  res.send("hello world....");
});

// main data
app.post("/test-body", (req, res) => {
  console.log("--->", req.body);
});

// small lable data
app.post("/test-header", (req, res) => {
  console.log("--->", req.headers);
});

// query data like limit some filters
app.post("/test-query-params", (req, res) => {
  console.log("--->", req.query);
});

// params data like single data like delete id update id
app.post("/test-params/:id", (req, res) => {
  console.log("--->", req.params);
});

mongoose
  // .connect("mongodb://localhost:27017/tts8")
  .connect("mongodb://127.0.0.1:27017/tts8")
  .then(() => {
    console.log("database conncetion successfully");
  })
  .catch((err) => {
    console.log("-----connection error--->", err);
  });

let userSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  { timestamps: true }
);

let User = mongoose.model("user", userSchema);

app.post("/add-user", (req, res) => {
  // User.create({ Name: "hello ----kashyap", age: 24 }, (err, res) => {
  //   if (err) err;
  //   else return res;
  // });

  User.create({ name: "hello ----kashyap", age: 10 })
    .then((resData) => {
      console.log("-----------  resData----------->", resData);
      res.send(resData);
    })
    .catch((err) => {
      console.log("-----------  err----------->", err);
    });
});

app.listen(3000, () => {
  console.log("----server is tarted----->");
  console.log(`your server is running on http://localhost:3000`);
});
