import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  DOB: {
    type: Date,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    minLength: 8,
  },
  city: String,
  State: String,
  addLine1: String,
  addLine2: String,
  pinCode: String,
  userType: {
    type: String,
    enum: ["user", "admin"],
  },
});

export const User = mongoose.model("user", userSchema);
