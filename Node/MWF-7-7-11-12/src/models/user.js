import mongoose from "mongoose";
import validator from "validator"

let validatEail = (email) => {
  return validator.isEmail(email)
}
let passsValidate = (password) => {
  return validator.isStrongPassword(password)
}
let userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: [validatEail, "email is not ----"]
  },
  number: String,
  password: {
    required: true,
    validate: [passsValidate, "please enter strong pass"],
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
