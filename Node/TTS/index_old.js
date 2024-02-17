// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const app = express();

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send({ msg: "hello world.....!" });
// });

// app.get("/msg", (req, res) => {
//   res.send("hello world....");
// });

// // main data
// app.post("/test-body", (req, res) => {});

// // small lable data
// app.post("/test-header", (req, res) => {});

// // query data like limit some filters
// app.post("/test-query-params", (req, res) => {});

// // params data like single data like delete id update id
// app.post("/test-params/:id", (req, res) => {});

// mongoose
//   // .connect("mongodb://localhost:27017/tts8")
//   .connect("mongodb://127.0.0.1:27017/tts8")
//   .then(() => {})
//   .catch((err) => {});

// let userSchema = mongoose.Schema(
//   {
//     name: String,
//     age: Number,
//   },
//   { timestamps: true }
// );

// let User = mongoose.model("user", userSchema);

// // to create user
// app.post("/add-user", (req, res) => {
//   User.create(req.body)
//     .then((resData) => {
//       res.send(resData);
//     })
//     .catch((err) => {});
// });

// // to get all  user
// app.get("/getAll", (req, res) => {
//   User.find({ name: "parth patel" })
//     .then((resData) => {
//       res.send(resData);
//     })
//     .catch((err) => {});
// });

// // to update user
// app.put("/user-update/:id", (req, res) => {
//   let id = req?.params?.id;
//   User.findByIdAndUpdate(id, req?.body, { new: true })
//     .then((resData) => {
//       res.send(resData);
//     })
//     .catch((err) => {});
// });

// // to delete user
// app.delete("/user-delete/:id", (req, res) => {
//   User.findByIdAndDelete(req?.params?.id)
//     .then((resData) => {
//       console.log("-----------  resData----------->", resData);
//       res.send("Data deleted...!");
//     })
//     .catch((err) => {});
// });

// app.listen(3000, () => {
//   console.log(`server is runing on http://localhost:${3000}`);
// });
