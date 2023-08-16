import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  name: String,
  email: String,
  number: Number,
});

export default mongoose.model("user", userSchema);
