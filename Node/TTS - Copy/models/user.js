import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/tts8")
  .then(() => {})
  .catch((err) => {});

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  address: {
    city: String,
    pinCode: Number,
  },
});

export const User = mongoose.model("user", userSchema);
