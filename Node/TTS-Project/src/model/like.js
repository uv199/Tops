import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const likeSchema = mongoose.Schema(
  {
    postId: {
      type: ObjectId,
      ref: "post",
    },
    userId: {
      type: ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

export const Like = mongoose.model("like", likeSchema);
