import mongoose from "mongoose";
import validator from "validator"

let emailValidate = (email) => {
  return validator.isEmail(email)
}
let userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: [emailValidate, "Email is not acceptable"]
  },
  number: String,
  password: {
    required: true,
    type: String
  },
  age: Number,
  address: {
    add: String,
    city: String,
    state: String,
    pinCode: String
  },
});


export default mongoose.model("user", userSchema);
