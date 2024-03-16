import express from "express";
import { User } from "../model/user";
import jwt from "jsonwebtoken";
import { adminAuth, auth } from "../auth/auth";
import { sendMail } from "../functions/emailHandler";

const router = new express.Router();

const generateToken = (resData) => {
  let token = jwt.sign({ email: resData.email, _id: resData?._id }, "131231");
  return token;
};

router.get("/getAll", auth, (req, res) => {
  User.find({})
    .then((resData) => {
      // console.log("resData", resData);
      res.send(resData);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/signup", async (req, res) => {
  let input = req?.body;
  User.create(input)
    .then((resData) => {
      let token = generateToken(resData);
      sendMail();
      res.send({ data: resData, token });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/update/:id", (req, res) => {
  let input = req?.body;
  User.findOneAndUpdate({ _id: req?.params?.id }, input)
    .then((resData) => {
      console.log("resData", resData);
      res.send(resData);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/password-reset/:id", auth, async (req, res) => {
  let matchUser = await User.findById(req?.params?.id);
  if (!matchUser) return new Error("user not found");
  else {
    if (req?.body?.password) {
      console.log("----->");
      matchUser.password = req.body.password;
      matchUser.age = 1000;
    }
    await matchUser.save();
    res.send("password chnaged");
  }
});

router.post("/login", (req, res) => {
  let { email, password } = req?.body;

  // const user = User.findOne({email})
  // user.validatePassword
  User.findOne({ email })
    .then(async (userRes) => {
      let match = await userRes.validatePassword(password);
      let token = generateToken(userRes);
      if (match) {
        res.send({ data: userRes, token });
      } else {
        res.status(404).send("password not match");
      }
    })
    .catch((err) => res.send(err.message));
});

router.post("/delete/:id", adminAuth, (req, res) => {
  let input = req?.body;
  User.findByIdAndRemove(req?.params?.id, input)
    .then((resData) => {
      // console.log("resData", resData);
      res.send(resData);
    })
    .catch((err) => {
      res.send(err);
    });
});

export default router;

//
