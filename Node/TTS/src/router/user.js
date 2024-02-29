import express from "express";
import bcrypt from "bcryptjs";
import { User } from "../model/user";

const router = new express.Router();

router.get("/getAll", (req, res) => {
  User.find({})
    .then((resData) => {
      console.log("resData", resData);
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
      res.send(resData);
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
router.put("/password-reset/:id", async (req, res) => {
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
      // let match = await bcrypt.compare(password, userRes?.password);
      let match = await userRes.validatePassword(password);
      console.log("-----------  match----------->", match);
      if (match) {
        res.send(userRes);
      } else {
        res.status(404).send("password not match");
      }
    })
    .catch((err) => res.send(err.message));
});

router.post("/delete/:id", (req, res) => {
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

// let obj = { password:"123"}

// // obj.password = convert 1
// obj

// $2a$12$rMvdsItusbIEypw42OWwOuy24kHfn/7kBLkp5CgSJBmr6gv83ZuRm
// $2a$12$/GK/neeTmoVc43/s0l1gpuzHDjXbD.P6jj2l1jroIB1p3Za635h9i
