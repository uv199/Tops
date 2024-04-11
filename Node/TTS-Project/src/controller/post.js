// create post => auth => get userid from me
// delete post => auth => only creater can delete
// get my post => auth => get all post of token user
// getAll post

import { modals } from "../model";

export const getByUser = (req, res) => {
  modals.Post.find({ userId: req?.me?._id })
    .then((resData) => {
      res.status(200).send({ data: resData, success: true, message: "" });
    })
    .catch((err) => {
      res
        .status(400)
        .send({ data: null, success: false, message: err.message });
    });
};

export const getAll = (req, res) => {
  modals.Post.find({})
    .then((resData) => {
      res.status(200).send({ data: resData, success: true, message: "" });
    })
    .catch((err) => {
      res
        .status(400)
        .send({ data: null, success: false, message: err.message });
    });
};

export const create = (req, res) => {
  let input = req?.body;
  input.userId = req?.me?._id;
  console.log("-----------  input----------->", input)
  modals.Post.create(input)
    .then((resData) => {
      res
        .status(200)
        .send({ data: resData, success: true, message: "Create succesfully" });
    })
    .catch((err) => {
      res
        .status(400)
        .send({ data: null, success: false, message: err.message });
    });
};

export const remove = (req, res) => {
  modals.Post.findByOneAndRemove({ _id: req?.params?.id, userId: req.me._id })
    .then((resData) => {
      res
        .status(200)
        .send({ data: null, success: true, message: "Delete succesfully" });
    })
    .catch((err) => {
      res
        .status(400)
        .send({ data: null, success: false, message: err.message });
    });
};
