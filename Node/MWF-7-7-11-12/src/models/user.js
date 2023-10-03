import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

let emailValidate = (email) => {
  return validator.isEmail(email);
};
let userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    userType: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
    },
    email: {
      type: String,
      required: true,
      validate: [emailValidate, "Email is not acceptable"],
    },
    number: String,
    password: {
      type: String,
      required: true,
    },
    age: Number,
    address: [
      {
        add: String,
        city: String,
        state: String,
        pinCode: String,
      },
    ],

    code: Number,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  console.log("----->", this.isModified("password"));
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// userSchema.pre("save", async function (next) {
//   console.log("----->", this.isModified("password"))
//   if (!this.isModified("password")) next();
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// })

export default mongoose.model("user", userSchema);
