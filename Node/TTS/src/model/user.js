import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    age: Number,
    age: Number,
    dob: Date,
    image: String,
    userType: String,
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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
userSchema.pre("findOneAndUpdate", async function (next) {
  console.log("-=-=-==0=-0=-0=-0=-");
  // if (!this.isModified("password")) return next();
  // this.password = await bcrypt.hash(this.password, 12);
  // next();
});

export const User = mongoose.model("user", userSchema);
