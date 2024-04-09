import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const savePostSchema = mongoose.Schema(
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

export const SavePost = mongoose.model("savePost", savePostSchema);
