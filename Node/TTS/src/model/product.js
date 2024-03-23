import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please enter title"],
    },
    description: { type: String, minLength: 10, lowercase: true, trim: true },
    price: Number,
    discount: {
      type: Number,
      min: [200, "Please enter value above 200"],
      max: 500,
    },
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
    gender: { type: String, enum: ["male", "female"] },
  },
  { timestamps: true }
);

export const Product = mongoose.model("product", productSchema);
