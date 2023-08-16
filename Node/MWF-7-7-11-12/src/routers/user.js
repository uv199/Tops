import express from "express";
import User from "../models/user";

const userRouter = express.Router();

// userRouter.get("/sanket", (req, res) => {
userRouter.get("/sanket", (req, res) => {
  console.log("User:", User);
  User.create({ name: "sanket", email: "sanket@gmail.com", number: 789546412 });
  console.log(typeof res);
  res.send("hello sanket...!");
});

userRouter.get("/urvish", (req, res) => {
  res.send("hello urvish...!");
});

export default userRouter;

// teacher : name,email,password,add,classTeacher:id,subject,salary,gender
// student : name,email,password,add,classTeacher:id,subject,fees,gender
// admin : name,email,password,add
// class : name,div,teacher:id,monitor:id,studentcount,


// user : name,email,password,add,classTeacher:id,subject,salary,gender,fees type : "admin/teacher/stuident" // usertype:id
userType:""
//class : name,div,teacher:id,monitor:id,studentcount,
