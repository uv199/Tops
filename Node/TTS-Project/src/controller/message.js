import { modals } from "../model";
import NodeCache from "node-cache";

const myCache = new NodeCache();
export const getAll = (req, res) => {
  let value = myCache.get("msg");
  if (value) {
    res
      .status(200)
      .send({ message: "come from cash", data: value, success: true });
  } else {
    modals.Message.find({ senderId: req?.me?._id })
      .then((resData) => {
        myCache.set("msg", resData, 5);
        res.status(200).send({
          message: "come from database",
          data: resData,
          success: true,
        });
      })
      .catch((err) => {
        res
          .status(400)
          .send({ data: null, success: false, message: err.message });
      });
  }
};
export const sendMessage = (req, res) => {
  let input = req?.body;
  input.senderId = req?.me?._id;

  modals.Message.create(input)
    .then((resData) => {
      res.status(200).send({ data: resData, success: true, message: "" });
    })
    .catch((err) => {
      res
        .status(400)
        .send({ data: null, success: false, message: err.message });
    });
};
