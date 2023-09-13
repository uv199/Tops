import jwt from "jsonwebtoken";

export const authorized = (req, res, next) => {
  // console.log(req.headers.authorization)
  try {
    const token = req.headers.authorization.split(" ")[1];
    // const token = req.headers.auth_token

    const data = jwt.verify(token, "12345teghsg");
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
