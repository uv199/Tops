import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: [true, "Email is require"],
    // valid
  },
  password: {
    type: String,
    require: [true, "Password is require"],
    // valid
  },
  userType: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

//  password bycrypt

export const User = mongoose.modal("user", userSchema);
