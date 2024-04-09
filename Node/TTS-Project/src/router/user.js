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

export default router;
