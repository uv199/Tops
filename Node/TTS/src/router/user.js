import express from "express";
import { User } from "../model/user";
import jwt from "jsonwebtoken";
import { adminAuth, auth } from "../auth/auth";
import { sendMail, sendOtp } from "../functions/emailHandler";
import {
  deleteUser,
  getAll,
  login,
  otpSignin,
  passwordReset,
  sendOTP,
  signUp,
  update,
} from "../controller/user";

const router = new express.Router();

const generateToken = (resData) => {
  let token = jwt.sign({ email: resData.email, _id: resData?._id }, "131231");
  return token;
};

router.get("/getAll", getAll);

router.post("/signup", signUp);

router.put("/update/:id", update);

router.put("/password-reset/:id", auth, passwordReset);

router.post("/login", login);

router.post("/delete/:id", adminAuth, deleteUser);

router.post("/sendOtp", sendOTP);

router.post("/otp-login", otpSignin);

export default router;

/*
findById(id,projection) => User.findById("1223",{name:-1}) => {}
findOne(filter,projection) => User.findOne({name:"urvish",...etc},{}) => {} 
find(filter,projection) => User.find({name:"urvish",...etc},{}) =[]
updateMany(filter,updatedData,options) 
findOneAndUpdate(filter,updatedData,options)
findByIdAndUpdate(id,updatedData,options) 
findByIdAndUpdate(id,updatedData,options)
findByIdAndRemove(id)
findByIdAndDelete(id)


*/
