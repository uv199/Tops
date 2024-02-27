import express from "express";
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
  console.log("-----------  matchUser----------->", matchUser);
  if (!matchUser) return new Error("user not found");
  else {
    matchUser.save();
    res.send("password chnaged");
  }
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
