import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    brand: String,
    gender: {
      type: String,
      enum: ["male", "female", "kids"],
    },
    price: Number,
    images: [String],
    thumbnail: String,
    discountPercentage: Number,
    category: { type: [String] },
    color: { type: [String], default: ["red", "black", "white"] },
    size: { type: [String], default: ["44", "45", "42", "43"] },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    availableStock: Number,
    rating: { type: Number, default: 0 },
    totalRaters: { type: Number, default: 0 },
    totalSoldUnit: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("product", productSchema);
