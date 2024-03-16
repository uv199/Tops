import jwt from "jsonwebtoken";
import { User } from "../model/user";

export const auth = async (req, res, next) => {
  let token = req?.headers?.authorization?.split?.(" ")?.[1];
  if (!token) return res.status(500).send("Session is invalid");
  let data = jwt?.verify?.(token, "131231");
  let matchUser = await User.findById(data._id);
  req.loginUser = matchUser;
  if (!matchUser) return res.status(500).send("session is invalid");
  else next();
};
export const adminAuth = async (req, res, next) => {
  let token = req?.headers?.authorization?.split?.(" ")?.[1];
  if (!token) return res.status(500).send("Session is invalid");
  let data = jwt?.verify?.(token, "131231");
  let matchUser = await User.findById(data._id);
  req.loginUser = matchUser;
  if (!matchUser || matchUser.userType !== "admin")
    return res.status(500).send("session is invalid");
  else next();
};
