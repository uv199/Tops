import mongoose from "mongoose";

let ObjectId = mongoose.Schema.Types.ObjectId;

const tokenSchema = mongoose.Schema(
  {
    token: [{ type: String }],
    userId: ObjectId,
  },
  { timestamps: true }
);

export const Token = mongoose.model("token", tokenSchema);
