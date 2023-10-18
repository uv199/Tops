import express from "express";
import {
  getAll,
  getUserById,
  reset_passsword,
  sendotp,
  signIn,
  signUp,
  updateUser,
} from "../controler/user";
import { AdminAuth } from "../auth";

const userRouter = express.Router();

userRouter.get("/getAll", getAll);

userRouter.get("/getUserById/:id", getUserById);

userRouter.post("/signin", signIn);

userRouter.post("/signUp", signUp);

userRouter.post(`/update/:id`, updateUser);

userRouter.post("/sendotp", sendotp);

userRouter.post("/reset_passsword", reset_passsword);

export default userRouter;
