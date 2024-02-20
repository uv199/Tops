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

router.post("/create", (req, res) => {
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

export default router;
