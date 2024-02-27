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

router.post("/signup", (req, res) => {
  let input = req?.body;
  User.create(input)
    .then((resData) => {
      console.log("resData", resData);
      res.send(resData);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/update/:id", (req, res) => {
  let input = req?.body;
  User.findByIdAndUpdate(req?.params?.id, input)
    .then((resData) => {
      console.log("resData", resData);
      res.send(resData);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/delete/:id", (req, res) => {
  let input = req?.body;
  User.findByIdAndRemove(req?.params?.id, input)
    .then((resData) => {
      console.log("resData", resData);
      res.send(resData);
    })
    .catch((err) => {
      res.send(err);
    });
});

export default router;
