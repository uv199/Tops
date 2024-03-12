import mongoose from "mongoose";

let ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = mongoose.Schema(
  {
    productId: {
      type: ObjectId,
      ref: "product",
    },
    userId: {
      type: ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("order", orderSchema);
