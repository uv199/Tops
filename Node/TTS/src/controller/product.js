import { modal } from "../model";

export const getAll = (req, res) => {
  modal?.Product.find({})
    .then((resData) => {
      console.log("resData", resData);
      res.send(resData);
    })
    .catch((err) => {
      res.send(err);
    });
};
