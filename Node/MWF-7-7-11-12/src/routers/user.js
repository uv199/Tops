import express from "express";
import { model } from "../models";
import jwt from "jsonwebtoken";
import bycrypt from "bcrypt";
import { emailService, emilaService } from "../functions/emailService";
import { sendOTP } from "../functions/otpServices";

const userRouter = express.Router();

const useToken = (data) => {
  return jwt.sign(data, process.env.SECRET_KEY);
};

// Get ALl User
userRouter.get("/getAll", (req, res) => {
  model.User.find({})
    .then((resData) => {
      if (resData.length > 0) {
        res.send({ status: "200", data: resData });
      } else {
        throw new Error("Data not found");
      }
    })
    .catch((err) => {
      res.send({ status: "400", mesage: err.message });
    });
});

userRouter.post("/signin", async (req, res) => {
  let { email, password } = req?.body;
  try {
    const matchUser = await model.User.findOne({ email });

    if (matchUser) {
      "matchUser", matchUser;
      let isMatchPass = await bycrypt.compare(password, matchUser.password);
      if (!isMatchPass) {
        res.send("email or password not match....!");
      } else {
        let token = useToken({
          email: matchUser.email,
          userType: matchUser.userType,
        });

        res.send({ status: 200, data: matchUser, token });
      }
    } else {
      res.send("Match user not found....!");
    }
  } catch (error) {
    res.send({ status: 400, error: error.mesage });
  }
});

// Get User By Id
// have to pass id in params
userRouter.get("/getUserById/:id", async (req, res) => {
  let id = req?.params?.id;
  try {
    let matchUser = await model.User.findById(id);
    console.log(" matchUser:", matchUser);
    if (matchUser) {
      res.send({ status: 200, data: matchUser });
    } else {
      res.send("Data not found...!");
    }
  } catch (error) {
    res.send({ status: "400", mesage: err.message });
  }
});

// Create user
userRouter.post("/create", async (req, res) => {
  let input = req?.body;
  model.User.create(input)
    .then((resData) => {
      res.send({ status: 200, data: resData });
      emilaService({
        to: resData.email,
        text: "welcome to ecommerce",
        subject: "wellcome message",
      });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
});

// Update User
userRouter.post(`/update/:id`, (req, res) => {
  let id = req?.params?.id;
  let data = req?.body;
  if (data.address) {
    for (const key in data.address) {
      data[`address.${key}`] = data.address[key];
    }
    delete data.address;
  }
  let password = data.password;
  delete data.password;
  model.User.findByIdAndUpdate(id, data, { new: true })
    .then(async (resData) => {
      resData.password = password;
      await resData.save();
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
});

userRouter.post("/sendotp", async (req, res) => {
  const user = await model.User.findOne({ email: req?.body?.email });
  if (user) {
    let otp = await sendOTP(user);
    console.log("🚀 ~ file: user.js:112 ~ userRouter.post ~ otp:", otp);
    user.code = otp;
    await user.save();
    res.send({ status: "200", data: user });
  } else {
    res.send({ status: "400", message: "User not found ...!" });
  }
});

// verifyotp
userRouter.post("/reset_passsword", async (req, res) => {
  try {
    let { otp, password } = req?.body;
    const user = await model.User.findOne({ code: otp });
    if (user) {
      let x = new Date() - new Date(user?.updatedAt);
      console.log("x:", x);
      if (x > 120000) {
        res.send({ status: 400, message: "otp expire...!" });
      } else {
        user.password = password;
        await user.save();
        res.send({ status: "200", data: user });
      }
    } else {
      res.send({ status: "400", message: "OTP is not match" });
    }
  } catch (error) {
    res.send({ status: "400", message: error.message });
  }
});

export default userRouter;
