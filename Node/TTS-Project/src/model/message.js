import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const messageSchema = mongoose.Schema(
  {
    senderId: {
      type: ObjectId,
      ref: "user",
    },
    reciverId: {
      type: ObjectId,
      ref: "user",
    },
    message: {
      type: String,
      minLength: 1,
      unique: true,
    },
  },
  { timestamps: true }
);
// mySchema.index({field1: 1, field2: 1}, {unique: true});

export const Message = mongoose.model("message", messageSchema);
