import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    email: String,
    password: String,
    gender: String,
    hobby: [String],
    address: {
      city: String,
      pinCode: Number,
      state: String,
    },
    siblings: [{ name: String, age: Number }],
  },
  { timestamps: true }
);

export const User = mongoose.model("user", userSchema);
