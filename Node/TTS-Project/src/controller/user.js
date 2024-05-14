import { Conference } from "twilio/lib/twiml/VoiceResponse";
import { modals } from "../model";
import jwt from "jsonwebtoken";
import { config } from "../config";
import bcrypt from "bcryptjs";

const createToken = (user) => {
  return jwt.sign({ email: user.email, id: user._id }, config.secret_key);
};

export const signup = async (req, res) => {
  let input = req.body;
  try {
    const match = await modals.User.findOne({
      $or: [{ email: input.email }, { contactNo: input.contactNo }],
    });

    if (match) throw new Error("email or password are used");

    let user = await modals.User.create(input);
    let token = createToken(user);
    await modals.Token.create({ token, userId: user?._id });

    res.status(200).send({
      success: true,
      data: user,
      token,
      message: "User create successfully",
    });
  } catch (error) {
    res
      .status(400)
      .send({ success: false, data: null, message: error.message });
  }
};

export const signin = async (req, res) => {
  let { email, password } = req.body;
  try {
    const matchUser = await modals.User.findOne({
      $or: [{ email: email }, { contactNo: email }],
    });

    if (!matchUser) throw new Error("User not found with credetial");
    let match = await matchUser.validatePassword(password);
    if (!match) throw new Error("Email of password not match");

    let token = createToken(matchUser);
    let matchTokendData = await modals.Token.findOne({
      userId: matchUser?._id,
    });
    console.log("-----------  matchTokendData----------->", matchTokendData);

    if (matchTokendData?.token?.length < 2) {
      matchTokendData.token.push(token);
      matchTokendData.save();
    } else {
      matchTokendData.token.shift();
      matchTokendData.token.push(token);
      matchTokendData.save();
    }

    res.status(200).send({
      success: true,
      data: matchUser,
      token,
      message: "User create successfully",
    });
  } catch (error) {
    res
      .status(400)
      .send({ success: false, token: "", data: null, message: error.message });
  }
};

export const forgetPassword = (req, res) => {};

export const resetPassword = async (req, res) => {
  let { newPassword, oldPassword } = req.body;
  try {
    let validate = await bcrypt.compare(oldPassword, req?.me?.password);
    if (!validate) throw new Error("Old password is not match");
    req.me.password = newPassword;
    req.me.save();
    res
      .status(200)
      .send({ data: null, message: "Password chnage success", success: true });
  } catch (error) {
    res
      .status(400)
      .send({ data: null, message: error.message, success: false });
  }
};
