import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  name: String,
  email: String,
  number: String,
  password: String,
  age: Number,
  address: {
    add: String,
    city: String,
    state: String,
    pinCode: String
  },
});

export default mongoose.model("user", userSchema);
