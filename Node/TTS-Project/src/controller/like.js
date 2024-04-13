// create like = auth =>  userid from me
// remove like = auth =>  userid from me and that me available in like
// get likes by post => count and userData(populate)

import { modals } from "../model";
import { SavePost } from "../model/savedPost";

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

export const LikeDisLike = (req, res) => {
  let input = req?.body;
  input.userId = req?.me?._id;

  // find userId + postId
  // jo male to remove and decrement from likeCount of post
  modals.Like.create(input)
    .then(async (resData) => {
      await modals.Post.findByIdAndUpdate(resData.postId, {
        $inc: { likeCount: 1 },
      });
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
