import jwt from "jsonwebtoken";
import { config } from "../config";
import { modals } from "../model";

export const auth = async (req, res, next) => {
  try {
    let token = req?.headers?.["x-token"];
    if (!token) throw new Error("Session invalid or expire");
    else {
      //  
      let data = jwt.verify(token, config.secret_key);
      const user = await modals.User.findById(data?.id);
      req.me = user;
      next();
    }
  } catch (error) {
    res
      .status(500)
      .send({ success: false, data: null, message: error.message });
  }
};

export const adminAuth = (req, res, next) => {
  if (req.me.userType === "admin") next();
  else throw new Error("You are not admin");
};
