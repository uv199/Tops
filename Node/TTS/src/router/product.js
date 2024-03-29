import express from "express";
import { Product } from "../model/product";
import { getAll } from "../controller/product";

const router = new express.Router();

router.get("/getAll", getAll);

router.post("/create", (req, res) => {
  let input = req?.body;
  Product.create(input)
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
  Product.findByIdAndUpdate(req?.params?.id, input)
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
  Product.findByIdAndRemove(req?.params?.id, input)
    .then((resData) => {
      console.log("resData", resData);
      res.send(resData);
    })
    .catch((err) => {
      res.send(err);
    });
});

export default router;

/*

product -> userId 
...productData ,
userId:{
  ...userData,
  adminId:{
    ...userData
  }
}
*/
