const express = require("express");

const userRouter = express.Router();

// userRouter.get("/sanket", (req, res) => {
userRouter.get("/sanket", (req, res) => {
  console.log(typeof res);
  res.send("hello sanket...!");
});

userRouter.get("/urvish", (req, res) => {
  res.send("hello urvish...!");
});

module.exports = userRouter;
