const express = require("express");
const userRouter = require("./routers/user");
const app = express();

// app.get("/user/urvish", (req, res) => {
//   console.log("urvish patel");
//   //   console.log(res);
//   res.send("you called api urvish---");
// });

// app.get("/user/sanket", (req, res) => {
//   console.log("sanket -- patel");
//   //   console.log(res);
//   res.send("you called api- sanket");
// });

app.get("/", (req, res) => {
  res.send("you first api called - sanket");
});

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log(`your server is running on http://localhost:3000/`);
});
