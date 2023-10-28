import { model } from "../models";

export const getall = (req, res) => {
  model.Cart.find({ userId: req?.loginUser?.id })
    .populate([{ path: "products.productId" }])
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};

export const create = async (req, res) => {
  console.log("req?.loginUser", req?.loginUser);
  model.Cart.update(
    { userId: req?.loginUser?._id },
    { ...req?.body, userId: req?.loginUser?.id },
    { upsert: true }
  )
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};

export const update = (req, res) => {
  model.Cart.findByIdAndUpdate(req?.params?.id, req?.body, { new: true })
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};

export const remove = (req, res) => {
  model.Cart.findByIdAndRemove(req?.params?.id)
    .then((resData) => {
      res.send({ status: 200, message: "Delete successFully...!" });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};
