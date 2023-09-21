import { model } from "../models";

export const createOrder = (req, res) => {
  model.Order.create(req?.body)
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};

export const getOrderById = (req, res) => {
  model.Order.findById(req?.params?.id)
    .populate({ path: "productId" })
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};

export const updateOrder = (req, res) => {
  model.Order.findByIdAndUpdate(req?.params?.id, req?.body, { new: true })
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};

export const deleteOrder = (req, res) => {
  model.Order.findByIdAndRemove(req?.params?.id)
    .then((resData) => {
      res.send({ status: 200, message: "Delete successFully...!" });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};
