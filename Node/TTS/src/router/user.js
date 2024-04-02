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
import multer from "multer";
import fs from "fs-extra";

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    let isAvailable = await fs.exists("./public/data/uploads/");
    if (!isAvailable) await fs.mkdirp("./public/data/uploads/");
    cb(null, "./public/data/uploads/");
  },
  filename: (req, file, cb) => {
    let extension = file.originalname.split(".").pop();
    cb(null, Date.now().toString() + `.${extension}`);
  },
});
const router = new express.Router();
const upload = multer({ storage });

router.get("/getAll", getAll);

router.post("/signup", signUp);

router.put("/update/:id", update);

router.put("/password-reset/:id", auth, passwordReset);

router.post("/login", login);

router.post("/delete/:id", adminAuth, deleteUser);

router.post("/sendOtp", sendOTP);

router.post("/otp-login", otpSignin);

router.post("/uploads", upload.single("profile"), (req, res) => {
  res.status(200).send(req.file);
});

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
