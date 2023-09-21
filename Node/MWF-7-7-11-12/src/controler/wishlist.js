import { model } from "../models";

export const createWishlist = (req, res) => {
  model.WishList.create(req?.body)
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};

export const getByUserId = (req, res) => {
  model.WishList.findById(req?.params?.id)
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};

export const updateWishlist = (req, res) => {
  model.WishList.findByIdAndUpdate(req?.params?.id, req?.body, { new: true })
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};
