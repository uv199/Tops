import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const msgSchema = mongoose.Schema({
  senderId: {
    type: ObjectId,
    ref: "user",
  },
  roomId: {
    type: String,
  },
  reciverId: [
    {
      type: ObjectId,
      ref: "user",
    },
  ],
});

export const Message = mongoose.modal("message", msgSchema);
