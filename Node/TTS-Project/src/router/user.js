import express from "express";
import {
  forgetPassword,
  resetPassword,
  signin,
  signup,
} from "../controller/user";
import { auth } from "../middleware/auth";

const router = express.Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/forget-password", forgetPassword);

router.post("/reset-password", auth, resetPassword);

// cookies
router.post("/cookies", (req, res) => {
  res.clearCookie("auth");
  // res.cookie("auth", "hello cookies");
  res.send("cokies set...!");
});
router.get("/get-cookies", (req, res) => {
  console.log("---->", req.cookies);
  res.send("cokies set...!");
});

export default router;
