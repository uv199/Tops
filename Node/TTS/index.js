const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ msg: "hello world.....!" });
});

app.get("/msg", (req, res) => {
  res.send("hello world....");
});

// main data
app.post("/test-body", (req, res) => {
});

// small lable data
app.post("/test-header", (req, res) => {
});

// query data like limit some filters
app.post("/test-query-params", (req, res) => {
});

// params data like single data like delete id update id
app.post("/test-params/:id", (req, res) => {
});

mongoose
  // .connect("mongodb://localhost:27017/tts8")
  .connect("mongodb://127.0.0.1:27017/tts8")
  .then(() => {
  })
  .catch((err) => {
  });

let userSchema = mongoose.Schema({
  name: String,
  age: Number,
});

let User = mongoose.model("user", userSchema);

app.post("/add-user", (req, res) => {
  User.create(req.body)
    .then((resData) => {
      res.send(resData);
    })
    .catch((err) => {
    });
});

app.get("/getAll", (req, res) => {
  User.find({ name: "parth patel" })
    .then((resData) => {
      res.send(resData);
    })
    .catch((err) => {
    });
});

app.listen(3000, () => {
});
