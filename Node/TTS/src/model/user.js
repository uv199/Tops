import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const ObjectId = mongoose.Schema.Types.ObjectId;
const userSchema = mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
    },

    age: Number,
    dob: Date,
    image: String,
    userType: String,
    password: String,
    gender: { type: String, require: [true, "please give gender"] },
    adminId: {
      type: ObjectId,
      ref: "user",
    },
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

// model.create model.save()
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
});

userSchema.methods.validatePassword = async function (password) {
  console.log(this.password);
  console.log(password);
  return await bcrypt.compare(password, this.password);
};

// userSchema.pre("findOneAndUpdate", async function (next) {
//   console.log("-=-=-==0=-0=-0=-0=-");
//   // if (!this.isModified("password")) return next();
//   // this.password = await bcrypt.hash(this.password, 12);
//   // next();
// });

export const User = mongoose.model("user", userSchema);
