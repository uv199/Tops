import express from "express";
import { model } from "../models";
import { AdminAuth } from "../auth";
import { productByRange } from "../controler/product";

const productRouter = express.Router();

productRouter.post("/create", AdminAuth, (req, res) => {
  model.Product.create(req?.body)
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
});

productRouter.get("/getProductById/:id", (req, res) => {
  model.Product.findById(req?.params?.id)
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
});

productRouter.get("/getProductByRang", productByRange);

productRouter.put("/update/:id", (req, res) => {
  model.Product.findByIdAndUpdate(req?.params?.id, req?.body, { new: true })
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
});

productRouter.delete("/delete/:id", (req, res) => {
  model.Product.findByIdAndRemove(req?.params?.id)
    .then((resData) => {
      res.send({ status: 200, message: "Delete successFully...!" });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
});

export default productRouter;
