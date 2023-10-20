import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const cartSchema = mongoose.Schema(
  {
    products: [
      {
        productId: { type: ObjectId, ref: "product" },
        count: Number,
      },
    ],
    userId: { type: ObjectId, ref: "user" },
  },
  { timestamps: true }
);

export default mongoose.model("cart", cartSchema);
