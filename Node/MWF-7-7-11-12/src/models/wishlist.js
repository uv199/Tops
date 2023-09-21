import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const wishListSchema = mongoose.Schema(
  {
    products: [ObjectId],
    userId: ObjectId,
  },
  { timestamps: true }
);

export default mongoose.model("wishlist", wishListSchema);
