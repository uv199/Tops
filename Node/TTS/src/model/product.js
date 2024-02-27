import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    discount: Number,
    category: String,
    subCategory: [String],
    image: [String],
    color: [String],
    thumbnail: String,
    availableCount: Number,
    isAvailable: Boolean,
    size: [String],
    rating: String,
    offer: String,
    gender: String,
  },
  { timestamps: true }
);

export const Product = mongoose.model("product", productSchema);
