import express from "express";
import userRouter from "./routers/user";
import { dbConnection } from "./db";
import User from "./models/user";

const app = express();

app.get("/create/urvish", (req, res) => {
  res.send("you first api called ---- sanket");
  User.create({
    name: "urvish",
    email: "urvish@gmail.com",
    number: "tetsg9546412",
  })
    .then((res) => {
      console.log("----res----", res);
    })
    .catch((err) => {
      console.log("----err----", err);
    });
});

app.use("/user", userRouter);
app.listen(3000, () => {
  dbConnection();
  console.log(`your server is running on http://localhost:3000/`);
});
