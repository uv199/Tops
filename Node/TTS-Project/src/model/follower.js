import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const followerSchema = mongoose.Schema(
  {
    senderId: {
      type: ObjectId,
      ref: "user",
    },
    reciverId: {
      type: ObjectId,
      ref: "user",
    },
    status: {
      type: String,
      enum: ["pending", "accept"],
    },
  },
  { timestamps: true }
);

export const Follower = mongoose.model("follower", followerSchema);
