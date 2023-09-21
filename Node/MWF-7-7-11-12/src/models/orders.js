import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = mongoose.Schema(
  {
    products: [
      {
        productId: ObjectId,
        count: Number,
      },
    ],
    userId: ObjectId,
    paymentMethod: {
      type: String,
      enum: ["upi", "online_banking", "cod"],
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "cancle"],
    },
    status: {
      type: String,
      enum: ["pending", "processing", "deleverd"],
    },
    address: {
      add: String,
      city: String,
      state: String,
      pinCode: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("order", orderSchema);
