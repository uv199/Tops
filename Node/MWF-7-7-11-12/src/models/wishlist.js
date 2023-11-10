import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const wishListSchema = mongoose.Schema(
  {
    products: [{ type: ObjectId, ref: "product" }],
    userId: ObjectId,
  },
  { timestamps: true }
);

export default mongoose.model("wishlist", wishListSchema);
