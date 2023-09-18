import jwt from "jsonwebtoken";
import { model } from "../models";

export const authorized = async (req, res, next) => {
  // console.log(req.headers.authorization)
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log("token", token);
    // const token = req.headers.auth_token

    const data = jwt.verify(token, process.env.SECRET_KEY);
    // console.log("data", data);
    const userData = await model.User.findOne({ email: data?.email });
    req.loginUser = userData;
    // console.log("userData", userData);
    // if (data) req.body.user = data
    if (data) next();
    else throw new Error("you are not authorized");
  } catch (error) {
    throw new Error("you are not authorized");
  }
};

export const AdminAuth = (req, res, next) => {
  // console.log(req.headers.authorization)
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log("token", token);
    const data = jwt.verify(token, process.env.SECRET_KEY);
    console.log("data---->-------------->", data);
    if (data.userType !== "admin") throw new Error("You are not authorized");
    if (data) next();
    else throw new Error("you are not authorized");
  } catch (error) {
    throw new Error("you are not authorized");
  }
};
