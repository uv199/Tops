import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;
const roomSchema = mongoose.Schema({
  adminId: {
    type: ObjectId,
    ref: "user",
  },
  roomId: {
    type: String,
  },
  userIds: [
    {
      type: ObjectId,
      ref: "user",
    },
  ],
  roomType: {
    type: String,
    enum: ["oneToOne", "Group"],
    default: "oneToOne",
  },
});

export const Room = mongoose.modal("room", roomSchema);
