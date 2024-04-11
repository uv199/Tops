import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const postSchema = mongoose.Schema(
  {
    type: {
      type: String,
      enum: {
        values: ["post", "reel"],
        message: "{VALUE} is not supported",
      },
    },
    post: [String],
    caption: {
      type: String,
      trim: true,
    },
    hashTag: [String],
    tagUserId: [{ type: ObjectId, ref: "user" }],
    userId: {
      type: ObjectId,
      ref: "user",
    },
    // coordinates: {
    //   type: {
    //     type: ["Point"],
    //     required: true,
    //   },
    //   coordinates: {
    //     type: [Number],
    //     required: true,
    //   },
    // },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
// postSchema.index({ coordinates: "2dsphere" });

export const Post = mongoose.model("post", postSchema);
